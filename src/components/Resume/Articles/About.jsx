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

export const EditAbout = ({ titles, update, resume }) => {

  return <>
    <EditCredentials>
      <EditInfo>
        <AboutAvatar update={update} resume={resume} />
        <AboutName titles={titles} update={update} resume={resume} />
      </EditInfo>

      <EditPosition
        label={titles.position}
        value={resume.position}
        onChange={(e) => update('position', e)}
      />
    </EditCredentials>

    <AboutAddress titles={titles} update={update} resume={resume} />
    <AboutContacts titles={titles} update={update} resume={resume} />

  </>
    ;
}

export const ViewAbout = ({ resume }) => {
  return <ViewWrap>
    {resume.photo && (
      <Photo variant='circular' src={resume.photo} alt='Edit' />
    )}
    <ViewMainInfo>
      <ViewTitle>
        <Typography variant='h3'>
          {resume.first && `${resume.first} `}
          {resume.middle && `${resume.middle} `}
          {resume.last}
        </Typography>
        <Typography variant='h5'>{resume.position}</Typography>
      </ViewTitle>

      <ViewAddress>
        {resume.city && `${resume.city}, `}
        {resume.state && `${resume.state}, `}
        {resume.country}
      </ViewAddress>

      <ViewContacts>
        <Link href={`tel:${resume.tel}`}>
          {resume.tel}
        </Link>
        <Link href={`mailto:${resume.email}`}>
          {resume.email}
        </Link>
        <Link href={resume.linkedin}>
          {resume.linkedin}
        </Link>
        <Link href={resume.gitHub}>
          {resume.gitHub}
        </Link>
      </ViewContacts>
    </ViewMainInfo>
  </ViewWrap>
    ;
}
