import React from 'react';
import ContentsCv from './components/ContentsCv';
import CurrentCv from './components/CurrentCv';
import ManageCv from './components/ManageCv';
import Auth from './database/Auth';
import { getData, saveData } from './database/firebase';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './mainTheme/globalTheme.js';
import { cvExamples, cvTemplate, staticFields } from './assets/templates';
import { cvGrid } from './mainTheme/localStyles.js';
import { ResumeViewer } from './components/PdfLayout/PdfMarkup';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cvBase: [],
      currentCv: { ...cvTemplate },
      secondary: {
        new: true,
        pdfPreview: false,
        listPreview: false,
      },
      static: { ...staticFields },
    };

    this.addMock = this.addMock.bind(this);

    this.deleteMock = this.deleteMock.bind(this);

    this.helper.setState = this.helper.setState.bind(this);

    this.preview = this.preview.bind(this);
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

  preview() {
    const preview = (toggler) => {
      this.setState({
        ...this.state,
        secondary: {
          ...this.state.secondary,
          [toggler]: !this.state.secondary[toggler],
        },
      });
    }

    return {
      size: () => {
        const mdBreakpoint = mainTheme.breakpoints.values.md;

        const updateState = (newValue) => {
          this.setState({
            ...this.state,
            secondary: {
              ...this.state.secondary,
              listPreview: newValue,
              pdfPreview: newValue,
            },
          })
        };

        switch (true) {
          case window.innerWidth < mdBreakpoint:
            updateState(false);
            break;

          default:
            updateState(true);
            break;
        }
      },

      pdf: () => preview('pdfPreview'),

      list: () => preview('listPreview'),
    }
  }

  helper = {
    onChange: async (keyName, field, e, id = false) => {
      const getEventValue = async () => {
        if (e.target.type === 'checkbox') {
          return e.target.checked;
        } else if (field === 'photo') {
          const fileToBase64 = (file) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();

              reader.onload = (event) => {
                resolve(event.target.result);
              };

              reader.onerror = (error) => {
                reject(error);
              };

              reader.readAsDataURL(file);
            });
          };
          const base64String = await fileToBase64(e.target.files[0]);

          return base64String;
        } else {
          return e.target.value;
        }
      };

      switch (true) {
        case field === 'cvName':
          this.setState({
            currentCv: {
              ...this.state.currentCv,
              cvName: await getEventValue(),
            },
          });

          break;

        case typeof id === 'number':
          const index = this.state.currentCv[keyName].findIndex(
            (cv) => cv.id === id
          );

          const section = [...this.state.currentCv[keyName]];
          section[index][field] = await getEventValue();

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
                [field]: await getEventValue(),
              },
            },
          });

          break;
      }
    },

    setState: (...params) => {
      const isNew = () => {
        return !this.state.cvBase.some(
          (cv) => cv.cvName === this.state.currentCv.cvName
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
              recursiveSetState
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
              }
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
              }
            );
            break;
        }
      };

      recursiveSetState();
    },

    checkEditable: () => {
      const checkEdit = (o) => {
        return Object.keys(o).some((prop) => {
          if (prop === 'editing' && o[prop] === true) {
            return true;
          }

          if (typeof o[prop] === 'object') {
            return checkEdit(o[prop]);
          }

          return false;
        });
      };

      return checkEdit(this.state.currentCv);
    },

  };

  componentDidMount() {
    const retrieveData = async () => {
      const cvBase = await getData();

      this.helper.setState('cvBase', cvBase);
    };

    retrieveData();

    this.preview().size();

    window.addEventListener('resize', this.preview().size);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.preview().listSize);
    window.removeEventListener('resize', this.preview().pdfSize);
  }

  render() {
    const { RootGrid, CurrentCvGrid, SidePanelGrid } = cvGrid;

    return (
      <ThemeProvider theme={mainTheme}>
        <RootGrid container spacing={4}>
          <CurrentCvGrid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
            <CurrentCv state={this.state} helper={this.helper} />
          </CurrentCvGrid>

          <SidePanelGrid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <Auth helper={this.helper} />

            <ManageCv state={this.state} helper={this.helper} preview={this.preview} />

            <ContentsCv
              state={this.state}
              helper={this.helper}
              preview={this.preview}
              addMock={this.addMock}
              deleteMock={this.deleteMock}
            />

            <ResumeViewer state={this.state} preview={this.preview} />
          </SidePanelGrid>
        </RootGrid>
      </ThemeProvider>
    );
  }
}

export default App;
