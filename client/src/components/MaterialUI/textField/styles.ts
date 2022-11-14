import { Box, styled, TextField } from '@mui/material';
import { colors } from '../../../utils/colors';

export const MuiTextField_wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
}));

export const MuiTextField = styled(TextField)(({ theme }) => ({
  '&&': {
    borderRadius: 7,
    background: colors.fieldsBGColor,
    '& .Mui-disabled': {
      WebkitTextFillColor: '#383E45',
      background: colors.fieldsBGColor,
    },
  },
  color: '#383E45',
  fontSize: 16,
  '& .MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
    borderRadius: 7,
  },
  '& .MuiFilledInput-input:-webkit-autofill': {
    borderRadius: 7,
    backgroundColor: colors.fieldsBGColor,
    boxShadow: '0 0 0 100px #F6F8F9 inset',
    '-webkit-text-fill-color': '#000',
    caretColor: '#000',
  },
  '& .MuiFilledInput-root': {
    borderRadius: 7,
    background: colors.fieldsBGColor,
    '&:hover:before': {
      borderBottom: 'none !important',
    },
    '&:before': {
      borderBottom: 'none',
    },
    '&:hover': {
      background: '#F7F7F8',
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    position: 'absolute',
    bottom: '-20px',
    color: colors.red,
  },
}));
