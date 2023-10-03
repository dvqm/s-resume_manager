import React from 'react';
import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const { StackRow, PreBlock } = genericStyles;

export const EditProjects = ({ titles, article, update }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label={titles.title}
        size='small'
        value={article.title}
        onChange={(e) => update('title', e)}
      />

      <FormControlLabel
        control={
          <Checkbox
            size='small'
            checked={article.currentlyWork}
            onChange={(e) =>
              update('currentlyWork', e)
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
        value={article.startDate}
        onChange={(e) => update('startDate', e)}
      />

      {!article.currentlyWork && (
        <TextField
          type='date'
          label={titles.endDate}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          size='small'
          value={article.endDate}
          onChange={(e) => update('endDate', e)}
        />
      )}

      <TextField
        label={titles.deployUrl}
        size='small'
        value={article.deployUrl}
        onChange={(e) => update('deployUrl', e)}
      />

      <TextField
        label={titles.sourceUrl}
        size='small'
        value={article.sourceUrl}
        onChange={(e) => update('sourceUrl', e)}
      />

      <TextField
        multiline
        minRows={4}
        label={titles.technologies}
        aria-label={titles.technologies}
        size='small'
        value={article.technologies}
        onChange={(e) => update('technologies', e)}
      />

      <TextField
        multiline
        minRows={8}
        label={titles.description}
        aria-label={titles.description}
        size='small'
        value={article.description}
        onChange={(e) => update('description', e)}
      />
    </Box>
  );
}

export const ViewProjects = ({ article, titles }) => {
  return (
    <>
      {article.startDate ||
        article.endDate ||
        article.currentlyWork ? (
        <StackRow>
          <Typography variant='body1'>
            {article.startDate}
          </Typography>
          {(article.currentlyWork ||
            article.endDate) && (
              <Typography variant='body1'> - </Typography>
            )}
          <Typography variant='body1'>
            {article.currentlyWork
              ? titles.currentlyWork
              : article.endDate}
          </Typography>
        </StackRow>
      ) : (
        ''
      )}

      {article.technologies && (
        <StackRow>
          <Typography variant='subtitle1'>
            {titles.technologies}
          </Typography>

          <Typography variant='body1'>
            {article.technologies}
          </Typography>
        </StackRow>
      )}

      <StackRow>
        <Typography variant='subtitle1'>
          {titles.description}
        </Typography>

        <PreBlock variant='body1' component='pre'>
          {article.description}
        </PreBlock>
      </StackRow>
      {article.deployUrl || article.sourceUrl ? (
        <StackRow>
          {article.deployUrl ? (
            <Chip
              variant='link'
              color='info'
              label={titles.deployUrl}
              component='a'
              href={article.deployUrl}
              target='_blank'
              rel='noreferrer noopener'
              icon={<OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />}
              clickable
            />
          ) : (
            ''
          )}

          {article.sourceUrl ? (
            <Chip
              variant='link'
              color='info'
              label={titles.sourceUrl}
              component='a'
              href={article.sourceUrl}
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
