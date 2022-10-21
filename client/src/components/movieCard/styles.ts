import { Box, styled } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export const CardMenuWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  opacity: 0,
  transition: '0.2s ease',
  '&:hover': {
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}));

export const AddMovieIcon = styled(PlaylistAddIcon)(({ theme }) => ({
  fontsize: '80px',
  width: 40,
  height: 40,
  color: '#ffffffd9',
  cursor: 'pointer',
}));
