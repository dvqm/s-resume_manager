import { aboutStyles } from "../../../mainTheme/localStyles";

const AboutAddress = ({ titles, fields, handleChange }) => {
  const { EditAddress, AddrInput } = aboutStyles;
  return <EditAddress>
    <AddrInput
      label={titles.city}
      value={fields.city}
      onChange={(e) => handleChange('city', e)}
    />

    <AddrInput
      label={titles.state}
      value={fields.state}
      onChange={(e) => handleChange('state', e)}
    />

    <AddrInput
      label={titles.country}
      value={fields.country}
      onChange={(e) => handleChange('country', e)}
    />
  </EditAddress>
}

export default AboutAddress;
