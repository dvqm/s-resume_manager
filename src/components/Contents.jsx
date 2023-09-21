import React, { useContext, useState } from 'react';
import { cvExamples } from '../state/templates';
import { InitialState } from '../state/context.jsx';
import ContentsResumesList from './ManageContents/ContentsResumeList';


const ResumeList = () => {

  const { accessResumes, accessResume, accessList } = useContext(InitialState);
  const [resumes, setResumes] = useState(accessResumes());
  const [currentResume, _] = useState(accessResume());
  console.log('accessList', accessList());

  const addMock = () => {
    cvExamples.forEach((mockedResume) => {
      const index = resumes.findIndex((resume) => resume.mock === mockedResume.mock);

      if (index !== -1) {
        setResumes(prevState => {
          prevState[index] = mockedResume;
          return prevState;
        });
      } else {
        setResumes(prevState => {
          prevState.unshift(mockedResume);
          return prevState;
        });
      }
    });
  }

  const deleteMock = () => {
    setResumes(prevState => prevState.filter((resume) => !resume.hasOwnProperty('mock')));
  }

  return (
    <>
      {accessList() && (
        <ContentsResumesList
          currentResume={currentResume} resumes={resumes}
          deleteMock={deleteMock} addMock={addMock}
        />
      )}
    </>
  );
}

export default ResumeList;
