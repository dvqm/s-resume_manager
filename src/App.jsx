import {Component} from "react";
import Section from "./components/Section";
import {EditExperiences, ViewExperiences} from "./components/Experiences";
import {EditEducations, ViewEducations} from "./components/Educations";
import {EditProjects, ViewProjects} from "./components/Projects";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cvBase: [],
            currentCv: {
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
                    list: [],
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
                    list: [],
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
                    list: [],
                }
            },
        };
    }

    render() {
        return (
            <div className="resume">
                <div className="main-area">
                    {/*<Contacts />*/}
                    {/*<About />*/}
                    {/*<Skills />*/}
                    <h2>{this.state.currentCv.projects.fields.title}</h2>
                    <hr/>
                    <Section section={this.state.currentCv.projects}
                             view={ViewProjects}
                             edit={EditProjects}
                    />
                    {/*<Projects />*/}
                    <h2>{this.state.currentCv.experiences.fields.title}</h2>
                    <hr/>
                    <Section section={this.state.currentCv.experiences}
                             view={ViewExperiences}
                             edit={EditExperiences}
                    />
                    <h2>{this.state.currentCv.educations.fields.title}</h2>
                    <hr/>
                    <Section section={this.state.currentCv.educations}
                             view={ViewEducations}
                             edit={EditEducations}
                    />
                    {/*<Additional />*/}
                </div>
            </div>
        );
    }

}

export default App;
