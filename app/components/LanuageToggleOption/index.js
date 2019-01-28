/**
 *
 * LanguageToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import './style.scss';

const ToggleOption = ({ value, message, intl }) => (
  <option value={value} className={value}>
    {message ? intl.formatMessage(message) : value}
  </option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(ToggleOption);
