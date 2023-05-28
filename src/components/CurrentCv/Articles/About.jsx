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

export const EditAbout = ({ titles, values, component, helper }) => {

    const handleChange = helper.onChange;


  const deletePhoto = (e) => {
    e.preventDefault();


    values.photo = '';

    helper.setState(component, values);
  }

  return (
    <>
      <EditCredentials>
        <EditInfo>
          <EditAvatar>
            {!values.photo && (
              <>
                <Photo variant='circular' alt='Edit' />

                <ManagePhotoBtn
                  color='secondary'
                  aria-label='upload picture'
                  component='label'
                >
                  <input
                    hidden
                    onChange={(e) => handleChange(component, 'photo', e)}
                    accept='image/*'
                    type='file'
                  />
                  <AddAPhotoIcon sx={{ fontSize: 30 }} />
                </ManagePhotoBtn>
              </>
            )}

            {values.photo && (
              <>
                <Photo
                  variant='circular'
                  src={values.photo}
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
              label={titles.first}
              value={values.first}
              onChange={(e) => handleChange(component, 'first', e)}
            />

            <EditNameInput
              label={titles.middle}
              value={values.middle}
              onChange={(e) => handleChange(component, 'middle', e)}
            />

            <EditNameInput
              label={titles.last}
              value={values.last}
              onChange={(e) => handleChange(component, 'last', e)}
            />
          </EditName>
        </EditInfo>

        <EditPosition
          label={titles.position}
          value={values.position}
          onChange={(e) => handleChange(component, 'position', e)}
        />
      </EditCredentials>

      <EditAddress>
        <AddrInput
          label={titles.city}
          value={values.city}
          onChange={(e) => handleChange(component, 'city', e)}
        />

        <AddrInput
          label={titles.state}
          value={values.state}
          onChange={(e) => handleChange(component, 'state', e)}
        />

        <AddrInput
          label={titles.country}
          value={values.country}
          onChange={(e) => handleChange(component, 'country', e)}
        />
      </EditAddress>

      <EditContacts>
        <ContactInput
          label={titles.email}
          type='email'
          value={values.email}
          onChange={(e) => handleChange(component, 'email', e)}
        />

        <ContactInput
          label={titles.tel}
          type='tel'
          value={values.tel}
          onChange={(e) => handleChange(component, 'tel', e)}
        />

        <ContactInput
          label={titles.linkedin}
          value={values.linkedin}
          onChange={(e) => handleChange(component, 'linkedin', e)}
        />

        <ContactInput
          label={titles.gitHub}
          value={values.gitHub}
          onChange={(e) => handleChange(component, 'gitHub', e)}
        />
      </EditContacts>
    </>
  );
}

export const ViewAbout = ({ values }) => {
  return (
    <ViewWrap>
      {values.photo && (
        <Photo variant='circular' src={values.photo} alt='Edit' />
      )}
      <ViewMainInfo>
        <ViewTitle>
          <Typography variant='h3'>
            {values.first && `${values.first} `}
            {values.middle && `${values.middle} `}
            {values.last}
          </Typography>
          <Typography variant='h5'>{values.position}</Typography>
        </ViewTitle>

        <ViewAddress>
          {values.city && `${values.city}, `}
          {values.state && `${values.state}, `}
          {values.country}
        </ViewAddress>

        <ViewContacts>
          <Link href={`tel:${values.tel}`}>
            {values.tel}
          </Link>
          <Link href={`mailto:${values.email}`}>
            {values.email}
          </Link>
          <Link href={values.linkedin}>
            {values.linkedin}
          </Link>
          <Link href={values.gitHub}>
            {values.gitHub}
          </Link>
        </ViewContacts>
      </ViewMainInfo>
    </ViewWrap>
  );
}
