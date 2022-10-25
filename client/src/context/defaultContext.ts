import React from 'react';
import { LOCALES } from '../constants/constants';

const eng = LOCALES.en;
const uk = LOCALES.uk;
export type TLocale = typeof eng | typeof uk;

export type TAction = {
  type: 'setLocale';
  locale: TLocale;
};

export type TDefaultContext = {
  locale: TLocale;
  dispatch?: React.Dispatch<TAction>;
};

export const DefaultContext: TDefaultContext = {
  locale: eng,
};
