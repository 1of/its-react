/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageBanner from 'components/PageBanner/PageBanner';
import messages from 'components/Header/messages';
import bannerImage from './contact_us.png';

/* eslint-disable react/prefer-stateless-function */
export default class ContactsPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.contacts} />}
        />
      </main>
    );
  }
}
