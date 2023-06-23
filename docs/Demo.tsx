import { AppBar, Toolbar, Typography, createTheme } from '@mui/material';
import { DualThemeProvider, PaletteModeIconButton } from 'mui-palette-mode';

const lightTheme = createTheme();
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function App() {
  return (
    <DualThemeProvider lightTheme={lightTheme} darkTheme={darkTheme} defaultPaletteMode="auto">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography flexGrow={1}>Click the button on the right 👉</Typography>
          <PaletteModeIconButton />
        </Toolbar>
      </AppBar>
    </DualThemeProvider>
  );
}
