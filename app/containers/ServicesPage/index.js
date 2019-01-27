/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class ServicesPage extends React.PureComponent {
  render() {
    return (
      <main>
        <h1 className="intro-txt">
          <FormattedMessage {...messages.our_portfolio} />
        </h1>
      </main>
    );
  }
}
