import { aboutStyles } from "../../../mainTheme/localStyles";

const AboutContacts = ({ titles, resume, update }) => {
  const { EditContacts, ContactInput } = aboutStyles;

  return <EditContacts>
    <ContactInput
      label={titles.email}
      type='email'
      value={resume.email}
      onChange={(e) => update('email', e)}
    />

    <ContactInput
      label={titles.tel}
      type='tel'
      value={resume.tel}
      onChange={(e) => update('tel', e)}
    />

    <ContactInput
      label={titles.linkedin}
      value={resume.linkedin}
      onChange={(e) => update('linkedin', e)}
    />

    <ContactInput
      label={titles.gitHub}
      value={resume.gitHub}
      onChange={(e) => update('gitHub', e)}
    />
  </EditContacts>

}

export default AboutContacts;
