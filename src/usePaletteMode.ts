import { PaletteMode, useMediaQuery } from '@mui/material';
import { Dispatch, SetStateAction, useCallback } from 'react';
import useLocalStorage from 'use-local-storage';
import { PaletteModeContextValue, usePaletteModeContext } from './PaletteModeContext';

export interface UsePaletteModeReturn extends PaletteModeContextValue {
  paletteMode: PaletteMode;
  userPaletteMode: 'auto' | PaletteMode;
  setUserPaletteMode: Dispatch<SetStateAction<'auto' | PaletteMode>>;
  toggleUserPaletteMode: () => void;
  icon: React.ReactNode;
  message: React.ReactNode;
}

export function usePaletteMode() {
  const { defaultPaletteMode, icons, messages } = usePaletteModeContext();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const systemPaletteMode = prefersDarkMode ? 'dark' : 'light';

  const [userPaletteMode, setUserPaletteMode] = useLocalStorage<PaletteMode | 'auto'>(
    'theme_palette_mode',
    defaultPaletteMode
  );

  const paletteMode = userPaletteMode === 'auto' ? systemPaletteMode : userPaletteMode;

  const toggleUserPaletteMode = useCallback(() => {
    setUserPaletteMode((prev) => {
      switch (prev) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'auto';
        default:
          return 'light';
      }
    });
  }, [setUserPaletteMode]);

  return {
    paletteMode,
    userPaletteMode,
    setUserPaletteMode,
    toggleUserPaletteMode,
    icon: icons[userPaletteMode],
    icons,
    message: messages[userPaletteMode],
    messages,
  };
}
