/**
 *
 * LanguageToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const optionStyle = {
  color: '#fff',
  fontSize: '15px',
  textTransform: 'lowercase',
  background: '#ff8b00',
};

const ToggleOption = ({ value, message, intl }) => (
  <option value={value} className={value} style={optionStyle}>
    {message ? intl.formatMessage(message) : value}
  </option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(ToggleOption);
