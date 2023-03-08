import React from 'react';
import { Menu } from '@mui/icons-material';
import { contentsStyles } from '../mainTheme/localStyles';
import Button from '@mui/material/Button';

class ContentsCv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
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
      GridStyled,
      DrawerStyled,
      IconButtonStyled,
      ListStyled,
      ListButton,
    } = contentsStyles;

    const { state, helper, addMock, deleteMock, ...other } = this.props;

    const resumesList = () => {
      return (
        <>
          <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={this.addMock}
          >
            Use Mock Data
          </Button>

          <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={this.deleteMock}
          >
            Delete Mock Data
          </Button>

          <ListStyled>
            {this.props.state.cvBase.map((cv) => (
              <ListButton
                key={cv.cvName}
                onClick={() => this.handleChooseCv(cv.cvName)}
              >
                {cv.cvName}
              </ListButton>
            ))}
          </ListStyled>
        </>
      );
    };

    return (
      <GridStyled {...other}>
        <IconButtonStyled onClick={this.toggleDrawer}>
          <Menu sx={{ fontSize: 48 }} />
        </IconButtonStyled>
        <DrawerStyled
          anchor='top'
          open={this.state.isDrawerOpen}
          onClose={this.toggleDrawer}
        >
          {resumesList()}
        </DrawerStyled>

        <BoxStyled>{resumesList()}</BoxStyled>
      </GridStyled>
    );
  }
}

export default ContentsCv;
