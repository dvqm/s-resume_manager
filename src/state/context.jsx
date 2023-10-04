import { template, titles } from './templates';
import { createContext, useReducer, useState } from 'react';
import resumeReducer from './resumeReducer';
import resumesReducer from './resumesReducer';

export const InitialState = createContext(template);

const ContextProvider = ({ children }) => {
  const [resume, resumeDispatch] = useReducer(resumeReducer, template);
  const [original, setOriginal] = useState(resume.name);
  const [resumes, resumesDispatch] = useReducer(resumesReducer, []);
  const [current, setCurrent] = useState(true);
  const [list, setList] = useState(false);

  const chooseResume = (resumeName) => {
    setOriginal(resumeName);
    const chosenResume = resumes.filter(
      (item) => item.name === resumeName)[0];
    resumeDispatch({ t: 'RES_UPD', p: chosenResume });
  }

  const accessOriginal = (value) => {
    if (value) setOriginal(value)
    else return original;
  }

  const accessList = (value) => {
    if (value) setList(value)
    else return list;
  }

  return <InitialState.Provider value={{ titles, resume, resumes, resumeDispatch, resumesDispatch, chooseResume, accessList, accessOriginal }}>
    {children}
  </InitialState.Provider>
}

export default ContextProvider;
