import { PaletteMode, Theme, createTheme } from '@mui/material';
import { ReactNode } from 'react';
import { BaseThemeProvider } from './BaseThemeProvider';
import { DefaultPaletteModeProvider } from './DefaultPaletteModeContext';

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

export interface ThemeProviderProps {
  darkTheme?: Theme;
  lightTheme?: Theme;
  defaultPaletteMode?: PaletteMode | 'auto';
  children: ReactNode;
}

export function ThemeProvider({
  darkTheme = defaultDarkTheme,
  lightTheme = defaultLightTheme,
  defaultPaletteMode = 'auto',
  children,
}: ThemeProviderProps) {
  return (
    <DefaultPaletteModeProvider value={defaultPaletteMode}>
      <BaseThemeProvider darkTheme={darkTheme} lightTheme={lightTheme}>
        {children}
      </BaseThemeProvider>
    </DefaultPaletteModeProvider>
  );
}
