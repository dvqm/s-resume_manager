import React from 'react';
import Article from './CurrentCv/Article';
import { EditAbout, ViewAbout } from './CurrentCv/Articles/About';
import { EditSummary, ViewSummary } from './CurrentCv/Articles/Summary';
import Section from './CurrentCv/Section';

import { EditExpertise, ViewExpertise } from './CurrentCv/Sections/Expertise';
import { EditProjects, ViewProjects } from './CurrentCv/Sections/Projects';

import {
  EditExperiences,
  ViewExperiences,
} from './CurrentCv/Sections/Experiences';

import {
  EditEducations,
  ViewEducations,
} from './CurrentCv/Sections/Educations';

import {
  EditAdditional,
  ViewAdditional,
} from './CurrentCv/Sections/Additional';

const CurrentCv = ({ state, helper }) => {
  return (
    <>
      <Article
        values={state.currentCv.about}
        titles={state.static.about}
        component='about'
        helper={helper}
        view={ViewAbout}
        edit={EditAbout}
      />

      <Article
        values={state.currentCv.summary}
        titles={state.static.summary}
        component='summary'
        helper={helper}
        view={ViewSummary}
        edit={EditSummary}
      />

      <Section
        dynamic={state.currentCv.expertise}
        static={state.static.expertise}
        keyName='expertise'
        helper={helper}
        view={ViewExpertise}
        edit={EditExpertise}
      />

      <Section
        dynamic={state.currentCv.projects}
        static={state.static.projects}
        keyName='projects'
        helper={helper}
        view={ViewProjects}
        edit={EditProjects}
      />

      <Section
        dynamic={state.currentCv.experiences}
        static={state.static.experiences}
        keyName='experiences'
        helper={helper}
        view={ViewExperiences}
        edit={EditExperiences}
      />

      <Section
        dynamic={state.currentCv.educations}
        static={state.static.educations}
        keyName='educations'
        helper={helper}
        view={ViewEducations}
        edit={EditEducations}
      />

      <Section
        dynamic={state.currentCv.additional}
        static={state.static.additional}
        keyName='additional'
        helper={helper}
        view={ViewAdditional}
        edit={EditAdditional}
      />
    </>
  );
}

export default CurrentCv;
