import React, { useContext, useState } from 'react';
import { genericStyles } from './../../mainTheme/localStyles';
import { InitialState } from '../../state/context';
import SectionTitle from './Sections/SectionTitle';
import SectionManage from './Sections/SectionManage';

const Section = ({ rubric, editer, viewer }) => {
  const { accessResume, readTitles } = useContext(InitialState);
  const [fields, setFields] = useState(accessResume()[rubric]);
  const [initial, setInitial] = useState(false);
  const titles = readTitles()[rubric];

  const updateResume = () => accessResume({ [rubric]: fields });

  const add = () => {
    setFields([...fields, { ...titles.default }]);
    setInitial(true);
  }

  const { SectionStyled } = genericStyles;

  return (
    <SectionStyled>
      <SectionTitle titles={titles} add={add} />
      {fields.length > 0 &&
        fields.map((field, i) => <SectionManage key={i} id={i}
          field={field} setFields={setFields}
          updateResume={updateResume}
          viewer={viewer} editer={editer}
          titles={titles}
          initial={initial}
        />)}
    </SectionStyled>
  );
}

export default Section;
