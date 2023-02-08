import {Component} from "react";
import ContentsCv from "./components/ContentsCv/ContentsCv";
import CurrentCv from "./components/CurrentCv/CurrentCv";
import ManageCv from "./components/ManageCv/ManageCv";

class App extends Component {
    constructor() {
        super();
        const cvTemplate = {
            cvName: '',
            about: {
                first: '',
                middle: '',
                last: '',
                photo: '',
                position: '',
                city: '',
                state: '',
                country: '',
                tel: '',
                email: '',
                linkedin: '',
                gitHub: '',
            },
            summary: {
                summary: '',
            },
            projects: [],
            expertise: [],
            experiences: [],
            educations: [],
            additional: [],
        };

        this.state = {
            cvBase: [],
            currentCv: {...cvTemplate},
            secondary: {
                new: true,
            },
            static: {
                template: {...cvTemplate},
                about: {
                    btnName: 'Edit About',
                    first: 'First Name: ',
                    middle: 'Middle Name: ',
                    last: 'Last Name: ',
                    photo: 'Upload Photo: ',
                    position: 'Applied Position: ',
                    city: 'City: ',
                    state: 'State: ',
                    country: 'Country: ',
                    tel: 'Phone number: ',
                    email: 'Email: ',
                    linkedin: 'Linkedin: ',
                    gitHub: 'GitHub: ',
                },
                summary: {
                    title: 'Summary',
                    btnName: 'Edit Summary',
                    summary: 'Summary',
                },
                projects: {
                    title: 'My Projects',
                    btnName: 'Add Project',
                    name: 'Project name: ',
                    currentlyWork: 'Currently Work',
                    startDate: 'Start date: ',
                    endDate: 'End date: ',
                    deployUrl: 'View project',
                    sourceUrl: 'Source code',
                    technologies: 'Technologies: ',
                    description: 'Description: ',
                    default: {
                        editing: true,
                        title: '',
                        currentlyWork: false,
                        startDate: '',
                        endDate: '',
                        deployUrl: '',
                        sourceUrl: '',
                        technologies: '',
                        description: '',
                    },
                },
                expertise: {
                    title: 'Area of Expertise',
                    btnName: 'Add Area of Expertise',
                    scope: 'Scope of expertise: ',
                    labels: 'Labels: ',
                    placeholder: 'Enter the scope name',
                    tip: 'Enter your areas of expertise in the scope divided by comma and space',
                    default: {
                        editing: true,
                        scopeTitle: '',
                        labels: '',
                    },
                },
                experiences: {
                    title: 'Work Experience',
                    btnName: 'Add Experience',
                    name: 'Position name: ',
                    employmentType: 'Employment type :',
                    companyName: 'Company name: ',
                    location: 'Location:',
                    contractType: 'Contract type: ',
                    currentlyWork: 'Currently work: ',
                    startDate: 'Start date: ',
                    endDate: 'End date: ',
                    description: 'Description: ',
                    default: {
                        editing: true,
                        title: '',
                        employmentType: 'Full-time',
                        companyName: '',
                        location: '',
                        contractType: 'On-site',
                        currentlyWork: false,
                        startDate: '',
                        endDate: '',
                        description: '',
                    },
                },
                educations: {
                    title: 'Education',
                    btnName: 'Add Education',
                    institution: 'Educational institution: ',
                    degree: 'Degree: ',
                    studyField: 'Field of study: ',
                    startDate: 'Start date: ',
                    endDate: 'End date (or expected): ',
                    grade: 'Grade: ',
                    activities: 'Activities and societies: ',
                    description: 'Description: ',
                    default: {
                        editing: true,
                        institution: '',
                        degree: '',
                        studyField: '',
                        startDate: '',
                        endDate: '',
                        grade: '',
                        activities: '',
                        description: '',
                    },
                },
                additional: {
                    title: 'Additional information',
                    btnName: 'Add Section',
                    name: 'Title',
                    description: 'Description: ',
                    default: {
                        editing: true,
                        name: '',
                        description: '',
                    },
                },
            },
        };

        this.helper.setState = this.helper.setState.bind(this);
    }

    helper = {
        onChange: (keyName, field, e, id = false) => {
            const getEventValue = () => {
                if (e.target.type === 'checkbox') {
                    return e.target.checked;
                } else if (e.target.type === 'file') {
                    return e.target.files[0];
                } else {
                    return e.target.value;
                }
            }

            switch (true) {
                case field === 'cvName' :
                    this.setState({
                            currentCv: {
                                ...this.state.currentCv,
                                cvName: getEventValue(),
                            }
                        }
                    );

                    break;

                case typeof id === 'number' :
                    const index = this.state.currentCv[keyName].findIndex((cv) => cv.id === id);

                    const section = [...this.state.currentCv[keyName]];
                    section[index][field] = getEventValue();

                    this.setState({
                        ...this.state,
                        currentCv: {
                            ...this.state.currentCv,
                            [keyName]: [...section],
                        }
                    });

                    break;

                default :
                    this.setState({
                        ...this.state,
                        currentCv: {
                            ...this.state.currentCv,
                            [keyName]: {
                                ...this.state.currentCv[keyName],
                                [field]: getEventValue(),
                            }
                        }
                    });

                    break;
            }
        },

        setState: (...extraParams) => {
            const isNew = () => {
                return !this.state.cvBase.some(
                    cv => cv.cvName === this.state.currentCv.cvName
                );
            };

            let i = 0;
            const recursiveSetState = () => {
                if (i >= extraParams.length) return;

                const key = extraParams[i];
                const values = extraParams[i + 1];
                i += 2;

                switch (key) {
                    case "cvName":
                        this.setState(
                            {
                                ...this.state,
                                currentCv: {
                                    ...this.state.currentCv,
                                    [key]: values
                                }
                            },
                                recursiveSetState
                        );
                        break;

                    case "currentCv":
                    case "cvBase":
                        this.setState(
                            {
                                ...this.state,
                                [key]: values
                            },
                            () => {
                                this.setState({
                                    ...this.state,
                                    secondary: {
                                        ...this.state.secondary,
                                        new: isNew()
                                    }
                                });
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
                                    [key]: values
                                }
                            },
                            () => {
                                this.setState({
                                    ...this.state,
                                    secondary: {
                                        ...this.state.secondary,
                                        new: isNew()
                                    }
                                });
                                recursiveSetState();
                            }
                        );
                        break;
                }
            };

            recursiveSetState();
        }
    }

    render() {
        return (
            <div className="resume">
                <ContentsCv state={this.state}
                            helper={this.helper}
                />

                <ManageCv state={this.state}
                          helper={this.helper}
                />

                <CurrentCv state={this.state}
                           helper={this.helper}
                />
            </div>
        );
    }
}

export default App;


