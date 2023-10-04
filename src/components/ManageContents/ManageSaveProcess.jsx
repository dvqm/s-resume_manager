import { IconButton } from '@mui/material'
import EditName from './ManageEditName'
import { SwapVerticalCircleRounded } from '@mui/icons-material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const SaveProcess = ({ resume, resumeDispatch, resumes, resumesDispatch, editMode, save, setSave, accessOriginal }) => {
  const commonChecks = () => {
    console.log('ManageSaveProcess.jsx - editMode: ', editMode);
    if (editMode) {
      alert('Some sections in edit mode');
      return false;
    }

    if (resume.name === '') {
      alert('name cannot be empty');
      return false;
    }
    return true;
  }

  const updateCurrent = () => {
    if (!commonChecks()) return;
    if (resumes.some((item) => item.name === resume.name
      && item.name !== accessOriginal()))
      return alert('resume with this name already exists');

    if (accessOriginal() === '') {
      accessOriginal(resume.name);
      resumesDispatch({ t: 'RES_SAVE', p: resume });
      alert('new resume saved');
    } else {
      accessOriginal(resume.name);
      resumesDispatch({ t: 'RES_UPDATE', p: { resume, original: accessOriginal() } });
      alert('resume updated');
    }
    setSave(false);
  }

  const saveAsNew = () => {
    if (commonChecks()) return;
    if (resumes.some((item) => item.name === resume.name))
      return alert('resume with this name already exists');

    accessOriginal(resume.name);
    resumesDispatch({ t: 'RES_SAVE', p: resume });
    alert('saved as new resume');
    setSave(false);
  }

  const updateName = (value) => {
    resumeDispatch({ t: 'RES_NAME', p: value });
  }

  const cancelSave = () => {
    setSave(false);
  }

  return <>
    {
      save ? (
        <EditName updateCurrent={updateCurrent} saveAsNew={saveAsNew}
          cancelSave={cancelSave} name={resume.name}
          updateName={updateName} original={accessOriginal()} />
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
