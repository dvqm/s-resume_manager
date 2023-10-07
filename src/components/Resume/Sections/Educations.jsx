import React from 'react';
import { TextField, Typography } from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

export const EditEducations = ({titles, article, update}) => {

  return (
    <>
      <TextField
        fullWidth
        label={titles.title}
        size='small'
        value={article.title}
        onChange={(e) => update('title', e)}
      />

      <TextField
        fullWidth
        label={titles.degree}
        size='small'
        value={article.degree}
        onChange={(e) => update('degree', e)}
      />

      <TextField
        fullWidth
        label={titles.studyField}
        size='small'
        value={article.studyField}
        onChange={(e) => update('studyField', e)}
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
        value={article.startDate}
        onChange={(e) => update('startDate', e)}
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
        value={article.endDate}
        onChange={(e) => update('endDate', e)}
      />

      <TextField
        fullWidth
        label={titles.grade}
        size='small'
        value={article.grade}
        onChange={(e) => update('grade', e)}
      />

      <TextField
        fullWidth
        label={titles.activities}
        multiline
        minRows={3}
        size='small'
        value={article.activities}
        onChange={(e) => update('activities', e)}
      />

      <TextField
        fullWidth
        label={titles.description}
        multiline
        minRows={3}
        size='small'
        value={article.description}
        onChange={(e) => update('description', e)}
      />
    </>
  );
}

export const ViewEducations = ({ article, titles }) => {
  const { PreBlock } = genericStyles;

  return (
    <>
      <Typography>
        <Typography variant='subtitle1' component='span'>{article.degree}</Typography>
        <Typography variant='subtitle1' component='span'> &#183; </Typography>
        <Typography variant='subtitle1' component='span'>
          {article.studyField}
        </Typography>
      </Typography>
      <Typography>
        <Typography component='span'>
          {article.startDate}
        </Typography>
        <Typography component='span'> - </Typography>
        <Typography component='span'>{article.endDate}</Typography>
      </Typography>
      {article.grade && (
        <Typography>
          <Typography variant='subtitle1' component='span'>{titles.grade}</Typography>
          <Typography component='span'>{article.grade}</Typography>
        </Typography>
      )}
      {article.activities && (
        <>
          <Typography component='span'>
            {titles.activities}
          </Typography>
          <PreBlock component='pre'>{article.activities}</PreBlock>
        </>
      )}
      {article.description && (
        <>
          <Typography variant='body1'>Description: </Typography>
          <PreBlock variant='body1' component='pre'>
            {article.description}
          </PreBlock>
        </>
      )}
    </>
  );
}
