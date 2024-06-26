import { template, titles } from "./templates";
import { createContext, useEffect, useReducer, useState } from "react";
import resumeReducer from "./resumeReducer";
import resumesReducer from "./resumesReducer";
import { auth, syncData } from "../database/firebase";

export const InitialState = createContext(template);

const ContextProvider = ({ children }) => {
  const [resume, resumeDispatch] = useReducer(resumeReducer, template);
  const [original, setOriginal] = useState(resume);
  const [resumes, resumesDispatch] = useReducer(resumesReducer, []);
  const [list, setList] = useState(false);
  const [manualList, setManualList] = useState(false);
  const [anyEditMode, setAnyEditMode] = useState(false);
  const [pdf, setPdf] = useState(false);
  const [manualPdf, setManualPdf] = useState(false);
  const [initData, setInitData] = useState(true);
  const [userLogged, setUserLogged] = useState(true);

  const setLocalData = (data) =>
    localStorage.setItem("data", JSON.stringify(data));

  useEffect(() => {
    const init = localStorage.getItem("data");
    if (!userLogged) {
      if (!init.resumes || init.resumes.length === 0) {
        resumesDispatch({ t: "RES_ADD_MOCK" });
      }
    }
  }, [userLogged]);

  useEffect(() => {
    const fetchData = async () => {
      const init = await syncData();
      if (initData) {
        setInitData(false);
        resumesDispatch({ t: "RES_LOAD", p: init.resumes });
      }
    };

    fetchData();
  }, [resumes, initData]);

  useEffect(() => {
    syncData();
  }, [resumes]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserLogged(true);
        const init = await syncData();
        resumesDispatch({ t: "RES_LOAD", p: init.resumes });
      } else {
        setUserLogged(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const chooseResume = (resumeName) => {
    const chosenResume = resumes.filter((item) => item.name === resumeName)[0];
    setOriginal(chosenResume);
    resumeDispatch({ t: "RES_UPD", p: chosenResume });
  };

  const accessOriginal = (value) => {
    if (value) setOriginal(value);
    else return original;
  };

  const accessList = (value = null) => {
    if (value !== null) setList(value);
    else return list;
  };

  const accessManualList = (value = null) => {
    if (value !== null) setManualList(value);
    else return manualList;
  };

  const accessPdf = (value = null) => {
    if (value !== null) setPdf(value);
    else return pdf;
  };

  const accessManualPdf = (value = null) => {
    if (value !== null) setManualPdf(value);
    else return manualPdf;
  };

  return (
    <InitialState.Provider
      value={{
        titles,
        chooseResume,
        resume,
        resumes,
        resumeDispatch,
        resumesDispatch,
        accessList,
        accessManualList,
        accessPdf,
        accessManualPdf,
        accessOriginal,
        anyEditMode,
        setAnyEditMode,
      }}
    >
      {children}
    </InitialState.Provider>
  );
};

export default ContextProvider;
