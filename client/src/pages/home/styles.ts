import { Paper, styled } from '@mui/material';

export const SeletctedMovie = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: 8,
  height: '100%',
  position: 'sticky',
  top: theme.spacing(2),
}));
