import React from 'react';
import {
  Checkbox,
  Typography,
  Box,
  TextField,
  FormControlLabel,
} from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

export const EditExperiences = ({ component, values, titles, helper}) => {

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
          value={values.title}
          onChange={(e) => helper.onChange(component, 'title', e, values.id)}
        />

        <TextField
          label={titles.startDate}
          size='small'
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          type='date'
          value={values.startDate}
          onChange={(e) => helper.onChange(component, 'startDate', e, values.id)}
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

        {!values.currentlyWork && (
          <TextField
            label={titles.endDate}
            size='small'
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='dd/mm/yyyy'
            value={values.endDate}
            onChange={(e) => helper.onChange(component, 'endDate', e, values.id)}
          />
        )}

        <TextField
          label={titles.company}
          size='small'
          type='text'
          value={values.company}
          onChange={(e) => helper.onChange(component, 'company', e, values.id)}
        />

        <TextField
          label={titles.employmentType}
          size='small'
          select
          value={values.employmentType}
          onChange={(e) =>
            helper.onChange(component, 'employmentType', e, values.id)
          }
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
          value={values.location}
          onChange={(e) => helper.onChange(component, 'location', e, values.id)}
        />

        <TextField
          label={titles.contractType}
          size='small'
          select
          value={values.contractType}
          onChange={(e) =>
            helper.onChange(component, 'contractType', e, values.id)
          }
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
          value={values.description}
          onChange={(e) =>
            helper.onChange(component, 'description', e, values.id)
          }
        />
      </>
    );
}

export const ViewExperiences = ({values, titles}) => {
    const { StackRow, PreBlock } = genericStyles;

    return (
      <>
        <Typography variant='h5'>{values.company}</Typography>

        <Box>
          <StackRow>
            <Typography variant='subtitle1'>
              {titles.employmentType}
            </Typography>
            <Typography variant='body1'>
              {values.employmentType}
            </Typography>
          </StackRow>

          <StackRow>
            <Typography variant='subtitle1'>
              {titles.contractType}
            </Typography>
            <Typography variant='body1'>
              {values.contractType}
            </Typography>
          </StackRow>
        </Box>

        <StackRow>
          <Typography variant='body1'>
            {values.startDate}
          </Typography>
          {values.currentlyWork ? (
            <>
              <Typography variant='body1'>-</Typography>
              <Typography variant='body1'>Currently work</Typography>
            </>
          ) : (
              <>
                <Typography variant='body1'>-</Typography>
                <Typography variant='body1'>
                  {values.endDate}
                </Typography>
              </>
            )}
        </StackRow>

        {values.location.length > 0 && (
          <StackRow>
            <Typography variant='subtitle1'>
              {titles.location}
            </Typography>
            <Typography variant='subtitle1'>
              {values.location}
            </Typography>
          </StackRow>
        )}

        <Box>
          <Typography variant='subtitle1'>
            {titles.description}
          </Typography>
          <PreBlock component='pre'>{values.description}</PreBlock>
        </Box>
      </>
    );
  }
