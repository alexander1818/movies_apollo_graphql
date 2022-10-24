import { Box, CircularProgress, Paper, styled } from '@mui/material';

export const LoaderWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '48%',
  left: '48%',
  zIndex: 10,
}));

export const MuiLoader = styled(CircularProgress)(({ theme }) => ({
  color: '#000',
}));
