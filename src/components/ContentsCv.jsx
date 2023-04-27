import React from 'react';
import mainTheme from '../mainTheme/globalTheme.js';
import { contentsStyles } from '../mainTheme/localStyles';
import { Button, ListItem, ListItemText, IconButton } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

class ContentsCv extends React.Component {
  constructor(props) {
    super(props);

    this.handleChooseCv = this.handleChooseCv.bind(this);

    this.addMock = this.addMock.bind(this);

    this.deleteMock = this.deleteMock.bind(this);
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({
      isDrawerOpen: !prevState.isDrawerOpen,
    }));
  };

  handleChooseCv(e) {
    const cvBase = [...this.props.state.cvBase];

    const chosenCv = cvBase.filter(
      (cv) => cv.cvName === e.target.textContent,
    )[0];

    this.props.helper.setState('currentCv', chosenCv);
  }

  addMock() {
    this.props.addMock();
  }

  deleteMock() {
    this.props.deleteMock();
  }

  render() {
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
            {this.props.state.cvBase.some((cv) => cv.mock) ? (
              <Button
                sx={styles.btn}
                variant='outlined'
                color='primary'
                size='small'
                onClick={this.deleteMock}
              >
                Delete Demo
              </Button>
            ) : (
                <Button
                  sx={styles.btn}
                  variant='outlined'
                  color='primary'
                  size='small'
                  onClick={this.addMock}
                >
                  Load Demo
                </Button>
              )}
            {window.innerWidth <= mdBreakpoint &&
              <IconButton onClick={this.props.preview().list}>
                <CloseOutlinedIcon />
              </IconButton>
            }
          </ListItem>
        );
      };

      return (
        <>
          <ListStyled>
            {this.props.state.cvBase.length > 0 ? (
              <>
                {mockBtns()}
                {this.props.state.cvBase.map((cv) => (
                  <React.Fragment key={cv.cvName}>
                    {this.props.state.currentCv.cvName === cv.cvName ? (
                      <ListBtnSelected onClick={this.handleChooseCv}>
                        <ArticleOutlinedIcon />
                        <ListItemText>{cv.cvName}</ListItemText>
                      </ListBtnSelected>
                    ) : (
                        <ListBtn onClick={this.handleChooseCv}>
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
        {this.props.state.secondary.listPreview && (
          <BoxStyled>{resumesList()}</BoxStyled>
        )}
      </>
    );
  }
}

export default ContentsCv;
