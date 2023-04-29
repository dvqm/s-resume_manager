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

export class EditAbout extends React.Component {
  constructor(props) {
    super(props);

    this.key = props.keyName;

    this.deletePhoto = this.deletePhoto.bind(this);

    this.handleChange = props.helper.onChange;
  }

  deletePhoto(e) {
    e.preventDefault();

    const values = { ...this.props.dynamic };

    values.photo = '';

    this.props.helper.setState(this.key, values);
  }

  render() {
    return (
      <>
        <EditCredentials>
          <EditInfo>
            <EditAvatar>
              {!this.props.dynamic.photo && (
                <>
                  <Photo variant='circular' alt='Edit' />

                  <ManagePhotoBtn
                    color='secondary'
                    aria-label='upload picture'
                    component='label'
                  >
                    <input
                      hidden
                      onChange={(e) => this.handleChange(this.key, 'photo', e)}
                      accept='image/*'
                      type='file'
                    />
                    <AddAPhotoIcon sx={{ fontSize: 30 }} />
                  </ManagePhotoBtn>
                </>
              )}

              {this.props.dynamic.photo && (
                <>
                  <Photo
                    variant='circular'
                    src={this.props.dynamic.photo}
                    alt='Edit'
                  />
                  <ManagePhotoBtn
                    color='secondary'
                    onClick={(e) => this.deletePhoto(e)}
                  >
                    <HighlightOffIcon sx={{ fontSize: 40 }} />
                  </ManagePhotoBtn>
                </>
              )}
            </EditAvatar>

            <EditName>
              <EditNameInput
                label={this.props.static.first}
                value={this.props.dynamic.first}
                onChange={(e) => this.handleChange(this.key, 'first', e)}
              />

              <EditNameInput
                label={this.props.static.middle}
                value={this.props.dynamic.middle}
                onChange={(e) => this.handleChange(this.key, 'middle', e)}
              />

              <EditNameInput
                label={this.props.static.last}
                value={this.props.dynamic.last}
                onChange={(e) => this.handleChange(this.key, 'last', e)}
              />
            </EditName>
          </EditInfo>

          <EditPosition
            label={this.props.static.position}
            value={this.props.dynamic.position}
            onChange={(e) => this.handleChange(this.key, 'position', e)}
          />
        </EditCredentials>

        <EditAddress>
          <AddrInput
            label={this.props.static.city}
            value={this.props.dynamic.city}
            onChange={(e) => this.handleChange(this.key, 'city', e)}
          />

          <AddrInput
            label={this.props.static.state}
            value={this.props.dynamic.state}
            onChange={(e) => this.handleChange(this.key, 'state', e)}
          />

          <AddrInput
            label={this.props.static.country}
            value={this.props.dynamic.country}
            onChange={(e) => this.handleChange(this.key, 'country', e)}
          />
        </EditAddress>

        <EditContacts>
          <ContactInput
            label={this.props.static.email}
            type='email'
            value={this.props.dynamic.email}
            onChange={(e) => this.handleChange(this.key, 'email', e)}
          />

          <ContactInput
            label={this.props.static.tel}
            type='tel'
            value={this.props.dynamic.tel}
            onChange={(e) => this.handleChange(this.key, 'tel', e)}
          />

          <ContactInput
            label={this.props.static.linkedin}
            value={this.props.dynamic.linkedin}
            onChange={(e) => this.handleChange(this.key, 'linkedin', e)}
          />

          <ContactInput
            label={this.props.static.gitHub}
            value={this.props.dynamic.gitHub}
            onChange={(e) => this.handleChange(this.key, 'gitHub', e)}
          />
        </EditContacts>
      </>
    );
  }
}

export class ViewAbout extends React.Component {
  render() {
    return (
      <ViewWrap>
        {this.props.dynamic.photo && (
          <Photo variant='circular' src={this.props.dynamic.photo} alt='Edit' />
        )}
        <ViewMainInfo>
          <ViewTitle>
            <Typography variant='h3'>
              {this.props.dynamic.first && `${this.props.dynamic.first} `}
              {this.props.dynamic.middle && `${this.props.dynamic.middle} `}
              {this.props.dynamic.last}
            </Typography>
            <Typography variant='h5'>{this.props.dynamic.position}</Typography>
          </ViewTitle>

          <ViewAddress>
            {this.props.dynamic.city && `${this.props.dynamic.city}, `}
            {this.props.dynamic.state && `${this.props.dynamic.state}, `}
            {this.props.dynamic.country}
          </ViewAddress>

          <ViewContacts>
            <Link href={`tel:${this.props.dynamic.tel}`}>
              {this.props.dynamic.tel}
            </Link>
            <Link href={`mailto:${this.props.dynamic.email}`}>
              {this.props.dynamic.email}
            </Link>
            <Link href={this.props.dynamic.linkedin}>
              {this.props.dynamic.linkedin}
            </Link>
            <Link href={this.props.dynamic.gitHub}>
              {this.props.dynamic.gitHub}
            </Link>
          </ViewContacts>
        </ViewMainInfo>
      </ViewWrap>
    );
  }
}
