import { IconButton, TextField } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const EditName = ({ updateCurrent, saveAsNew, cancelSave, name, updateName, original }) => {
  return (
    <>
      <TextField
        color='primary'
        size='small'
        label='Enter The Name'
        type='text'
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />

      { original !== '' &&
        <IconButton
          title='Save as new resume'
          color='primary'
          onClick={saveAsNew}
        >
        <SaveIcon />
        </IconButton>
      }

      <IconButton
        title='Save/update resume'
        color='primary'
        onClick={updateCurrent}
      >
          <DriveFileRenameOutlineIcon />
      </IconButton>

      <IconButton
        title='Cancel'
        color='primary'
        onClick={cancelSave}
      >
        <CancelIcon />
      </IconButton>
    </>
  );
}

export default EditName;
