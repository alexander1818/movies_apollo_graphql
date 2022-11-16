import { Grid, styled } from '@mui/material';

interface SomeProps {
  image: string;
}

export const GridMui = styled(Grid, { shouldForwardProp: (prop) => prop !== 'image' })<{
  image: string;
}>(({ theme, image }) => {
  return {
    background: `url(${image}) no-repeat`,
    backgroundOrigin: 'content-box',
    backgroundSize: 'cover',
    filter: 'drop-shadow(2px 4px 6px grey)',
  };
});
