import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { aboutStyles } from "../../../mainTheme/localStyles";

const AboutAvatar = ({ fields, setFields, handleChange }) => {
  const deletePhoto = (e) => {
    e.preventDefault();

    setFields(prevFields => ({
      ...prevFields, photo: '',
    }))
  }

  const { EditAvatar, Photo, ManagePhotoBtn } = aboutStyles

  return <EditAvatar>
    {!fields.photo && (
      <>
        <Photo variant='circular' alt='Edit' />
        <ManagePhotoBtn
          color='secondary'
          aria-label='upload picture'
          component='label'
        >
          <input
            hidden
            onChange={(e) => handleChange('photo', e)}
            accept='image/*'
            type='file'
          />
          <AddAPhotoIcon sx={{ fontSize: 30 }} />
        </ManagePhotoBtn>
      </>
    )}

    {fields.photo && (
      <>
        <Photo
          variant='circular'
          src={fields.photo}
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
