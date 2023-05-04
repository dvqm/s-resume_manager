import React from 'react';
import { TextField } from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

const { PreBlock } = genericStyles;

export const EditSummary = (props) => {
    const key = props.keyName;

    const handleChange = props.helper.onChange;

    return (
      <TextField
        label={props.static.summary}
        minRows={10}
        fullWidth
        multiline
        value={props.dynamic.summary}
        onChange={(e) => handleChange(key, 'summary', e)}
      />
    );
}

export const ViewSummary = (props) => {
    return (
      <PreBlock variant='body1' component='pre'>
        {props.dynamic.summary}
      </PreBlock>
    );
}
