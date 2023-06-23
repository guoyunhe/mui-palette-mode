import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material';
import { ReactNode } from 'react';
import { usePaletteMode } from './usePaletteMode';

export interface DualThemeProviderBaseProps {
  darkTheme: Theme;
  lightTheme: Theme;
  children: ReactNode;
}

export function DualThemeProviderBase({
  darkTheme,
  lightTheme,
  children,
}: DualThemeProviderBaseProps) {
  const { paletteMode } = usePaletteMode();

  return (
    <MuiThemeProvider theme={paletteMode === 'dark' ? darkTheme : lightTheme}>
      {children}
    </MuiThemeProvider>
  );
}
