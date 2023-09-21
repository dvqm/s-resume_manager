import { ThemeProvider } from '@mui/material';
import mainTheme from './mainTheme/globalTheme';
import { resumeStyled } from './mainTheme/localStyles';
import Resume from './components/Resume';
import ResumeList from './components/Contents';
import { useContext, useEffect } from 'react';
import { InitialState } from './state/context';

const App = () => {
  const { ResumeLayout, SidePanelGrid } = resumeStyled;
  const { accessList } = useContext(InitialState);

  useEffect(() => {
    const setScreen = (setter) => {
      const mdBreakpoint = mainTheme.breakpoints.values.md;
      if (window.innerWidth < mdBreakpoint) setter(false)
      else setter(true);
    }
    window.addEventListener('resize', setScreen(accessList));
    return () => {
      window.removeEventListener('resize', setScreen(accessList));
    };
  }, [accessList]);


  return <ThemeProvider theme={mainTheme}>
    <ResumeLayout container spacing={4}>
      <Resume />
      <SidePanelGrid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
        <ResumeList />
      </SidePanelGrid>
    </ResumeLayout>
  </ThemeProvider>
}

export default App;
