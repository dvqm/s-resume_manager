import React, { useContext, useState } from 'react';
import { manageCvStyles } from '../mainTheme/localStyles.js';
import { Menu } from '@mui/icons-material';
import PdfResume from '../components/PdfLayout/PdfMarkup';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { InitialState } from '../state/context.jsx';
import SaveProcess from './ManageContents/ManageSaveProcess.jsx';
import ManipulationBtns from './ManageContents/ManageManipulationBtns.jsx';
import ManageHandlers from '../functions/ManageHandlers.js';

const Manage = () => {
  const { resume, resumeDispatch, resumes, resumesDispatch, accessOriginal, anyEditMode, accessManualPdf, accessManualList } = useContext(InitialState)

  const [save, setSave] = useState(false);
  const [toast, setToast] = useState([false, '', '']);


  const { ManageCvBox, IconButtonStyled, PDFDownloadLinkStyled } = manageCvStyles;

  const handle = ManageHandlers(resume, resumes, resumeDispatch, resumesDispatch, accessOriginal);

  return <ManageCvBox>
    <IconButtonStyled
      title='Show Resume List'
      color='primary'
      onClick={() => accessManualList(prev => !prev)}>
      <Menu />
    </IconButtonStyled>

    <IconButtonStyled
      title='Show PDF preview'
      color='primary'
      onClick={() => accessManualPdf(prev => !prev)}
    >
      <PictureAsPdfIcon />
    </IconButtonStyled>

    <PDFDownloadLinkStyled 
      document={<PdfResume resume={resume} />}
      title='Download PDF'
      fileName='resume.pdf'
      style={{ margin: 'auto 0' }}
    > 
      <DownloadOutlinedIcon /> 
    </PDFDownloadLinkStyled> 

    <SaveProcess resume={resume} resumes={resumes} save={save}
      setSave={setSave} accessOriginal={accessOriginal}
      resumeDispatch={resumeDispatch} anyEditMode={anyEditMode}
      resumesDispatch={resumesDispatch} toast={toast} setToast={setToast} />
    <ManipulationBtns
      restorePrevious={handle.restore}
      newResume={handle.new}
      deleteResume={handle.delete}
      cloneResume={handle.clone}
      save={save}
    />
  </ManageCvBox >
    ;
}

export default Manage;
