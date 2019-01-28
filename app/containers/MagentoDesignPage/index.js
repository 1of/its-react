/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';
import H2 from 'components/H2';
import P from 'components/P';
import PageBanner from 'components/PageBanner/PageBanner';
import messages from 'components/Header/messages';
import bannerImage from './magento_design.jpg';

const H2extended = styled(H2)`
  padding: 50px 0;
`;
const LI = styled.li`
  padding: 30px 0;
  font: 700 21px RalewayRegular;
`;
const I = styled.i`
  color: #ff3100;
  padding-right: 20px;
`;
/* eslint-disable react/prefer-stateless-function */
export default class MagentoDesignPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.magento_design} />}
        />
        <Wrapper>
          <H2extended>
            INTECHSOFT COMPANY SUGGEST AFFORDABLE ATTRACTIVE AND USER-FRIENDLY
            MAGENTO DESIGN
          </H2extended>
          <P>
            Intechsoft eCommerce website design is all about understanding how
            to take a conversion optimized user experience and adding the right
            amount of unique brand personality to make your ecommerce store a
            reflection of your company. Our graphic designers understand your
            need to sell while maintaining brand integrity.
          </P>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> Magento Theme Design
            </LI>
          </ul>
          <P>
            As Magento platform develops and matures, design patterns and trends
            evolve too. More designs, templates and themes are emerging as we
            face the need to impress your customers and convince them to buy.
            The themes we create are set to underscore your brand’s
            individuality.
          </P>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> Magento eCommerce Design
            </LI>
          </ul>
          <P>
            Intechsoft has been in the web development and web design business
            for over 6 years now. We have a proven hundred of developing modern
            and functional web stores that convert.
          </P>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> Magento Mobile Design
            </LI>
          </ul>
          <P>
            We ensure great user experience on all screen sizes. Everything that
            enables higher revenues for our clients is of top priority for us.
            And we are equal to the challenge of providing your users with
            eye-catchy Magento mobile web store design.
          </P>
        </Wrapper>
      </main>
    );
  }
}
