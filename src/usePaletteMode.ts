import { PaletteMode, useMediaQuery } from '@mui/material';
import useLocalStorage from 'use-local-storage';
import { useDefaultPaletteMode } from './DefaultPaletteModeContext';

export function usePaletteMode() {
  const defaultPaletteMode = useDefaultPaletteMode();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const systemPaletteMode = prefersDarkMode ? 'dark' : 'light';

  const [userPaletteMode, setUserPaletteMode] = useLocalStorage<PaletteMode | 'auto'>(
    'theme_palette_mode',
    defaultPaletteMode
  );

  const paletteMode = userPaletteMode === 'auto' ? systemPaletteMode : userPaletteMode;

  return { paletteMode, userPaletteMode, setUserPaletteMode };
}
