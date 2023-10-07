import Article from './Resume/Article';
import { EditAbout, ViewAbout } from './Resume/Articles/About';
import { EditSummary, ViewSummary } from './Resume/Articles/Summary';
import Section from './Resume/Section';
import { EditExpertise, ViewExpertise } from './Resume/Sections/Expertise';
import { EditProjects, ViewProjects } from './Resume/Sections/Projects';
import { EditExperiences, ViewExperiences, } from './Resume/Sections/Experiences';
import { EditEducations, ViewEducations, } from './Resume/Sections/Educations';
import { EditAdditional, ViewAdditional, } from './Resume/Sections/Additional';
import { resumeStyled } from '../mainTheme/localStyles';

const Resume = () => {
  const components = [
    {
      component: Article,
      rubric: 'about',
      viewer: ViewAbout,
      editer: EditAbout
    },
    {
      component: Article,
      rubric: 'summary',
      viewer: ViewSummary,
      editer: EditSummary
    },
    {
      component: Section,
      rubric: 'expertise',
      viewer: ViewExpertise,
      editer: EditExpertise
    },
    {
      component: Section,
      rubric: 'projects',
      viewer: ViewProjects,
      editer: EditProjects
    },
    {
      component: Section,
      rubric: 'experiences',
      viewer: ViewExperiences,
      editer: EditExperiences
    },
    {
      component: Section,
      rubric: 'educations',
      viewer: ViewEducations,
      editer: EditEducations
    },
    {
      component: Section,
      rubric: 'additional',
      viewer: ViewAdditional,
      editer: EditAdditional
    }
  ];

  const { ResumeStyled } = resumeStyled;

  return (
    <ResumeStyled item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
      {components.map((item, i) => {
        return <item.component
          key={i}
          rubric={item.rubric}
          viewer={item.viewer}
          editer={item.editer}
        />
      })}
    </ResumeStyled>
  );

}

export default Resume;
