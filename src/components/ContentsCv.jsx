import React, { useCallback } from 'react';
import mainTheme from '../mainTheme/globalTheme.js';
import { contentsStyles } from '../mainTheme/localStyles';
import { Button, ListItem, ListItemText, IconButton } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const ContentsCv = (props) => {
  const handleChooseCv = useCallback((e) => {
    const cvBase = [...props.state.cvBase];

    const chosenCv = cvBase.filter(
      (cv) => cv.cvName === e.target.textContent,
    )[0];

    props.helper.setState('currentCv', chosenCv);
  }, [props]);

  const addMock = useCallback(() => {
    props.addMock();
  }, [props]);

  const deleteMock = useCallback(() => {
    props.deleteMock();
  }, [props]);

  const { BoxStyled, ListStyled, ListBtn, ListBtnSelected } = contentsStyles;

  const resumesList = () => {
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
        <ListItem sx={styles.listItem}>
          {props.state.cvBase.some((cv) => cv.mock) ? (
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
            <IconButton onClick={props.preview().list}>
              <CloseOutlinedIcon />
            </IconButton>
          }
        </ListItem>
      );
    };

    return (
      <>
        <ListStyled>
          {props.state.cvBase.length > 0 ? (
            <>
              {mockBtns()}
              {props.state.cvBase.map((cv) => (
                <React.Fragment key={cv.cvName}>
                  {props.state.currentCv.cvName === cv.cvName ? (
                    <ListBtnSelected onClick={handleChooseCv}>
                      <ArticleOutlinedIcon />
                      <ListItemText>{cv.cvName}</ListItemText>
                    </ListBtnSelected>
                  ) : (
                    <ListBtn onClick={handleChooseCv}>
                      <ArticleOutlinedIcon />
                      <ListItemText>{cv.cvName}</ListItemText>
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

  return (
    <>
      {props.state.secondary.listPreview && (
        <BoxStyled>{resumesList()}</BoxStyled>
      )}
    </>
  );
}

export default ContentsCv;
