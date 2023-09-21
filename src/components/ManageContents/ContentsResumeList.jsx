import React from 'react';
import mainTheme from '../../mainTheme/globalTheme.js';
import { contentsStyles } from '../../mainTheme/localStyles';
import { Button, ListItem, ListItemText, IconButton } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ContentsResumesList = ({currentResume, resumes, deleteMock, addMock}) => {
  const { BoxStyled,ListStyled, ListBtn, ListBtnSelected } = contentsStyles;

    const mdBreakpoint = mainTheme.breakpoints.values.md;
    const mockBtns = () => {
      const styles = {
        btn: {
          border: 'none',
          fontSize: 10,
          '&:hover': {
            border: 'none',
          },
        },
        listItem: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
        },
      };

      return (
      <BoxStyled>
        <ListItem sx={styles.listItem}>
          {resumes.some((cv) => cv.mock) ? (
            <Button
              sx={styles.btn}
              variant='outlined'
              color='primary'
              size='small'
              onClick={deleteMock}
            >
              Delete Demo
            </Button>
          ) : (
              <Button
                sx={styles.btn}
                variant='outlined'
                color='primary'
                size='small'
                onClick={addMock}
              >
                Load Demo
              </Button>
            )}
          {window.innerWidth <= mdBreakpoint &&
            <IconButton /*onClick={}*/>
              <CloseOutlinedIcon />
            </IconButton>
          }
        </ListItem>
      </BoxStyled>
      );
    };

    return (
      <>
        <ListStyled>
          {resumes.length > 0 ? (
            <>
              {mockBtns()}
              {resumes.map((resume) => (
                <React.Fragment key={resume.cvName}>
                  {currentResume.cvName === resume.cvName ? (
                    <ListBtnSelected /*onClick={handleChooseCv}*/>
                      <ArticleOutlinedIcon />
                      <ListItemText>{resume.cvName}</ListItemText>
                    </ListBtnSelected>
                  ) : (
                    <ListBtn /*onClick={handleChooseCv}*/>
                      <ArticleOutlinedIcon />
                      <ListItemText>{resume.cvName}</ListItemText>
                    </ListBtn>
                  )}
                </React.Fragment>
              ))}
            </>
          ) : (
            <>
              {mockBtns()}
              <ListItemText sx={{ textAlign: 'center' }}>
                No saved resumes
              </ListItemText>
            </>
          )}
        </ListStyled>
      </>
    );
  };

export default ContentsResumesList;
