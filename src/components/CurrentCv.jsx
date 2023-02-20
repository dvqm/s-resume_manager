import React from "react";
import Article from "./CurrentCv/Article";
import {EditAbout, ViewAbout} from "./CurrentCv/Articles/About";
import {EditSummary, ViewSummary} from "./CurrentCv/Articles/Summary";
import Section from "./CurrentCv/Section";
import {EditExpertise, ViewExpertise} from "./CurrentCv/Sections/Expertise";
import {EditProjects, ViewProjects} from "./CurrentCv/Sections/Projects";
import {EditExperiences, ViewExperiences} from "./CurrentCv/Sections/Experiences";
import {EditEducations, ViewEducations} from "./CurrentCv/Sections/Educations";
import {EditAdditional, ViewAdditional} from "./CurrentCv/Sections/Additional";

class CurrentCv extends React.Component {
    render() {
        return (
            <div className="main-area">
                <Article dynamic={this.props.state.currentCv.about}
                         static={this.props.state.static.about}
                         keyName="about"
                         helper={this.props.helper}
                         view={ViewAbout}
                         edit={EditAbout}
                />

                <Article dynamic={this.props.state.currentCv.summary}
                         static={this.props.state.static.summary}
                         keyName="summary"
                         helper={this.props.helper}
                         view={ViewSummary}
                         edit={EditSummary}
                />

                <Section dynamic={this.props.state.currentCv.expertise}
                         static={this.props.state.static.expertise}
                         keyName="expertise"
                         helper={this.props.helper}
                         view={ViewExpertise}
                         edit={EditExpertise}
                />

                <Section dynamic={this.props.state.currentCv.projects}
                         static={this.props.state.static.projects}
                         keyName="projects"
                         helper={this.props.helper}
                         view={ViewProjects}
                         edit={EditProjects}
                />

                <Section dynamic={this.props.state.currentCv.experiences}
                         static={this.props.state.static.experiences}
                         keyName="experiences"
                         helper={this.props.helper}
                         view={ViewExperiences}
                         edit={EditExperiences}
                />

                <Section dynamic={this.props.state.currentCv.educations}
                         static={this.props.state.static.educations}
                         keyName="educations"
                         helper={this.props.helper}
                         view={ViewEducations}
                         edit={EditEducations}
                />

                <Section dynamic={this.props.state.currentCv.additional}
                         static={this.props.state.static.additional}
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
