import { ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText } from '@mui/material';
import { usePaletteMode } from './usePaletteMode';

export function PaletteModeListItemButton(props: ListItemButtonProps) {
  const { toggleUserPaletteMode, icon, message } = usePaletteMode();

  return (
    <ListItemButton color="inherit" {...props} onClick={toggleUserPaletteMode}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={message} />
    </ListItemButton>
  );
}
