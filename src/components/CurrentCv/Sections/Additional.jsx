import React from 'react';
import { TextField, Typography } from '@mui/material';
import { genericStyles } from './../../../mainTheme/localStyles';

export const EditAdditional = ({titles, component, values, helper}) => {
  return (
    <>
      <TextField
        fullWidth
        label={titles.title}
        size='small'
        value={values.title}
        onChange={(e) => helper.onChange(component, 'name', e, values.id)}
      />

      <TextField
        multiline
        minRows={8}
        size='small'
        label={titles.description}
        value={values.description}
        onChange={(e) =>
          helper.onChange(component, 'description', e, values.id)
        }
      />
    </>
  );
}

export const ViewAdditional = ({values}) => {
  const { PreBlock } = genericStyles;

  return (
    <>
      <PreBlock variant='body1' component='pre'>
        {values.description}
      </PreBlock>
    </>
  );
}
