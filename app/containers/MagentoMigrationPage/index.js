/**
 * MagentoMigrationPage
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageBanner from 'components/PageBanner/PageBanner';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';
import P from 'components/P';
import H2 from 'components/H2';
import messages from 'components/Header/messages';
import bannerImage from './magento_migration.jpg';

const Pfirst = styled(P)`
  padding: 50px 0 20px;
`;

const LIstyle = {
  font: '700 21px RalewayRegular',
  paddingBottom: '15px',
};

const Istyle = {
  color: '#ff3100',
  paddingRight: '15px',
};

/* eslint-disable react/prefer-stateless-function */
export default class MagentoMigrationPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.magento_migration} />}
        />
        <Wrapper>
          <Pfirst>
            Magento Migration service covers all the stages of the store
            migration. Starting from an old store you end up with every
            necessary data migrated to the brand new environment. Aheadworks
            partner companies will take care of everything, making use of the
            Magento migration tool redundant.
          </Pfirst>
          <H2 style={{ padding: '0 0 20px' }}>Migration service includes:</H2>
          <ul>
            <li style={LIstyle}>
              <i className="fa fa-circle" style={Istyle} />
              <span>
                Consultation with ecommerce specialists on every aspect of data
                and extension migration;
              </span>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-circle" style={Istyle} />
              <span>
                Migration of all the data: products, orders, databases, images,
                financial data etc.;
              </span>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-circle" style={Istyle} />
              <span>
                Custom theme migration and adjustments to Magento 2, or theme
                development;
              </span>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-circle" style={Istyle} />
              <span>
                Assistance with choosing server hardware configuration;
              </span>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-circle" style={Istyle} />
              <span>
                Extension customization, integration, and data migration, to
                ensure a smooth start;
              </span>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-circle" style={Istyle} />
              <span>
                On-going support and stability of the delivered solution.
              </span>
            </li>
          </ul>
          <P>
            Depending on the store owner requirements additional services
            including custom development,installation of a particular extension,
            design and other can also be included as a part of migration
            process.
          </P>
        </Wrapper>
      </main>
    );
  }
}
