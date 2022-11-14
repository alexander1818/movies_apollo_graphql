import React, { FC } from 'react';

import classNames from 'classnames';

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
  // const classes = useStyles();
  // const inputClasses = classNames(classes.outlined, {
  //   [classes.outlined]: customVariant === 'outlined',
  //   [classes.rounded]: customVariant === 'rounded',
  //   [classes.smallDatepicker]: customVariant === 'smallDatepicker',
  // });
  return (
    <MuiTextField_wrapper>
      <Typography fontWeight={fontWeight} whiteSpace="nowrap" variant="subtitle2">
        {title}
      </Typography>
      <MuiTextField
        autoFocus={true}
        variant="filled"
        placeholder={placeholder}
        InputProps={{
          // classes: { root: inputClasses },
          disableUnderline: true,
        }}
        {...props}
      />
    </MuiTextField_wrapper>
  );
};
