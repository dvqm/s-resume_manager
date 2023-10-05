import RestoreIcon from '@mui/icons-material/Restore';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { IconButton } from "@mui/material";

const ManipulationBtns = ({ restorePrevious, newResume, deleteResume, cloneResume, save }) => {
  return <>
    {
      !save && (
        <>
          <IconButton
            title='Restore previous version or clear all if unsaved'
            color='primary'
            onClick={restorePrevious}
          >
            <RestoreIcon />
          </IconButton>
          { /* if new */}
          <>
            <IconButton
              title='Create new resume'
              color='primary'
              onClick={newResume}
            >
              <NoteAddIcon />
            </IconButton>

            <IconButton
              title='Delete resume'
              color='primary'
              onClick={deleteResume}
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              title='Duplicate resume'
              color='primary'
              onClick={cloneResume}
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
