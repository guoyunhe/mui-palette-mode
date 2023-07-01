import { Button, ButtonProps } from '@mui/material';
import { usePaletteMode } from './usePaletteMode';

export function PaletteModeButton(props: ButtonProps) {
  const { toggleUserPaletteMode, icon, message } = usePaletteMode();

  return (
    <Button color="inherit" {...props} onClick={toggleUserPaletteMode} startIcon={icon}>
      {message}
    </Button>
  );
}
