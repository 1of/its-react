/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageBanner from 'components/PageBanner/PageBanner';
import messages from 'components/Header/messages';
import bannerImage from './magento_extension_dev.jpg';

/* eslint-disable react/prefer-stateless-function */
export default class MagentoExtensionPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={
            <FormattedMessage {...messages.magento_extension_development} />
          }
        />
      </main>
    );
  }
}
