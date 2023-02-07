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
    render() {
        return (
            <div className="main-area">
                <Article state={this.props.state.currentCv.about}
                         keyName="about"
                         helper={this.props.helper}
                         view={ViewAbout}
                         edit={EditAbout}
                />

                <Article state={this.props.state.currentCv.summary}
                         keyName="summary"
                         helper={this.props.helper}
                         view={ViewSummary}
                         edit={EditSummary}
                />

                <Section state={this.props.state.currentCv.expertise}
                         keyName="expertise"
                         helper={this.props.helper}
                         view={ViewExpertise}
                         edit={EditExpertise}
                />

                <Section state={this.props.state.currentCv.projects}
                         keyName="projects"
                         helper={this.props.helper}
                         view={ViewProjects}
                         edit={EditProjects}
                />

                <Section state={this.props.state.currentCv.experiences}
                         keyName="experiences"
                         helper={this.props.helper}
                         view={ViewExperiences}
                         edit={EditExperiences}
                />

                <Section state={this.props.state.currentCv.educations}
                         keyName="educations"
                         helper={this.props.helper}
                         view={ViewEducations}
                         edit={EditEducations}
                />

                <Section state={this.props.state.currentCv.additional}
                         keyName="additional"
                         helper={this.props.helper}
                         view={ViewAdditional}
                         edit={EditAdditional}
                />
            </div>
        )
    }
}

export default CurrentCv;
