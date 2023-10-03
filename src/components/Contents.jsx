import React, { useContext } from 'react';
import { contentsStyles } from '../mainTheme/localStyles';
import { ListItemText } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { InitialState } from '../state/context';
import MockBtns from './ManageContents/ResumeListMockBtns';

const ResumesList = () => {
  const { resume, resumes, resumesDispatch, chooseResume, accessList } = useContext(InitialState);
  const { ListStyled, ListBtn, ListBtnSelected } = contentsStyles;

  const addMock = () => resumesDispatch({ t: 'RES_ADD_MOCK' });
  const deleteMock = () => resumesDispatch({ t: 'RES_DEL_MOCK' });

  return <>
    {accessList() && (
      <ListStyled>
        {resumes.length > 0 ? (
          <>
            <MockBtns addMock={addMock} deleteMock={deleteMock}
              resumes={resumes} accessList={accessList} />
            {resumes.map((item) => <React.Fragment key={item.name}>
              {resume.name === item.name ? (
                <ListBtnSelected onClick={chooseResume}>
                  <ArticleOutlinedIcon />
                  <ListItemText>{item.name}</ListItemText>
                </ListBtnSelected>
              ) : (
                  <ListBtn onClick={chooseResume}>
                    <ArticleOutlinedIcon />
                    <ListItemText>{item.name}</ListItemText>
                  </ListBtn>
                )}
            </React.Fragment>
            )}
          </>
        ) : (
          <>
            <MockBtns addMock={addMock} deleteMock={deleteMock}
                resumes={resumes} accessList={accessList} />
            <ListItemText sx={{ textAlign: 'center' }}>
              No saved resumes
            </ListItemText>
          </>
        )}
      </ListStyled>

    )}
  </>
};

export default ResumesList;
