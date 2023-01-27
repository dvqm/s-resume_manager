import {Component} from "react";
import Section from "./components/Section";
import {EditExperiences, ViewExperiences} from "./components/Experiences";
import {EditEducations, ViewEducations} from "./components/Educations";
import {EditProjects, ViewProjects} from "./components/Projects";
import {EditAbout, ViewAbout} from "./components/About";
import {EditSummary, ViewSummary} from "./components/Summary";
import {EditExpertise, ViewExpertise} from "./components/Expertise";
import Article from "./components/Article";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cvBase: [],
            currentCv: {
                about: {
                    fields: {
                        btnName: 'Edit About',
                        name: {
                            first: 'First Name',
                            last: 'Last Name',
                        },
                        photo: 'Upload Photo',
                        position: 'Applied Position',
                        address: {
                            city: 'City',
                            state: 'State',
                            country: 'Country',
                        },
                        contacts: {
                            phone: 'Phone number',
                            email: 'Email',
                            linkedin: 'Linkedin',
                            gitHub: 'GitHub',
                            other: 'Other contacts',
                        },
                    },
                    values: {}
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
                        btnName: 'Edit Expertise',
                        description: 'Description',
                    },
                    values: {},
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
                }
            },
        };

        this.helper.setState = this.helper.setState.bind(this);
    }

    helper = {
        getEventValue: (e) => {
            if (e.target.type === 'checkbox') {
                return e.target.checked;
            } else {
                return e.target.value;
            }
        },

        onChange: (context, value, e, field, upperHandler) => {
            context.setState({values: {...context.state.values, [field]: value}},
                () => {
                    upperHandler(e, field);
                });
        },

        setState: (keyName, newValues) => {
            this.setState({
                    currentCv: {
                        ...this.state.currentCv,
                        [keyName]: {
                            ...this.state.currentCv[keyName],
                            values: newValues,
                        }
                    },
                },
            )
        },
    }

    render() {
        return (
            <div className="resume">
                <div className="main-area">
                    <Article article={this.state.currentCv.about}
                             keyName="about"
                             helper={this.helper}
                             view={ViewAbout}
                             edit={EditAbout}
                    />

                    <Article article={this.state.currentCv.summary}
                             keyName="summary"
                             helper={this.helper}
                             view={ViewSummary}
                             edit={EditSummary}
                    />

                    <Article article={this.state.currentCv.expertise}
                             keyName="expertise"
                             helper={this.helper}
                             view={ViewExpertise}
                             edit={EditExpertise}
                    />

                    <Section section={this.state.currentCv.projects}
                             keyName="projects"
                             helper={this.helper}
                             view={ViewProjects}
                             edit={EditProjects}
                    />

                    <Section section={this.state.currentCv.experiences}
                             keyName="experiences"
                             helper={this.helper}
                             view={ViewExperiences}
                             edit={EditExperiences}
                    />

                    <Section section={this.state.currentCv.educations}
                             keyName="esucation"
                             helper={this.helper}
                             view={ViewEducations}
                             edit={EditEducations}
                    />
                </div>
            </div>
        );
    }

}

export default App;
