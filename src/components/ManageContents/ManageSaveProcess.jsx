import { IconButton } from '@mui/material'
import EditName from './ManageEditName'
import { SwapVerticalCircleRounded } from '@mui/icons-material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SaveProcessHandlers from '../../functions/SaveProcessHandlers';
import ToastMessage from './Toast';

const SaveProcess = ({ resume, resumeDispatch, resumes, resumesDispatch, save, setSave, accessOriginal, anyEditMode, toast, setToast }) => {

  const handle = SaveProcessHandlers(resume, resumeDispatch, resumes,
    resumesDispatch, anyEditMode, accessOriginal, setSave, setToast );

  return <>
    {
      save ? (
        <>
          <ToastMessage toast={toast} setToast={setToast} />

          <EditName updateCurrent={handle.update} saveAsNew={handle.new}
            cancelSave={handle.cancel} name={resume.name}
            updateName={handle.updateName} original={accessOriginal()} />
        </>
      ) : (
        <IconButton
          title='Save or rename resume'
          color='primary'
          onClick={() => setSave(true)}
        >
          <SwapVerticalCircleRounded />
          <DriveFileRenameOutlineIcon /> { /* if new */}
        </IconButton>
      )
    }
  </>
}

export default SaveProcess;
