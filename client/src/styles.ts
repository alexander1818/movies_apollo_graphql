import { Box, styled, Theme } from '@mui/material';

export const ContainerWrapper = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.grey[100],
  paddingBottom: 16,
}));

export const AppWrapper = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
}));
