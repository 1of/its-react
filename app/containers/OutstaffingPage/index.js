/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import PageBanner from 'components/PageBanner/PageBanner';
import Wrapper from 'components/Wrapper';
import H2 from 'components/H2';
import P from 'components/P';
import messages from 'components/Header/messages';
import bannerImage from './outstaffing.jpg';

const H2extended = styled(H2)`
  padding: 50px 0;
`;
const PBold = styled(P)`
  padding-bottom: 50px;
  font-weight: bold;
`;

/* eslint-disable react/prefer-stateless-function */
export default class OutstaffingPafe extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.outstaffing} />}
        />
        <Wrapper>
          <H2extended>OUTSOURCING/OUTSTAFFING</H2extended>
          <PBold>
            If you run or planning to run Magento development company, you might
            know that qualified Magento staff are in high demand and usually
            it&lsquo;s very hard to built a team with Magento developers. Our
            company has solutions for you - remote Magento back end, front end
            and full stack developers. Our certified or just talented
            professionals with experience from 4-5 years ready to become part of
            your team.
          </PBold>
          <P>
            All our staff works in-haus that means for our customers much easier
            and less riskier to control them. As our staff from Eastern Europe
            it is more cost effective to collaborate with Intechsoft company.
          </P>
        </Wrapper>
      </main>
    );
  }
}
