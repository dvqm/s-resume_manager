import React from 'react';
import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { genericStyles } from '../../../mainTheme/localStyles.js';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const { StackRow, PreBlock } = genericStyles;

export const EditProjects = ({ titles, field, handleAction }) => {
  const handleChange = (key, e) => {
    handleAction(e, 'update', key);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label={titles.title}
        size='small'
        value={field.title}
        onChange={(e) => handleChange('title', e)}
      />

      <FormControlLabel
        control={
          <Checkbox
            size='small'
            checked={field.currentlyWork}
            onChange={(e) =>
              handleChange('currentlyWork', e)
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
        value={field.startDate}
        onChange={(e) => handleChange('startDate', e)}
      />

      {!field.currentlyWork && (
        <TextField
          type='date'
          label={titles.endDate}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          size='small'
          value={field.endDate}
          onChange={(e) => handleChange('endDate', e)}
        />
      )}

      <TextField
        label={titles.deployUrl}
        size='small'
        value={field.deployUrl}
        onChange={(e) => handleChange('deployUrl', e)}
      />

      <TextField
        label={titles.sourceUrl}
        size='small'
        value={field.sourceUrl}
        onChange={(e) => handleChange('sourceUrl', e)}
      />

      <TextField
        multiline
        minRows={4}
        label={titles.technologies}
        aria-label={titles.technologies}
        size='small'
        value={field.technologies}
        onChange={(e) => handleChange('technologies', e)}
      />

      <TextField
        multiline
        minRows={8}
        label={titles.description}
        aria-label={titles.description}
        size='small'
        value={field.description}
        onChange={(e) => handleChange('description', e)}
      />
    </Box>
  );
}

export const ViewProjects = ({ field, titles }) => {
  return (
    <>
      {field.startDate ||
        field.endDate ||
        field.currentlyWork ? (
        <StackRow>
          <Typography variant='body1'>
            {field.startDate}
          </Typography>
          {(field.currentlyWork ||
            field.endDate) && (
              <Typography variant='body1'> - </Typography>
            )}
          <Typography variant='body1'>
            {field.currentlyWork
              ? titles.currentlyWork
              : field.endDate}
          </Typography>
        </StackRow>
      ) : (
        ''
      )}

      {field.technologies && (
        <StackRow>
          <Typography variant='subtitle1'>
            {titles.technologies}
          </Typography>

          <Typography variant='body1'>
            {field.technologies}
          </Typography>
        </StackRow>
      )}

      <StackRow>
        <Typography variant='subtitle1'>
          {titles.description}
        </Typography>

        <PreBlock variant='body1' component='pre'>
          {field.description}
        </PreBlock>
      </StackRow>
      {field.deployUrl || field.sourceUrl ? (
        <StackRow>
          {field.deployUrl ? (
            <Chip
              variant='link'
              color='info'
              label={titles.deployUrl}
              component='a'
              href={field.deployUrl}
              target='_blank'
              rel='noreferrer noopener'
              icon={<OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />}
              clickable
            />
          ) : (
            ''
          )}

          {field.sourceUrl ? (
            <Chip
              variant='link'
              color='info'
              label={titles.sourceUrl}
              component='a'
              href={field.sourceUrl}
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
