import React, { useContext, useState } from 'react';
import { genericStyles } from './../../mainTheme/localStyles';
import { InitialState } from '../../state/context';
import SectionTitle from './Sections/SectionTitle';
import SectionManage from './Sections/SectionManage';

const Section = ({ rubric, editer, viewer }) => {
  const { resume, titles, resumeDispatch } = useContext(InitialState);

  const [initial, setInitial] = useState(false);

  const add = () => {
    resumeDispatch({ t: 'SEC_ADD', p: [rubric] });
    setInitial(true);
  }

  const { SectionStyled } = genericStyles;
  return (
    <SectionStyled>
      <SectionTitle titles={titles[rubric]} add={add} />
      {resume[rubric].length > 0 &&
       resume[rubric].map((article, i) => <SectionManage key={i} id={i}
          article={article}
          viewer={viewer} editer={editer}
          rubric={rubric}
          resumeDispatch={resumeDispatch}
          titles={titles[rubric]}
          initial={initial}
        />)}
    </SectionStyled>
  );
}

export default Section;
