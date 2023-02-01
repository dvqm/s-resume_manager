import React from "react";
import Article from "./Articles/Article";
import {EditAbout, ViewAbout} from "./Articles/About";
import {EditSummary, ViewSummary} from "./Articles/Summary";
import Section from "./Sections/Section";
import {EditExpertise, ViewExpertise} from "./Sections/Expertise";
import {EditProjects, ViewProjects} from "./Sections/Projects";
import {EditExperiences, ViewExperiences} from "./Sections/Experiences";
import {EditEducations, ViewEducations} from "./Sections/Educations";
import {EditAdditional, ViewAdditional} from "./Sections/Additional";

class CurrentCv extends React.Component {
    constructor(props) {
        super();

        this.state = props.state;

        this.helper = props.helper;

        this.manage = props.manage;
    }

    render() {
        return (
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

                <Section section={this.state.currentCv.expertise}
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

                <Section section={this.state.currentCv.additional}
                         keyName="additional"
                         helper={this.helper}
                         view={ViewAdditional}
                         edit={EditAdditional}
                />
            </div>
        )
    }
}

export default CurrentCv;
