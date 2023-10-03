import React from 'react';
import { TextField } from '@mui/material';
import { genericStyles } from './../../../mainTheme/localStyles';

export const EditAdditional = ({titles, article, update}) => {

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
        multiline
        minRows={8}
        size='small'
        label={titles.description}
        value={article.description}
        onChange={(e) => update('description', e)}
      />
    </>
  );
}

export const ViewAdditional = ({ article }) => {
  const { PreBlock } = genericStyles;

  return (
    <>
      <PreBlock variant='body1' component='pre'>
        {article.description}
      </PreBlock>
    </>
  );
}
