import { Box, Button, styled } from '@mui/material';
import dbMovies from '../../assets/images/dbMovies.jpg';
import { colors } from '../../utils/colors';

export const LoginWrapper = styled(Box)(({ theme }) => ({
  background: `url(${dbMovies}) no-repeat`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  backgroundOrigin: 'content-box',
  backgroundSize: 'cover',
  filter: 'drop-shadow(2px 4px 6px grey)',
}));

export const SubmitLogin = styled(Button)(({ theme }) => ({
  borderColor: '#ffff',
  color: '#ffff',
  textTransform: 'none',
  borderRadius: 7,
  '&:hover': {
    borderColor: colors.white,
    background: colors.white,
    color: colors.blackBeauty,
  },
}));
