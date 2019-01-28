/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';
import P from 'components/P';
import PageBanner from 'components/PageBanner/PageBanner';
import messages from './messages';
import bannerImage from './magento_extension_dev.jpg';
const SPAN = styled.span`
  font-weight: bold;
`;

const orangeLink = {
  color: '#ff8b00',
};

const padding = {
  paddingTop: '50px',
};

/* eslint-disable react/prefer-stateless-function */
export default class MagentoExtensionPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.extension_development} />}
        />
        <Wrapper>
          <P style={padding}>
            <SPAN>Intechsoft company</SPAN> has over 6 years experience in
            building custom Magento extensions for various ecommerce{' '}
            <Link to="/portfolio" style={orangeLink}>
              projects
            </Link>
            , and huge experience on how to create extensions in the right way.
            <br />
            Mainly
            <SPAN> Magento extension development</SPAN> comes down to connection
            between Magento and a third party system. It may be supported either
            by use of the Magento API or by our custom implementation. <br />
            Testing our extensions, we make you sure that the extension works
            supported Platform and PHP versions, etc. reducing customers`
            problem.
          </P>
          <P>
            Our sophisticated technical and customer documentation may help you
            to save time, and technical documentation will provide an overview
            of the architecture , explaining the choices, we made. <br />
            This can be used to maintain the extension internally if you chose
            to. The customer documentation includes installation and usage
            guides as well as FAQ (frequently asked questions). <br />
            Intechsoft company will continue to work and understand all your
            customers issues, you are running into , ways to avoid and resolve
            them in nearest time. <br />
            Initially this will be via warranty period and after extension built
            and beyond that we would be happy to create a support agreement.
          </P>
        </Wrapper>
      </main>
    );
  }
}
