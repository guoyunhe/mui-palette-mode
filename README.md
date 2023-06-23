# mui-palette-mode

## Install

```bash
npm i mui-palette-mode
```

## Usage

```jsx
import { AppBar, Toolbar, Typography, createTheme } from '@mui/material';
import { PaletteModeButton, ThemeProvider } from 'mui-palette-mode';

const lightTheme = createTheme();
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function App() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography flexGrow={1}>Click the button on the right 👉</Typography>
          <PaletteModeButton />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
```
