import { aboutStyles } from "../../../mainTheme/localStyles";

const AboutContacts = ({ titles, fields, handleChange }) => {
  const { EditContacts, ContactInput } = aboutStyles;

  return <EditContacts>
    <ContactInput
      label={titles.email}
      type='email'
      value={fields.email}
      onChange={(e) => handleChange('email', e)}
    />

    <ContactInput
      label={titles.tel}
      type='tel'
      value={fields.tel}
      onChange={(e) => handleChange('tel', e)}
    />

    <ContactInput
      label={titles.linkedin}
      value={fields.linkedin}
      onChange={(e) => handleChange('linkedin', e)}
    />

    <ContactInput
      label={titles.gitHub}
      value={fields.gitHub}
      onChange={(e) => handleChange('gitHub', e)}
    />
  </EditContacts>

}

export default AboutContacts;
