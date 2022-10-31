import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import flatten from 'flat';

import { PropTypes } from '@mui/material';

import { LOCALES } from '../constants/constants';
import messages from './messages';

const Provider = ({ children, locale = LOCALES.en }) => (
  <IntlProvider locale={locale} messages={flatten(messages[locale])}>
    {children}
  </IntlProvider>
);

Provider.displayName = 'I18nProvider';

// Provider.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
//   locale: PropTypes.oneOf(Object.values(LOCALES)),
// };
//
// Provider.defaultProps = {
//   locale: LOCALES.en,
// };

export default Provider;
