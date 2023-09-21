import { aboutStyles } from "../../../mainTheme/localStyles";

const AboutName = ({ titles, fields, handleChange }) => {
  const { EditName, EditNameInput } = aboutStyles
  return <>
    <EditName>
      <EditNameInput
        label={titles.first}
        value={fields.first}
        onChange={(e) => handleChange('first', e)}
      />

      <EditNameInput
        label={titles.middle}
        value={fields.middle}
        onChange={(e) => handleChange('middle', e)}
      />

      <EditNameInput
        label={titles.last}
        value={fields.last}
        onChange={(e) => handleChange('last', e)}
      />
    </EditName>
  </>
}

export default AboutName;
