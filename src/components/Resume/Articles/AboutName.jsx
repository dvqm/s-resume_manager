import { aboutStyles } from "../../../mainTheme/localStyles";

const AboutName = ({ titles, resume, update }) => {
  const { EditName, EditNameInput } = aboutStyles
  
  return <>
    <EditName>
      <EditNameInput
        label={titles.first}
        value={resume.first}
        onChange={(e) => update('first', e)}
      />

      <EditNameInput
        label={titles.middle}
        value={resume.middle}
        onChange={(e) => update('middle', e)}
      />

      <EditNameInput
        label={titles.last}
        value={resume.last}
        onChange={(e) => update('last', e)}
      />
    </EditName>
  </>
}

export default AboutName;
