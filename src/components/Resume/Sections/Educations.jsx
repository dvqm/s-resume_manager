import React from 'react';
import { TextField, Typography } from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

export const EditEducations = ({titles, field, handleAction}) => {
  const handleChange = (key, e) => {
    handleAction(e, 'update', key);
  };

  return (
    <>
      <TextField
        fullWidth
        label={titles.title}
        size='small'
        value={field.title}
        onChange={(e) => handleChange('title', e)}
      />

      <TextField
        fullWidth
        label={titles.degree}
        size='small'
        value={field.degree}
        onChange={(e) => handleChange('degree', e)}
      />

      <TextField
        fullWidth
        label={titles.studyField}
        size='small'
        value={field.studyField}
        onChange={(e) => handleChange('studyField', e)}
      />

      <TextField
        fullWidth
        label={titles.startDate}
        type='date'
        size='small'
        InputLabelProps={{
          shrink: true,
        }}
        placeholder='dd/mm/yyyy'
        value={field.startDate}
        onChange={(e) => handleChange('startDate', e)}
      />

      <TextField
        fullWidth
        label={titles.endDate}
        type='date'
        InputLabelProps={{
          shrink: true,
        }}
        placeholder='dd/mm/yyyy'
        size='small'
        value={field.endDate}
        onChange={(e) => handleChange('endDate', e)}
      />

      <TextField
        fullWidth
        label={titles.grade}
        size='small'
        value={field.grade}
        onChange={(e) => handleChange('grade', e)}
      />

      <TextField
        fullWidth
        label={titles.activities}
        multiline
        minRows={3}
        size='small'
        value={field.activities}
        onChange={(e) => handleChange('activities', e)}
      />

      <TextField
        fullWidth
        label={titles.description}
        multiline
        minRows={3}
        size='small'
        value={field.description}
        onChange={(e) => handleChange('description', e)}
      />
    </>
  );
}

export const ViewEducations = ({ field, titles }) => {
  const { PreBlock } = genericStyles;

  return (
    <>
      <Typography>
        <Typography component='span'>{field.degree}</Typography>
        <Typography component='span'> &#183; </Typography>
        <Typography component='span'>
          {field.studyField}
        </Typography>
      </Typography>
      <Typography>
        <Typography component='span'>
          {field.startDate}
        </Typography>
        <Typography component='span'> - </Typography>
        <Typography component='span'>{field.endDate}</Typography>
      </Typography>
      {field.grade && (
        <Typography>
          <Typography component='span'>{titles.grade}</Typography>
          <Typography component='span'>{field.grade}</Typography>
        </Typography>
      )}
      {field.activities && (
        <>
          <Typography component='span'>
            {titles.activities}
          </Typography>
          <PreBlock component='pre'>{field.activities}</PreBlock>
        </>
      )}
      {field.description && (
        <>
          <Typography variant='body1'>Description: </Typography>
          <PreBlock variant='body1' component='pre'>
            {field.description}
          </PreBlock>
        </>
      )}
    </>
  );
}
