import { Box, Paper, styled } from '@mui/material';

export const SeletctedMovie = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: 8,
  height: '70vh',
  overflow: 'auto',
}));

export const StickyBox = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
}));
