import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { aboutStyles } from "../../../mainTheme/localStyles";

const AboutAvatar = ({ resume, update }) => {
  const deletePhoto = (e) => {
    e.preventDefault();
    update('photo', '')
  }

  const { EditAvatar, Photo, ManagePhotoBtn } = aboutStyles

  return <EditAvatar>
    {!resume.photo && (
      <>
        <Photo variant='circular' alt='Edit' />
        <ManagePhotoBtn
          color='secondary'
          aria-label='upload picture'
          component='label'
        >
          <input
            hidden
            onChange={(e) => update('photo', e)}
            accept='image/*'
            type='file'
          />
          <AddAPhotoIcon sx={{ fontSize: 30 }} />
        </ManagePhotoBtn>
      </>
    )}

    {resume.photo && (
      <>
        <Photo
          variant='circular'
          src={resume.photo}
          alt='Edit'
        />
        <ManagePhotoBtn
          color='secondary'
          onClick={(e) => deletePhoto(e)}
        >
          <HighlightOffIcon sx={{ fontSize: 40 }} />
        </ManagePhotoBtn>
      </>
    )}
  </EditAvatar>

}

export default AboutAvatar;
