import React from 'react';
import { TextField } from '@mui/material';
import { genericStyles } from './../../../mainTheme/localStyles';

export const EditAdditional = ({titles, field, handleAction}) => {
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
        multiline
        minRows={8}
        size='small'
        label={titles.description}
        value={field.description}
        onChange={(e) => handleChange('description', e)}
      />
    </>
  );
}

export const ViewAdditional = ({ field }) => {
  const { PreBlock } = genericStyles;

  return (
    <>
      <PreBlock variant='body1' component='pre'>
        {field.description}
      </PreBlock>
    </>
  );
}
