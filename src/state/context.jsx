import { template, titles } from './templates';
import { createContext, useReducer, useState } from 'react';
import resumeReducer from './resumeReducer';
import resumesReducer from './resumesReducer';

export const InitialState = createContext(template);

const ContextProvider = ({ children }) => {
  const [resume, resumeDispatch] = useReducer(resumeReducer, template);
  const [resumes, resumesDispatch] = useReducer(resumesReducer, []);
  const [current, setCurrent] = useState(true);
  const [list, setList] = useState(false);

  const chooseResume = (e) => {
    const chosenResume = resumes.filter(
      (item) => item.name === e.target.textContent,
    )[0];
    resumeDispatch({ t: 'RES_UPD', p: chosenResume });
  }

  const accessList = (value) => {
    if (value) setList(value)
    else return list;
  }

  return <InitialState.Provider value={{ titles, resume, resumes, resumeDispatch, resumesDispatch, chooseResume, accessList }}>
    {children}
  </InitialState.Provider>
}

export default ContextProvider;
