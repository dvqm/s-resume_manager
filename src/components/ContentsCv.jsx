import React from 'react';
import { Menu } from '@mui/icons-material';
import { contentsStyles } from '../mainTheme/localStyles';
import Button from '@mui/material/Button';
import { ListItem, ListItemText } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

class ContentsCv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
      selectedCvName: '',
    };

    this.handleChooseCv = this.handleChooseCv.bind(this);

    this.addMock = this.addMock.bind(this);

    this.deleteMock = this.deleteMock.bind(this);
  }

  toggleDrawer = () => {
    this.setState((prevState) => ({
      isDrawerOpen: !prevState.isDrawerOpen,
    }));
  };

  handleChooseCv(cvName) {
    const cvBase = [...this.props.state.cvBase];

    const chosenCv = cvBase.filter((cv) => cv.cvName === cvName)[0];

    this.props.helper.setState('currentCv', chosenCv);

    this.setState({ ...this.state, selectedCvName: cvName });
  }

  addMock() {
    this.props.addMock();
  }

  deleteMock() {
    this.props.deleteMock();
  }

  render() {
    const {
      BoxStyled,
      DrawerStyled,
      IconButtonStyled,
      ListStyled,
      ListBtn,
      ListBtnSelected,
    } = contentsStyles;

    const { isDrawerOpen, selectedCvName } = this.state;

    const resumesList = () => {
      const mockBtns = () => {
        const styles = {
          btn: {
            border: 'none',
            fontSize: 10,
            '&:hover': {
              border: 'none',
            },
          },
        };

        return (
          <ListItem>
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
                    {selectedCvName === cv.cvName ? (
                      <ListBtnSelected
                        onClick={() => this.handleChooseCv(cv.cvName)}
                      >
                        <ArticleOutlinedIcon />
                        <ListItemText>{cv.cvName}</ListItemText>
                      </ListBtnSelected>
                    ) : (
                      <ListBtn onClick={() => this.handleChooseCv(cv.cvName)}>
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
        <IconButtonStyled onClick={this.toggleDrawer}>
          <Menu sx={{ fontSize: 48 }} />
        </IconButtonStyled>
        <DrawerStyled
          anchor='top'
          open={isDrawerOpen}
          onClose={this.toggleDrawer}
        >
          {resumesList()}
        </DrawerStyled>

        <BoxStyled>{resumesList()}</BoxStyled>
      </>
    );
  }
}

export default ContentsCv;
