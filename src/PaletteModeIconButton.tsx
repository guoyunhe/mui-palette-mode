import { IconButton, IconButtonProps } from '@mui/material';
import { usePaletteMode } from './usePaletteMode';

export function PaletteModeIconButton(props: IconButtonProps) {
  const { toggleUserPaletteMode, icon } = usePaletteMode();

  return (
    <IconButton color="inherit" {...props} onClick={toggleUserPaletteMode}>
      {icon}
    </IconButton>
  );
}
