import { BrightnessMedium, DarkMode, LightMode } from '@mui/icons-material';
import { Theme, createTheme } from '@mui/material';
import { ReactNode } from 'react';
import { DualThemeProviderBase } from './DualThemeProviderBase';
import { PaletteModeContextValue, PaletteModeProvider } from './PaletteModeContext';

const defaultDarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const defaultLightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export interface DualThemeProviderProps extends Partial<PaletteModeContextValue> {
  /** Dark theme object */
  darkTheme?: Theme;
  /** Light theme object */
  lightTheme?: Theme;
  children: ReactNode;
}

export function DualThemeProvider({
  darkTheme = defaultDarkTheme,
  lightTheme = defaultLightTheme,
  defaultPaletteMode = 'auto',
  icons = {
    auto: <BrightnessMedium />,
    light: <LightMode />,
    dark: <DarkMode />,
  },
  messages = {
    auto: 'Auto',
    light: 'Light',
    dark: 'Dark',
  },
  children,
}: DualThemeProviderProps) {
  return (
    <PaletteModeProvider value={{ defaultPaletteMode, icons, messages }}>
      <DualThemeProviderBase darkTheme={darkTheme} lightTheme={lightTheme}>
        {children}
      </DualThemeProviderBase>
    </PaletteModeProvider>
  );
}
