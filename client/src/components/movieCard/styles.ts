import { Box, styled } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Link, NavLink } from 'react-router-dom';

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

export const CardTitle = styled(NavLink)(({ theme }) => ({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  fontWeight: 600,
  color: '#545454',
  transition: '0.3s ease',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#878787',
  },
}));
