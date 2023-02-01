import {Component} from "react";
import ContentsCv from "./components/ContentsCv/ContentsCv";
import CurrentCv from "./components/CurrentCv/CurrentCv";
import ManageCv from "./components/ManageCv/ManageCv";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cvBase: [{cvName: 'a'}, {cvName: 'b'}, {cvName: 'c'}],
            currentCv: {
                cvName: '',
                about: {
                    fields: {
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
                    values: {
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
                    }
                },
                summary: {
                    fields: {
                        title: 'Summary',
                        btnName: 'Edit Summary',
                        summary: 'Summary',
                    },
                    values: {
                        summary: '',
                    },
                },
                expertise: {
                    fields: {
                        title: 'Area of Expertise',
                        btnName: 'Add Area of Expertise',
                        scope: 'Scope of expertise: ',
                        labels: 'Labels: ',
                        placeholder: 'Enter the scope name',
                        tip: 'Enter your areas of expertise in the scope divided by comma and space',
                    },
                    default: {
                        editing: true,
                        scopeTitle: '',
                        labels: '',
                    },
                    values: [],
                },
                projects: {
                    fields: {
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

                    },
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
                    values: [],
                },
                experiences: {
                    fields: {
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
                    },
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
                    values: [],
                },
                educations: {
                    fields: {
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
                    },
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
                    values: [],
                },
                additional: {
                    fields: {
                        title: 'Additional information',
                        btnName: 'Add Section',
                        name: 'Title',
                        description: 'Description: ',
                    },
                    default: {
                        editing: true,
                        name: '',
                        description: '',
                    },
                    values: [],
                },
            },
        };

        this.helper.setState = this.helper.setState.bind(this);
    }

    manage = {
        save: (key, value) => {
            this.setState({...this.state, [key]: value}
                , () => console.log(this.state)
            );
        }
    }

    helper = {
        setId: (list, context = this) => {
            if (list.length > 0) {
                context.state.id = Math.max(...list.map(x => x.id)) + 1;
            } else {
                context.state.id = 1;
            }
            return context.state.id;
        },

        getEventValue: (e) => {
            if (e.target.type === 'checkbox') {
                return e.target.checked;
            } else if (e.target.type === 'file') {
                return e.target.files[0];
            } else {
                return e.target.value;
            }
        },

        onChange: (context, value, e, field, upperHandler) => {
            if (field === 'cvName') context.setState({currentCv: {...context.state.currentCv, cvName: value}},
                () => upperHandler(e, field));
            else context.setState({values: {...context.state.values, [field]: value}},
                () => {
                    upperHandler(e, field);
                });
        },

        setState: (keyName, newValues) => {
            if (keyName === 'cvName') {
                this.setState({
                    currentCv: {
                        ...this.state.currentCv,
                        [keyName]: newValues,
                    },
                })
            } else {
                this.setState({
                        currentCv: {
                            ...this.state.currentCv,
                            [keyName]: {
                                ...this.state.currentCv[keyName],
                                values: newValues,
                            }
                        },
                    }
                )
            }
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
                          manage={this.manage}
                />

                <CurrentCv state={this.state}
                           helper={this.helper}
                />
            </div>
        );
    }

}

export default App;


