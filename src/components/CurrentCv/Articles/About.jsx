import React from 'react';
import { Link, Typography } from '@mui/material';
import { aboutStyles } from '../../../mainTheme/localStyles.js';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const {
  EditCredentials,
  EditInfo,
  EditAvatar,
  Photo,
  ManagePhotoBtn,
  EditName,
  EditNameInput,
  EditPosition,
  EditAddress,
  AddrInput,
  EditContacts,
  ContactInput,
  ViewWrap,
  ViewMainInfo,
  ViewTitle,
  ViewAddress,
  ViewContacts,
} = aboutStyles;

export const EditAbout = (props) => {
  const key = props.keyName;

    const handleChange = props.helper.onChange;


  const deletePhoto = (e) => {
    e.preventDefault();

    const values = { ...props.dynamic };

    values.photo = '';

    props.helper.setState(key, values);
  }

  return (
    <>
      <EditCredentials>
        <EditInfo>
          <EditAvatar>
            {!props.dynamic.photo && (
              <>
                <Photo variant='circular' alt='Edit' />

                <ManagePhotoBtn
                  color='secondary'
                  aria-label='upload picture'
                  component='label'
                >
                  <input
                    hidden
                    onChange={(e) => handleChange(key, 'photo', e)}
                    accept='image/*'
                    type='file'
                  />
                  <AddAPhotoIcon sx={{ fontSize: 30 }} />
                </ManagePhotoBtn>
              </>
            )}

            {props.dynamic.photo && (
              <>
                <Photo
                  variant='circular'
                  src={props.dynamic.photo}
                  alt='Edit'
                />
                <ManagePhotoBtn
                  color='secondary'
                  onClick={(e) => deletePhoto(e)}
                >
                  <HighlightOffIcon sx={{ fontSize: 40 }} />
                </ManagePhotoBtn>
              </>
            )}
          </EditAvatar>

          <EditName>
            <EditNameInput
              label={props.static.first}
              value={props.dynamic.first}
              onChange={(e) => handleChange(key, 'first', e)}
            />

            <EditNameInput
              label={props.static.middle}
              value={props.dynamic.middle}
              onChange={(e) => handleChange(key, 'middle', e)}
            />

            <EditNameInput
              label={props.static.last}
              value={props.dynamic.last}
              onChange={(e) => handleChange(key, 'last', e)}
            />
          </EditName>
        </EditInfo>

        <EditPosition
          label={props.static.position}
          value={props.dynamic.position}
          onChange={(e) => handleChange(key, 'position', e)}
        />
      </EditCredentials>

      <EditAddress>
        <AddrInput
          label={props.static.city}
          value={props.dynamic.city}
          onChange={(e) => handleChange(key, 'city', e)}
        />

        <AddrInput
          label={props.static.state}
          value={props.dynamic.state}
          onChange={(e) => handleChange(key, 'state', e)}
        />

        <AddrInput
          label={props.static.country}
          value={props.dynamic.country}
          onChange={(e) => handleChange(key, 'country', e)}
        />
      </EditAddress>

      <EditContacts>
        <ContactInput
          label={props.static.email}
          type='email'
          value={props.dynamic.email}
          onChange={(e) => handleChange(key, 'email', e)}
        />

        <ContactInput
          label={props.static.tel}
          type='tel'
          value={props.dynamic.tel}
          onChange={(e) => handleChange(key, 'tel', e)}
        />

        <ContactInput
          label={props.static.linkedin}
          value={props.dynamic.linkedin}
          onChange={(e) => handleChange(key, 'linkedin', e)}
        />

        <ContactInput
          label={props.static.gitHub}
          value={props.dynamic.gitHub}
          onChange={(e) => handleChange(key, 'gitHub', e)}
        />
      </EditContacts>
    </>
  );
}

export const ViewAbout = (props) => {
  return (
    <ViewWrap>
      {props.dynamic.photo && (
        <Photo variant='circular' src={props.dynamic.photo} alt='Edit' />
      )}
      <ViewMainInfo>
        <ViewTitle>
          <Typography variant='h3'>
            {props.dynamic.first && `${props.dynamic.first} `}
            {props.dynamic.middle && `${props.dynamic.middle} `}
            {props.dynamic.last}
          </Typography>
          <Typography variant='h5'>{props.dynamic.position}</Typography>
        </ViewTitle>

        <ViewAddress>
          {props.dynamic.city && `${props.dynamic.city}, `}
          {props.dynamic.state && `${props.dynamic.state}, `}
          {props.dynamic.country}
        </ViewAddress>

        <ViewContacts>
          <Link href={`tel:${props.dynamic.tel}`}>
            {props.dynamic.tel}
          </Link>
          <Link href={`mailto:${props.dynamic.email}`}>
            {props.dynamic.email}
          </Link>
          <Link href={props.dynamic.linkedin}>
            {props.dynamic.linkedin}
          </Link>
          <Link href={props.dynamic.gitHub}>
            {props.dynamic.gitHub}
          </Link>
        </ViewContacts>
      </ViewMainInfo>
    </ViewWrap>
  );
}
