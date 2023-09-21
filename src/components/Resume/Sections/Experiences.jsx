import React from 'react';
import {
  Checkbox,
  Typography,
  Box,
  TextField,
  FormControlLabel,
} from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

export const EditExperiences = ({titles, field, handleAction}) => {
  const handleChange = (key, e) => {
    handleAction(e, 'update', key);
  };

    return (
      <>
        <TextField
          label={titles.title}
          size='small'
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          value={field.title}
          onChange={(e) => handleChange('title', e)}
        />

        <TextField
          label={titles.startDate}
          size='small'
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          type='date'
          value={field.startDate}
          onChange={(e) => handleChange('startDate', e)}
        />

        <FormControlLabel
          control={
            <Checkbox
              size='small'
              checked={field.currentlyWork}
              onChange={(e) => handleChange('currentlyWork', e)}
            />
          }
          label={titles.currentlyWork}
        />

        {!field.currentlyWork && (
          <TextField
            label={titles.endDate}
            size='small'
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='dd/mm/yyyy'
            value={field.endDate}
            onChange={(e) => handleChange('endDate', e)}
          />
        )}

        <TextField
          label={titles.company}
          size='small'
          type='text'
          value={field.company}
          onChange={(e) => handleChange('company', e)}
        />

        <TextField
          label={titles.employmentType}
          size='small'
          select
          value={field.employmentType}
          onChange={(e) => handleChange('employmentType', e)}
          SelectProps={{
            native: true,
          }}
        >
          <option value='Full-time'>Full-time</option>
          <option value='Part-time'>Part-time</option>
          <option value='Contract'>Contract</option>
        </TextField>

        <TextField
          label={titles.location}
          size='small'
          type='text'
          value={field.location}
          onChange={(e) => handleChange('location', e)}
        />

        <TextField
          label={titles.contractType}
          size='small'
          select
          value={field.contractType}
          onChange={(e) => handleChange('contractType', e)}
          SelectProps={{
            native: true,
          }}
        >
          <option value='On-site'>On-site</option>
          <option value='Hybrid'>Hybrid</option>
          <option value='Remote'>Remote</option>
        </TextField>

        <TextField
          label={titles.description}
          size='small'
          multiline
          minRows={4}
          value={field.description}
          onChange={(e) => handleChange('description', e)}
        />
      </>
    );
}

export const ViewExperiences = ({field, titles}) => {
    const { StackRow, PreBlock } = genericStyles;

    return (
      <>
        <Typography variant='h5'>{field.company}</Typography>

        <Box>
          <StackRow>
            <Typography variant='subtitle1'>
              {titles.employmentType}
            </Typography>
            <Typography variant='body1'>
              {field.employmentType}
            </Typography>
          </StackRow>

          <StackRow>
            <Typography variant='subtitle1'>
              {titles.contractType}
            </Typography>
            <Typography variant='body1'>
              {field.contractType}
            </Typography>
          </StackRow>
        </Box>

        <StackRow>
          <Typography variant='body1'>
            {field.startDate}
          </Typography>
          {field.currentlyWork ? (
            <>
              <Typography variant='body1'>-</Typography>
              <Typography variant='body1'>Currently work</Typography>
            </>
          ) : (
              <>
                <Typography variant='body1'>-</Typography>
                <Typography variant='body1'>
                  {field.endDate}
                </Typography>
              </>
            )}
        </StackRow>

        {field.location.length > 0 && (
          <StackRow>
            <Typography variant='subtitle1'>
              {titles.location}
            </Typography>
            <Typography variant='subtitle1'>
              {field.location}
            </Typography>
          </StackRow>
        )}

        <Box>
          <Typography variant='subtitle1'>
            {titles.description}
          </Typography>
          <PreBlock component='pre'>{field.description}</PreBlock>
        </Box>
      </>
    );
  }
