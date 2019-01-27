/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageBanner from 'components/PageBanner/PageBanner';
import messages from './messages';

import bannerImage from './vacansy.jpg';

/* eslint-disable react/prefer-stateless-function */
export default class CareerPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.join_our_team} />}
        />
      </main>
    );
  }
}
