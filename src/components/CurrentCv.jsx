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
        titles={state.titles.about}
        component='about'
        helper={helper}
        view={ViewAbout}
        edit={EditAbout}
      />

      <Article
        values={state.currentCv.summary}
        titles={state.titles.summary}
        component='summary'
        helper={helper}
        view={ViewSummary}
        edit={EditSummary}
      />

      <Section
        values={state.currentCv.expertise}
        titles={state.titles.expertise}
        component='expertise'
        helper={helper}
        view={ViewExpertise}
        edit={EditExpertise}
      />

      <Section
        values={state.currentCv.projects}
        titles={state.titles.projects}
        component='projects'
        helper={helper}
        view={ViewProjects}
        edit={EditProjects}
      />

      <Section
        values={state.currentCv.experiences}
        titles={state.titles.experiences}
        component='experiences'
        helper={helper}
        view={ViewExperiences}
        edit={EditExperiences}
      />

      <Section
        values={state.currentCv.educations}
        titles={state.titles.educations}
        component='educations'
        helper={helper}
        view={ViewEducations}
        edit={EditEducations}
      />

      <Section
        values={state.currentCv.additional}
        titles={state.titles.additional}
        component='additional'
        helper={helper}
        view={ViewAdditional}
        edit={EditAdditional}
      />
    </>
  );
}

export default CurrentCv;
