# mui-palette-mode

Toggle dark or light mode for your MUI apps

## Install

```bash
npm i mui-palette-mode
```

## Usage

```jsx
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
```

## API

### `<DualThemeProvider />`

Provider to support dark/light theme switching.

#### `lightTheme: Theme`

MUI theme for light mode.

#### `darkTheme: Theme`

MUI theme for dark mode.

#### `defaultPaletteMode: 'light' | 'dark' | 'auto'`

Default value: `'auto'`

Default palette mode if user hasn't choose one. Palette mode is saved in localStorage (key: `theme_palette_mode`).

### `<PaletteModeIconButton />`

The icon button to toggle color modes.

### `usePaletteMode()`

The hook to get and set color mode.
