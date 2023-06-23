import { BrightnessMedium, DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';
import { usePaletteMode } from './usePaletteMode';

export function PaletteModeButton(props: IconButtonProps) {
  const { paletteMode, userPaletteMode, setUserPaletteMode } = usePaletteMode();
  let icon = <BrightnessMedium />;
  switch (userPaletteMode) {
    case 'light':
      icon = <LightMode />;
      break;
    case 'dark':
      icon = <DarkMode />;
      break;
    default:
      icon = <BrightnessMedium />;
  }
  console.log(paletteMode, userPaletteMode);
  return (
    <IconButton
      color="inherit"
      {...props}
      onClick={() => {
        switch (userPaletteMode) {
          case 'light':
            setUserPaletteMode('dark');
            break;
          case 'dark':
            setUserPaletteMode('auto');
            break;
          default:
            setUserPaletteMode('light');
        }
      }}
    >
      {icon}
    </IconButton>
  );
}
