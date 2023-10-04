import React, { useContext, useEffect, useState } from 'react';
import { manageCvStyles } from '../mainTheme/localStyles.js';
import { Menu } from '@mui/icons-material';
import { PdfResume } from '../components/PdfLayout/PdfMarkup';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { InitialState } from '../state/context.jsx';
import { checkEdit, observeEdit } from '../functions/EditableObserver.js';
import SaveProcess from './ManageContents/ManageSaveProcess.jsx';
import ManipulationBtns from './ManageContents/ManageManipulationBtns.jsx';

const Manage = () => {
  const { resume, resumeDispatch, resumes, resumesDispatch, accessOriginal } = useContext(InitialState)

  const [save, setSave] = useState(false);
  const [editMode, setEditMode] = useState(checkEdit());

  useEffect(() => {
    setEditMode(checkEdit());
  }, []);

  const { ManageCvBox, IconButtonStyled, PDFDownloadLinkStyled } = manageCvStyles;


  return (
    <ManageCvBox>
      <IconButtonStyled
        title='Show Resume List'
        color='primary'
        onClick={() => alert('preview.list()')}>
        <Menu />
      </IconButtonStyled>

      <IconButtonStyled
        title='Show PDF preview'
        color='primary'
        onClick={() => alert('preview.pdf()')}
      >
        <PictureAsPdfIcon />
      </IconButtonStyled>

      {/* <PDFDownloadLinkStyled */}
      {/*   document={<PdfResume state={state} />} */}
      {/*   title='Download PDF' */}
      {/*   fileName="accessResume().pdf" */}
      {/*   style={{ margin: 'auto 0' }} */}
      {/* > */}
      {/*   <DownloadOutlinedIcon /> */}
      {/* </PDFDownloadLinkStyled> */}

      <SaveProcess resume={resume} resumes={resumes} save={save}
        setSave={setSave} accessOriginal={accessOriginal}
        resumeDispatch={resumeDispatch} editMode={editMode}
        resumesDispatch={resumesDispatch} />
      {/* <ManipulationBtns save={save} /> */}
    </ManageCvBox >
  );
}

export default Manage;
