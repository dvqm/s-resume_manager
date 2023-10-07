import { PDFViewer } from '@react-pdf/renderer';
import { pdfStyles } from '../../mainTheme/localStyles'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { s } from './PdfStyles';
import PdfResume from './PdfMarkup';

const PdfResumeViewer = ({ resume, accessPdf, accessManualPdf }) => {
  const { BoxStyled, IconButtonStyled } = pdfStyles;

  return <>
    {(accessPdf() || accessManualPdf()) &&
      <BoxStyled>
        <>
          <IconButtonStyled onClick={() => accessManualPdf(prev => !prev)}>
            <CloseOutlinedIcon />
          </IconButtonStyled>
          <PDFViewer style={s.viewer}>
            <PdfResume resume={resume} />
          </PDFViewer>
        </>
      </BoxStyled>
    }
  </>;
};

export default PdfResumeViewer;
