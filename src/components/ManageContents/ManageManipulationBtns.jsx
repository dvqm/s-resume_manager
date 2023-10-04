import RestoreIcon from '@mui/icons-material/Restore';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { IconButton } from "@mui/material";

const ManipulationBtns = ({ handle, save }) => {
  return <>
    {
      !save && (
        <>
          <IconButton
            title='Restore previous version or clear all if unsaved'
            color='primary'
            onClick={handle.cancel}
          >
            <RestoreIcon />
          </IconButton>
          { /* if new */}
          <>
            <IconButton
              title='Create new resume'
              color='primary'
              onClick={handle.new}
            >
              <NoteAddIcon />
            </IconButton>

            <IconButton
              title='Delete resume'
              color='primary'
              onClick={handle.delete}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              title='Duplicate resume'
              color='primary'
              onClick={handle.duplicate}
            >
              <ControlPointDuplicateIcon />
            </IconButton>
          </>
          { /* if new */}
        </>
      )
    }
  </>
}

export default ManipulationBtns;
