import { aboutStyles } from "../../../mainTheme/localStyles";

const AboutAddress = ({ titles, resume, update }) => {
  const { EditAddress, AddrInput } = aboutStyles;
  return <EditAddress>
    <AddrInput
      label={titles.city}
      value={resume.city}
      onChange={(e) => update('city', e)}
    />

    <AddrInput
      label={titles.state}
      value={resume.state}
      onChange={(e) => update('state', e)}
    />

    <AddrInput
      label={titles.country}
      value={resume.country}
      onChange={(e) => update('country', e)}
    />
  </EditAddress>
}

export default AboutAddress;
