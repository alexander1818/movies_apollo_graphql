import { styled } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const DeleteMovieIcon = styled(HighlightOffIcon)(({ theme }) => ({
  color: 'rgba(0,0,0,0.5)',
  cursor: 'pointer',
  position: 'absolute',
  right: 2,
  top: 2,
  zIndex: 1,
}));
