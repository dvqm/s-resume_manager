import mainTheme from '../mainTheme/globalTheme';
import { cvTemplate, titleValues } from './templates';
import { createContext, useState } from 'react';

export const InitialState = createContext();

const ContextProvider = ({ children }) => {
  const [resumes, setResumes] = useState([]);
  const [resume, setResume] = useState({ ...cvTemplate });

  const [titles, _] = useState({ ...titleValues });

  const [current, setCurrent] = useState(true);
  const [pdf, setPdf] = useState(false);
  const [list, setList] = useState(false);

  const accessResumes = (newValue) => {
    if (newValue) {
      setResumes(newValue);
    } else {
      return resumes;
    }
  }

  const accessResume = (newValue) => {
    if (newValue) {
      setResume({ ...resume, ...newValue });
    } else {
      return resume;
    }
  }

  const readTitles = () => titles;

  const accessCurrent = (newValue) => {
    if (newValue) {
      setCurrent(newValue);
    } else {
      return current;
    }
  }

  const accessPdf = (newValue) => {
    if (newValue) {
      setPdf(newValue);
    } else {
      return pdf;
    }
  }

  const accessList = (newValue) => {
    if (newValue) {
      setList(newValue);
    } else {
      return list;
    }
  }

  return (
    <InitialState.Provider value={{ accessResumes, accessResume, readTitles, accessCurrent, accessPdf, accessList }}>
      {children}
    </InitialState.Provider>
  );
}

export default ContextProvider;
