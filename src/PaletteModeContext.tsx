import { BrightnessMedium, DarkMode, LightMode } from '@mui/icons-material';
import { PaletteMode } from '@mui/material';
import { ReactNode, createContext, useContext } from 'react';

export interface PaletteModeContextValue {
  defaultPaletteMode: PaletteMode | 'auto';
  icons: Record<PaletteMode | 'auto', ReactNode>;
  messages: Record<PaletteMode | 'auto', ReactNode>;
}

export const PaletteModeContext = createContext<PaletteModeContextValue>({
  defaultPaletteMode: 'auto',
  icons: {
    auto: <BrightnessMedium />,
    light: <LightMode />,
    dark: <DarkMode />,
  },
  messages: {
    auto: 'Auto',
    light: 'Light',
    dark: 'Dark',
  },
});

export const PaletteModeProvider = PaletteModeContext.Provider;

export const usePaletteModeContext = () => useContext(PaletteModeContext);
