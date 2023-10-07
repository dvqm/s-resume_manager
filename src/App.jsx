import { ThemeProvider } from '@mui/material';
import mainTheme from './mainTheme/globalTheme';
import { resumeStyled } from './mainTheme/localStyles';
import './mainTheme/global.css';
import Resume from './components/Resume';
import ResumeList from './components/Contents';
import { useContext, useEffect } from 'react';
import { InitialState } from './state/context';
import Manage from './components/Manage';
import Auth from './database/Auth';
import PdfResumeViewer from './components/PdfLayout/PdfResumeView';

const App = () => {
  const { ResumeLayout, SidePanelGrid } = resumeStyled;
  const { resume, accessList, accessPdf, accessManualPdf } = useContext(InitialState);
                               
  useEffect(() => {
    const breakpoint = mainTheme.breakpoints.values.lg;
    const setScreen = () => {
      if (window.innerWidth > breakpoint) {
        accessList(true);
        accessPdf(true);
      }
      if (window.innerWidth < breakpoint) {
        accessList(false);
        accessPdf(false);
      }
    };
    setScreen();

    window.addEventListener('resize', setScreen);
    return () => {
      window.removeEventListener('resize', setScreen);
    };
  }, [accessList, accessPdf]);

  return (
    <ThemeProvider theme={mainTheme}>
      <ResumeLayout container>
        <Resume />
        <SidePanelGrid item xs={12} lg={5} order={{ xs: 1, lg: 2 }}>
          <Auth />
          <Manage />
          <ResumeList />
          <PdfResumeViewer
            resume={resume}
            accessPdf={accessPdf}
            accessManualPdf={accessManualPdf} />
        </SidePanelGrid>
      </ResumeLayout>
    </ThemeProvider>
  );
};

export default App;
