import React, { useContext, useState } from 'react';
import { resumesExamples } from '../state/templates';
import { InitialState } from '../state/context.jsx';
import ContentsResumesList from './ManageContents/ContentsResumeList';


const ResumeList = () => {

  const { accessResumes, accessResume, accessList } = useContext(InitialState);

  const addMock = () => {
    accessResumes(() => {
      const resumes = [...accessResumes()];

      resumesExamples.forEach((mockedResume) => {
        const index = resumes.findIndex((resume) => resume.mock === mockedResume.mock);

        if (index !== -1) {
          resumes[index] = mockedResume;
        } else {
          resumes.unshift(mockedResume);
        }
      });
      return resumes;
    });
  }

  const deleteMock = () => {
    accessResumes(() => {
      const resumes = [...accessResumes()];
      return resumes.filter((resume) => !resume.hasOwnProperty('mock'))
    });
  }

  return (
    <>
      {accessList() && (
        <ContentsResumesList
          accessResume={accessResume} accessResumes={accessResumes}
          deleteMock={deleteMock} addMock={addMock}
          accessList={accessList}
        />
      )}
    </>
  );
}

export default ResumeList;
