import React from 'react';
import ContentsCv from './components/ContentsCv';
import CurrentCv from './components/CurrentCv';
import ManageCv from './components/ManageCv';
import Auth from './database/Auth';
import { getData, saveData } from './database/firebase';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './mainTheme/globalTheme.js';
import { cvExamples, cvTemplate, staticFields } from './assets/templates';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cvBase: [],
      currentCv: { ...cvTemplate },
      secondary: {
        new: true,
      },
      static: { ...staticFields },
    };

    this.addMock = this.addMock.bind(this);

    this.deleteMock = this.deleteMock.bind(this);

    this.helper.setState = this.helper.setState.bind(this);
  }

  addMock() {
    const cvBase = [...this.state.cvBase];

    cvExamples.forEach((cv) => {
      const index = cvBase.findIndex((resume) => resume.mock === cv.mock);

      if (index !== -1) {
        cvBase[index] = cv;
      } else {
        cvBase.unshift(cv);
      }
    });

    this.helper.setState('cvBase', cvBase);
    saveData(cvBase);
  }

  deleteMock() {
    const cvBase = [...this.state.cvBase];

    const updated = cvBase.filter((cv) => !cv.hasOwnProperty('mock'));

    this.helper.setState('cvBase', updated);

    saveData(updated);
  }

  helper = {
    onChange: (keyName, field, e, id = false) => {
      const getEventValue = () => {
        if (e.target.type === 'checkbox') {
          return e.target.checked;
        } else if (field === 'photo') {
          return e.target.files[0];
        } else {
          return e.target.value;
        }
      };

      switch (true) {
        case field === 'cvName':
          this.setState({
            currentCv: {
              ...this.state.currentCv,
              cvName: getEventValue(),
            },
          });

          break;

        case typeof id === 'number':
          const index = this.state.currentCv[keyName].findIndex(
            (cv) => cv.id === id,
          );

          const section = [...this.state.currentCv[keyName]];
          section[index][field] = getEventValue();

          this.setState({
            ...this.state,
            currentCv: {
              ...this.state.currentCv,
              [keyName]: [...section],
            },
          });

          break;

        default:
          this.setState({
            ...this.state,
            currentCv: {
              ...this.state.currentCv,
              [keyName]: {
                ...this.state.currentCv[keyName],
                [field]: getEventValue(),
              },
            },
          });

          break;
      }
    },

    setState: (...params) => {
      const isNew = () => {
        return !this.state.cvBase.some(
          (cv) => cv.cvName === this.state.currentCv.cvName,
        );
      };

      let i = 0;

      const recursiveSetState = () => {
        if (i >= params.length) return;

        const key = params[i];

        const values = params[i + 1];

        i += 2;

        switch (key) {
          case 'cvName':
            this.setState(
              {
                ...this.state,
                currentCv: {
                  ...this.state.currentCv,
                  [key]: values,
                },
              },
              recursiveSetState,
            );
            break;

          case 'currentCv':
          case 'cvBase':
            this.setState(
              {
                ...this.state,
                [key]: values,
              },
              () => {
                this.setState({
                  ...this.state,
                  secondary: {
                    ...this.state.secondary,
                    new: isNew(),
                  },
                });

                if (key === 'cvBase') saveData(this.state.cvBase);

                recursiveSetState();
              },
            );
            break;

          default:
            this.setState(
              {
                ...this.state,
                currentCv: {
                  ...this.state.currentCv,
                  [key]: values,
                },
              },
              () => {
                this.setState({
                  ...this.state,
                  secondary: {
                    ...this.state.secondary,
                    new: isNew(),
                  },
                });
                recursiveSetState();
              },
            );
            break;
        }
      };

      recursiveSetState();
    },
  };

  componentDidMount() {
    const retrieveData = async () => {
      const cvBase = await getData();

      this.helper.setState('cvBase', cvBase);
    };

    retrieveData();
  }

  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <Grid container spacing={1}>
          <Auth item xs={12} md={3} helper={this.helper} />
          <ContentsCv
            item
            xs={12}
            md={6}
            justifyContent='center'
            state={this.state}
            helper={this.helper}
            addMock={this.addMock}
            deleteMock={this.deleteMock}
          />

          <Grid item xs={12} md={6}>
            <ManageCv state={this.state} helper={this.helper} />
            <CurrentCv state={this.state} helper={this.helper} />
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default App;
