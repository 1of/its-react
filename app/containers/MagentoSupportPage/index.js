/**
 * MagentoSupportPage
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';
import PageBanner from 'components/PageBanner/PageBanner';
import P from 'components/P';
import messages from './messages';
import { scope } from './messages';
import bannerImage from './magento_support.jpg';

const Items = [
  'application_support',
  'application_maintenance',
  'bug_fixes',
  'application_security',
  'software_patches',
  'digital_asset',
  'application_connectivity',
  'application_monitoring',
  'back_up_monitoring',
  'deployment',
  'access_to_support',
  'access_to_knowledge',
];

const Pfirst = styled(P)`
  font-weight: bold;
  padding: 50px 0 20px;
`;
const LI = styled.li`
  font: bold 21px/1.2 'RalewayRegular', sans-serif;
  padding: 8px 0;
`;
const I = styled.i`
  color: #ff3100;
  padding-right: 10px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class MagentoSupportPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.magento_support} />}
        />
        <Wrapper>
          <Pfirst>
            Every single customer gets special 24/7 support from our developers.
            And any issue, happens with their store or project would be on the
            first place for Intechsoft team . The ntechsoft company is always
            available with 24x7 Magento Support&Maintenance and our support
            developers are always ready to help and resolve any problem.
          </Pfirst>
          <ul>
            {Items.map((item, index) => (
              <LI key={index}>
                <I className="fa fa-check" />
                <FormattedMessage id={`${scope}.${item}`} />
              </LI>
            ))}
          </ul>
        </Wrapper>
      </main>
    );
  }
}
