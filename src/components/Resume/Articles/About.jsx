import { Link, Typography } from '@mui/material';
import { aboutStyles } from '../../../mainTheme/localStyles.js';
import AboutAvatar from './AboutAvatar.jsx';
import AboutName from './AboutName.jsx';
import AboutContacts from './AboutContacts.jsx';
import AboutAddress from './AboutAddress.jsx';

const {
  EditCredentials,
  EditInfo,
  Photo,
  EditPosition,
  ViewWrap,
  ViewMainInfo,
  ViewTitle,
  ViewAddress,
  ViewContacts,
} = aboutStyles;

export const EditAbout = ({ titles, fields, setFields }) => {

  const handleChange = (key, e) => {
    setFields(prevFields => ({
      ...prevFields, [key]: e.target.value,
    }))
  };

  return (
    <>
      <EditCredentials>
        <EditInfo>
          <AboutAvatar fields={fields} setFields={setFields} handleChange={handleChange} />
          <AboutName titles={titles} fields={fields} handleChange={handleChange} />
        </EditInfo>

        <EditPosition
          label={titles.position}
          value={fields.position}
          onChange={(e) => handleChange('position', e)}
        />
      </EditCredentials>

      <AboutAddress titles={titles} fields={fields} handleChange={handleChange} />
      <AboutContacts titles={titles} fields={fields} handleChange={handleChange} />

    </>
  );
}

export const ViewAbout = ({ fields }) => {
  return (
    <ViewWrap>
      {fields.photo && (
        <Photo variant='circular' src={fields.photo} alt='Edit' />
      )}
      <ViewMainInfo>
        <ViewTitle>
          <Typography variant='h3'>
            {fields.first && `${fields.first} `}
            {fields.middle && `${fields.middle} `}
            {fields.last}
          </Typography>
          <Typography variant='h5'>{fields.position}</Typography>
        </ViewTitle>

        <ViewAddress>
          {fields.city && `${fields.city}, `}
          {fields.state && `${fields.state}, `}
          {fields.country}
        </ViewAddress>

        <ViewContacts>
          <Link href={`tel:${fields.tel}`}>
            {fields.tel}
          </Link>
          <Link href={`mailto:${fields.email}`}>
            {fields.email}
          </Link>
          <Link href={fields.linkedin}>
            {fields.linkedin}
          </Link>
          <Link href={fields.gitHub}>
            {fields.gitHub}
          </Link>
        </ViewContacts>
      </ViewMainInfo>
    </ViewWrap>
  );
}
