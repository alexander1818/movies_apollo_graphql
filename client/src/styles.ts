import { Box, styled, Theme } from '@mui/material';

export const ContainerWrapper = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.grey[100],
  paddingBottom: 16,
}));
