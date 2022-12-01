import React, { FC } from 'react';

import { TextFieldProps, Typography } from '@mui/material';

import { MuiTextField, MuiTextField_wrapper } from './styles';

export type IFieldProps = {
  title?: string;
  customVariant?: 'outlined' | 'rounded' | 'smallDatepicker';
  select?: boolean;
  fontWeight?: number;
};

export const TextField: FC<TextFieldProps & IFieldProps> = ({
  placeholder,
  fontWeight,
  customVariant,
  title,
  ...props
}) => {
  return (
    <MuiTextField_wrapper>
      <Typography fontWeight={fontWeight} color={'white'} whiteSpace="nowrap" variant="subtitle2">
        {title}
      </Typography>
      <MuiTextField
        autoFocus={true}
        variant="filled"
        placeholder={placeholder}
        InputProps={{
          disableUnderline: true,
        }}
        {...props}
      />
    </MuiTextField_wrapper>
  );
};
