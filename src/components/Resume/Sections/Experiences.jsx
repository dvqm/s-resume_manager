import React from 'react';
import {
  Checkbox,
  Typography,
  Box,
  TextField,
  FormControlLabel,
} from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

export const EditExperiences = ({titles, article, update}) => {
    return (
      <>
        <TextField
          size='small'
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='Position name'
          value={article.title}
          onChange={(e) => update('title', e)}
        />

        <TextField
          label={titles.startDate}
          size='small'
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          type='date'
          value={article.startDate}
          onChange={(e) => update('startDate', e)}
        />

        <FormControlLabel
          control={
            <Checkbox
              size='small'
              checked={article.currentlyWork}
              onChange={(e) => update('currentlyWork', e)}
            />
          }
          label={titles.currentlyWork}
        />

        {!article.currentlyWork && (
          <TextField
            label={titles.endDate}
            size='small'
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='dd/mm/yyyy'
            value={article.endDate}
            onChange={(e) => update('endDate', e)}
          />
        )}

        <TextField
          label={titles.company}
          size='small'
          type='text'
          value={article.company}
          onChange={(e) => update('company', e)}
        />

        <TextField
          label={titles.employmentType}
          size='small'
          select
          value={article.employmentType}
          onChange={(e) => update('employmentType', e)}
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
          value={article.location}
          onChange={(e) => update('location', e)}
        />

        <TextField
          label={titles.contractType}
          size='small'
          select
          value={article.contractType}
          onChange={(e) => update('contractType', e)}
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
          value={article.description}
          onChange={(e) => update('description', e)}
        />
      </>
    );
}

export const ViewExperiences = ({article, titles}) => {
    const { StackRow, PreBlock } = genericStyles;

    return (
      <>
        <Typography variant='h5'>{article.company}</Typography>

        <Box>
          <StackRow>
            <Typography variant='subtitle1'>
              {titles.employmentType}
            </Typography>
            <Typography variant='body1'>
              {article.employmentType}
            </Typography>
          </StackRow>

          <StackRow>
            <Typography variant='subtitle1'>
              {titles.contractType}
            </Typography>
            <Typography variant='body1'>
              {article.contractType}
            </Typography>
          </StackRow>
        </Box>

        <StackRow>
          <Typography variant='body1'>
            {article.startDate}
          </Typography>
          {article.currentlyWork ? (
            <>
              <Typography variant='body1'>-</Typography>
              <Typography variant='body1'>Currently work</Typography>
            </>
          ) : (
              <>
                <Typography variant='body1'>-</Typography>
                <Typography variant='body1'>
                  {article.endDate}
                </Typography>
              </>
            )}
        </StackRow>

        {article.location.length > 0 && (
          <StackRow>
            <Typography variant='subtitle1'>
              {titles.location}
            </Typography>
            <Typography variant='subtitle1'>
              {article.location}
            </Typography>
          </StackRow>
        )}

        <Box>
          <Typography variant='subtitle1'>
            {titles.description}
          </Typography>
          <PreBlock component='pre'>{article.description}</PreBlock>
        </Box>
      </>
    );
  }
