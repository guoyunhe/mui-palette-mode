import { ThemeProvider as MuiThemeProvider, PaletteMode, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { usePaletteMode } from './usePaletteMode';

export interface ThemeProviderProps {
  darkTheme: Theme;
  lightTheme: Theme;
  defaultPaletteMode?: PaletteMode | 'auto';
  children: ReactNode;
}

export function BaseThemeProvider({ darkTheme, lightTheme, children }: ThemeProviderProps) {
  const { paletteMode } = usePaletteMode();

  return (
    <MuiThemeProvider theme={paletteMode === 'dark' ? darkTheme : lightTheme}>
      {children}
    </MuiThemeProvider>
  );
}
