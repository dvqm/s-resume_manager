import { TextField } from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

const { PreBlock } = genericStyles;

export const EditSummary = ({ titles, update, resume }) => {
  return (
    <TextField
      label={titles.summary}
      minRows={10}
      fullWidth
      multiline
      value={resume.summary}
      onChange={(e) => update('summary', e)}
    />
  );
}

export const ViewSummary = ({ resume }) => {
  return (
    <PreBlock variant='body1' component='pre'>
      {resume.summary}
    </PreBlock>
  );
}
