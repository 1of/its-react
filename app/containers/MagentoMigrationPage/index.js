/**
 * MagentoMigrationPage
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageBanner from 'components/PageBanner/PageBanner';
import messages from 'components/Header/messages';
import bannerImage from './magento_migration.jpg';

/* eslint-disable react/prefer-stateless-function */
export default class MagentoMigrationPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.magento_migration} />}
        />
      </main>
    );
  }
}
