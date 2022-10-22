import React, { FC, ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export interface IModalProps {
  fullWidth?: boolean;
  children: ReactNode;
  title?: string;
  open: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClose?: () => void;
}

export const Modal: FC<IModalProps> = (props) => {
  const { fullWidth, children, title, open, maxWidth, onClose } = props;

  return (
    <Dialog keepMounted fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={onClose}>
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
