import { Divider, IconButton, Typography } from '@mui/material';
import { genericStyles } from './../../../mainTheme/localStyles';
import AddIcon from '@mui/icons-material/Add';

const SectionTitle = ({ titles, add }) => {
  const { StackRow } = genericStyles;
  return <>
    <StackRow>
      <Typography variant='h2'>{titles.header}</Typography>
      <IconButton color='secondary' onClick={add}>
        <AddIcon />
      </IconButton>
    </StackRow>
    <Divider sx={{ borderBottom: '1px solid' }} />
  </>
}

export default SectionTitle;
