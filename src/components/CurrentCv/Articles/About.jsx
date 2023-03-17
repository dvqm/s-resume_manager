import React from 'react';
import { Box, CardMedia, Link, TextField, Typography } from '@mui/material';
import {
  currentCvStyles,
  aboutStyles,
} from '../../../mainTheme/localStyles.js';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
    const {
      IconBtnStyled,
      FormControlRowStart: FormControlRow,
      TextFieldStyled,
    } = currentCvStyles;

    const { ApplicantPhoto, FormControlAvatar, FormControlName } = aboutStyles;
    return (
      <>
        <FormControlRow>
          <FormControlAvatar>
            {!this.props.dynamic.photo && (
              <>
                <ApplicantPhoto variant='circular' alt='Applicant' />

                <IconBtnStyled
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
                </IconBtnStyled>
              </>
            )}

            {this.props.dynamic.photo && (
              <>
                <ApplicantPhoto
                  variant='circular'
                  src={URL.createObjectURL(this.props.dynamic.photo)}
                  alt='Applicant'
                />
                <IconBtnStyled
                  color='secondary'
                  onClick={(e) => this.deletePhoto(e)}
                >
                  <HighlightOffIcon sx={{ fontSize: 40 }} />
                </IconBtnStyled>
              </>
            )}
          </FormControlAvatar>

          <FormControlName>
            <TextFieldStyled
              label={this.props.static.first}
              value={this.props.dynamic.first}
              onChange={(e) => this.handleChange(this.key, 'first', e)}
            />

            <TextFieldStyled
              label={this.props.static.middle}
              value={this.props.dynamic.middle}
              onChange={(e) => this.handleChange(this.key, 'middle', e)}
            />

            <TextFieldStyled
              label={this.props.static.last}
              value={this.props.dynamic.last}
              onChange={(e) => this.handleChange(this.key, 'last', e)}
            />
          </FormControlName>
        </FormControlRow>

        <TextFieldStyled
          label={this.props.static.position}
          size='small'
          value={this.props.dynamic.position}
          onChange={(e) => this.handleChange(this.key, 'position', e)}
        />

        <FormControlRow>
          <TextFieldStyled
            label={this.props.static.city}
            size='small'
            value={this.props.dynamic.city}
            onChange={(e) => this.handleChange(this.key, 'city', e)}
          />

          <TextFieldStyled
            label={this.props.static.state}
            size='small'
            value={this.props.dynamic.state}
            onChange={(e) => this.handleChange(this.key, 'state', e)}
          />

          <TextFieldStyled
            label={this.props.static.country}
            size='small'
            value={this.props.dynamic.country}
            onChange={(e) => this.handleChange(this.key, 'country', e)}
          />
        </FormControlRow>

        <FormControlRow>
          <TextFieldStyled
            label={this.props.static.email}
            size='small'
            type='email'
            value={this.props.dynamic.email}
            onChange={(e) => this.handleChange(this.key, 'email', e)}
          />

          <TextFieldStyled
            label={this.props.static.tel}
            size='small'
            type='tel'
            value={this.props.dynamic.tel}
            onChange={(e) => this.handleChange(this.key, 'tel', e)}
          />

          <TextFieldStyled
            label={this.props.static.linkedin}
            size='small'
            value={this.props.dynamic.linkedin}
            onChange={(e) => this.handleChange(this.key, 'linkedin', e)}
          />

          <TextFieldStyled
            label={this.props.static.gitHub}
            size='small'
            value={this.props.dynamic.gitHub}
            onChange={(e) => this.handleChange(this.key, 'gitHub', e)}
          />
        </FormControlRow>
      </>
    );
  }
}

export class ViewAbout extends React.Component {
  render() {
    return (
      <>
        <Typography variant='h5'>
          {this.props.dynamic.first && `${this.props.dynamic.first} `}
          {this.props.dynamic.middle && `${this.props.dynamic.middle} `}
          {this.props.dynamic.last}
        </Typography>

        <Typography variant='h5'>{this.props.dynamic.position}</Typography>

        {this.props.dynamic.photo && (
          <CardMedia
            component='img'
            image={URL.createObjectURL(this.props.dynamic.photo)}
            alt='Applicant'
          />
        )}

        <address>
          {this.props.dynamic.city && `${this.props.dynamic.city}, `}
          {this.props.dynamic.state && `${this.props.dynamic.state}, `}
          {this.props.dynamic.country}
        </address>

        <Box display='flex' justifyContent='space-between'>
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
        </Box>
      </>
    );
  }
}
