import React from 'react';
import { contentsStyles } from '../../mainTheme/localStyles';
import { ListItemText } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MockBtns from './ResumeListMockBtns.jsx';

const ContentsResumesList = ({ accessResume, accessResumes, deleteMock, addMock, accessList }) => {
  const { ListStyled, ListBtn, ListBtnSelected } = contentsStyles;

  return <ListStyled>
    {accessResumes().length > 0 ? (
      <>
        <MockBtns deleteMock={deleteMock} addMock={addMock}
          accessResumes={accessResumes} accessList={accessList} />
        {accessResumes().map((resume) => (
          <React.Fragment key={resume.name}>
            {accessResume().name === resume.name ? (
              <ListBtnSelected /*onClick={handleChooseCv}*/>
                <ArticleOutlinedIcon />
                <ListItemText>{resume.name}</ListItemText>
              </ListBtnSelected>
            ) : (
              <ListBtn /*onClick={handleChooseCv}*/>
                <ArticleOutlinedIcon />
                <ListItemText>{resume.name}</ListItemText>
              </ListBtn>
            )}
          </React.Fragment>
        ))}
      </>
    ) : (
      <>
        <MockBtns deleteMock={deleteMock} addMock={addMock}
          accessResumes={accessResumes} accessList={accessList} />
        <ListItemText sx={{ textAlign: 'center' }}>
          No saved resumes
        </ListItemText>
      </>
    )}
  </ListStyled>
};

export default ContentsResumesList;
