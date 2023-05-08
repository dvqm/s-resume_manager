import React from 'react';
import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const { StackRow, PreBlock } = genericStyles;

export const EditProjects = ({ component, values, titles, helper }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label={titles.title}
        size='small'
        value={values.title}
        onChange={(e) => helper.onChange(component, 'title', e, values.id)}
      />

      <FormControlLabel
        control={
          <Checkbox
            size='small'
            checked={values.currentlyWork}
            onChange={(e) =>
              helper.onChange(component, 'currentlyWork', e, values.id)
            }
          />
        }
        label={titles.currentlyWork}
      />

      <TextField
        type='date'
        label={titles.startDate}
        size='small'
        InputLabelProps={{
          shrink: true,
        }}
        placeholder='dd/mm/yyyy'
        value={values.startDate}
        onChange={(e) => helper.onChange(component, 'startDate', e, values.id)}
      />

      {!values.currentlyWork && (
        <TextField
          type='date'
          label={titles.endDate}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          size='small'
          value={values.endDate}
          onChange={(e) => helper.onChange(component, 'endDate', e, values.id)}
        />
      )}

      <TextField
        label={titles.deployUrl}
        size='small'
        value={values.deployUrl}
        onChange={(e) => helper.onChange(component, 'deployUrl', e, values.id)}
      />

      <TextField
        label={titles.sourceUrl}
        size='small'
        value={values.sourceUrl}
        onChange={(e) => helper.onChange(component, 'sourceUrl', e, values.id)}
      />

      <TextareaAutosize
        minRows={4}
        label={titles.technologies}
        size='small'
        value={values.technologies}
        onChange={(e) =>
          helper.onChange(component, 'technologies', e, values.id)
        }
      />

      <TextareaAutosize
        minRows={8}
        label={titles.description}
        size='small'
        value={values.description}
        onChange={(e) =>
          helper.onChange(component, 'description', e, values.id)
        }
      />
    </Box>
  );
}

export const ViewProjects = ({ values, titles}) => {
    return (
      <>
        {values.startDate ||
          values.endDate ||
          values.currentlyWork ? (
          <StackRow>
            <Typography variant='body1'>
              {values.startDate}
            </Typography>
            {(values.currentlyWork ||
              values.endDate) && (
                <Typography variant='body1'> - </Typography>
              )}
            <Typography variant='body1'>
              {values.currentlyWork
                ? titles.currentlyWork
                : values.endDate}
            </Typography>
          </StackRow>
        ) : (
          ''
        )}

        {values.technologies && (
          <StackRow>
            <Typography variant='subtitle1'>
              {titles.technologies}
            </Typography>

            <Typography variant='body1'>
              {values.technologies}
            </Typography>
          </StackRow>
        )}

        <StackRow>
          <Typography variant='subtitle1'>
            {titles.description}
          </Typography>

          <PreBlock variant='body1' component='pre'>
            {values.description}
          </PreBlock>
        </StackRow>
        {values.deployUrl || values.sourceUrl ? (
          <StackRow>
            {values.deployUrl ? (
              <Chip
                variant='link'
                color='info'
                label={titles.deployUrl}
                component='a'
                href={values.deployUrl}
                target='_blank'
                rel='noreferrer noopener'
                icon={<OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />}
                clickable
              />
            ) : (
              ''
            )}

            {values.sourceUrl ? (
              <Chip
                variant='link'
                color='info'
                label={titles.sourceUrl}
                component='a'
                href={values.sourceUrl}
                target='_blank'
                rel='noreferrer noopener'
                icon={<OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />}
                clickable
              />
            ) : (
              ''
            )}
          </StackRow>
        ) : (
          ''
        )}
      </>
    );
  }
