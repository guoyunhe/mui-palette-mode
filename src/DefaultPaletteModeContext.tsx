import { PaletteMode } from '@mui/material';
import { createContext, useContext } from 'react';

export const DefaultPaletteModeContext = createContext<PaletteMode | 'auto'>('auto');

export const DefaultPaletteModeProvider = DefaultPaletteModeContext.Provider;

export const useDefaultPaletteMode = () => useContext(DefaultPaletteModeContext);
