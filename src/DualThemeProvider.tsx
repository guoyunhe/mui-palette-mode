import { PaletteMode, Theme, createTheme } from '@mui/material';
import { ReactNode } from 'react';
import { DefaultPaletteModeProvider } from './DefaultPaletteModeContext';
import { DualThemeProviderBase } from './DualThemeProviderBase';

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

export interface DualThemeProviderProps {
  /** Dark theme object */
  darkTheme?: Theme;
  /** Light theme object */
  lightTheme?: Theme;
  /**
   * Default palette mode
   * @default 'auto'
   */
  defaultPaletteMode?: PaletteMode | 'auto';
  children: ReactNode;
}

export function DualThemeProvider({
  darkTheme = defaultDarkTheme,
  lightTheme = defaultLightTheme,
  defaultPaletteMode = 'auto',
  children,
}: DualThemeProviderProps) {
  return (
    <DefaultPaletteModeProvider value={defaultPaletteMode}>
      <DualThemeProviderBase darkTheme={darkTheme} lightTheme={lightTheme}>
        {children}
      </DualThemeProviderBase>
    </DefaultPaletteModeProvider>
  );
}
