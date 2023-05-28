import React from 'react';
import { TextField, Typography } from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

export const EditEducations = ({ component, values, titles, helper}) => {

    return (
      <>
        <TextField
          fullWidth
          label={titles.title}
          size='small'
          value={values.title}
          onChange={(e) =>
            helper.onChange(component, 'title', e, values.id)
          }
        />

        <TextField
          fullWidth
          label={titles.degree}
          size='small'
          value={values.degree}
          onChange={(e) => helper.onChange(component, 'degree', e, values.id)}
        />

        <TextField
          fullWidth
          label={titles.studyField}
          size='small'
          value={values.studyField}
          onChange={(e) =>
            helper.onChange(component, 'studyField', e, values.id)
          }
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
          value={values.startDate}
          onChange={(e) => helper.onChange(component, 'startDate', e, values.id)}
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
          value={values.endDate}
          onChange={(e) => helper.onChange(component, 'endDate', e, values.id)}
        />

        <TextField
          fullWidth
          label={titles.grade}
          size='small'
          value={values.grade}
          onChange={(e) => helper.onChange(component, 'grade', e, values.id)}
        />

        <TextField
          fullWidth
          label={titles.activities}
          multiline
          minRows={3}
          size='small'
          value={values.activities}
          onChange={(e) =>
            helper.onChange(component, 'activities', e, values.id)
          }
        />

        <TextField
          fullWidth
          label={titles.description}
          multiline
          minRows={3}
          size='small'
          value={values.description}
          onChange={(e) =>
            helper.onChange(component, 'description', e, values.id)
          }
        />
      </>
    );
}

export const ViewEducations = ({values, titles}) => {
    const { PreBlock } = genericStyles;

    return (
      <>
        <Typography>
          <Typography component='span'>{values.degree}</Typography>
          <Typography component='span'> &#183; </Typography>
          <Typography component='span'>
            {values.studyField}
          </Typography>
        </Typography>
        <Typography>
          <Typography component='span'>
            {values.startDate}
          </Typography>
          <Typography component='span'> - </Typography>
          <Typography component='span'>{values.endDate}</Typography>
        </Typography>
        {values.grade && (
          <Typography>
            <Typography component='span'>{titles.grade}</Typography>
            <Typography component='span'>{values.grade}</Typography>
          </Typography>
        )}
        {values.activities && (
          <>
            <Typography component='span'>
              {titles.activities}
            </Typography>
            <PreBlock component='pre'>{values.activities}</PreBlock>
          </>
        )}
        {values.description && (
          <>
            <Typography variant='body1'>Description: </Typography>
            <PreBlock variant='body1' component='pre'>
              {values.description}
            </PreBlock>
          </>
        )}
      </>
    );
  }
