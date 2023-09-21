import { TextField } from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

const { PreBlock } = genericStyles;

export const EditSummary = ({ titles, fields, setFields }) => {
  const handleChange = (key, e) => {
    setFields(prevFields => ({
      ...prevFields, [key]: e.target.value,
    }))
  };

  return (
    <TextField
      label={titles.summary}
      minRows={10}
      fullWidth
      multiline
      value={fields.summary}
      onChange={(e) => handleChange('summary', e)}
    />
  );
}

export const ViewSummary = ({ fields }) => {
  return (
    <PreBlock variant='body1' component='pre'>
      {fields.summary}
    </PreBlock>
  );
}
