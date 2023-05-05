import { TextField } from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

const { PreBlock } = genericStyles;

export const EditSummary = ({ component, values, titles, helper }) => {
    const handleChange = helper.onChange;

    return (
      <TextField
        label={titles.summary}
        minRows={10}
        fullWidth
        multiline
        value={values.summary}
        onChange={(e) => handleChange(component, 'summary', e)}
      />
    );
}

export const ViewSummary = ({ values }) => {
    return (
      <PreBlock variant='body1' component='pre'>
        {values.summary}
      </PreBlock>
    );
}
