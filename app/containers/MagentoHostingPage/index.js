/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import PageBanner from 'components/PageBanner/PageBanner';
import Wrapper from 'components/Wrapper';
import P from 'components/P';
import messages from 'components/Header/messages';
import bannerImage from './magento_hosting.jpg';
const P2 = styled(P)`
  padding-top: 30px;
`;

const Pfirst = styled(P)`
  font-weight: bold;
  padding: 50px 0 0;
`;
const SPAN = styled.span`
  font-weight: bold;
`;

const LIstyle = {
  display: 'flex',
  fontFamily: 'RalewayRegular',
  fontSize: '21px',
  padding: '30px 0',
};
const Istyle = {
  color: '#ff3100',
  margin: 'auto 0',
  padding: '10px',
  fontSize: '2.4rem',
};

/* eslint-disable react/prefer-stateless-function */
export default class MagentoHostingPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.magento_hosting} />}
        />
        <Wrapper>
          <Pfirst>
            From Magento to Websphere, Shopify to Oracle, whatever the size and
            platform you choose, Intechsoft offers affordable bare metal
            infrastructure and industry experience to get you up and keep you
            running. We find for you best solution with our barely metal
            servers, virtual servers and cloud platform in the USA, Canada, UK,
            Germany, Netherlands and Singapore with professional 24/7 support
            and Free Administration.
          </Pfirst>
          <P2>
            <SPAN>Intechsoft company</SPAN> is not only web development company,
            our company runs the world&#39;s most powerful, scalable and
            feature-rich eCommerce applications without performance or
            availability worries on our highpower bare metal servers and
            high-speed fibre networking in Europe , USA and Asia. Magento gets a
            bit resource hungry when the themes, plugins or add-ons increase in
            number so it is very important to deal with professionals.
          </P2>
          <P2>
            <SPAN>Our servers</SPAN> have high uptime which is essential for a
            store. We always make it a point to meet the uptime guarantee
            offered to customers. For any commercial transactions, it is
            mandatory for the host to provide a secure means of data transfer.
            Keeping this in mind, Intechsoft provides a Free SSL certificate to
            all PHP Cloud Hosting customers so that their store and all related
            transactions are done through safe channels. We have also
            implemented several caching mechanisms in the server to boost the
            website speed and page response times.
          </P2>
          <P2>
            <SPAN>Intechsoft company</SPAN> knows the importance of page loading
            speeds and hence to boost the loading speed of websites, we provide
            a CDN along with our control panel. CDN (Content Delivery Network)
            is an optional feature which customers can choose if they wish. CDN,
            if utilized, will increase your page loading speed by fetching data
            from servers which are geographically nearer to the visitor. The CDN
            incorporated with our PHP Cloud Hosting package, we coloborate with
            CloudFlare.
          </P2>
          <ul className="hosting-list">
            <li style={LIstyle}>
              <i className="fa fa-check" style={Istyle} />
              <div>
                <div style={{ fontWeight: 'bold' }}>24/7 Tech Support</div>
                Available via Online chat, Jabber, ticket, skype.
              </div>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-check" style={Istyle} />
              <div>
                <div style={{ fontWeight: 'bold' }}>Free administration</div>
                Certify Administrators resolved troubleshooting during 30 mins.
              </div>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-check" style={Istyle} />
              <div>
                <div style={{ fontWeight: 'bold' }}>Free backup</div> All
                virtual servers back up automatically.
              </div>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-check" style={Istyle} />
              <div>
                <div style={{ fontWeight: 'bold' }}>Server monitoring</div> Our
                sophisticated monitoring system showing in a real time if you
                server or site is up.
              </div>
            </li>
            <li style={LIstyle}>
              <i className="fa fa-check" style={Istyle} />
              <div>
                <div style={{ fontWeight: 'bold' }}>DDOS Protection</div> We
                have Free basis protection up to 1 GBS.
              </div>
            </li>
          </ul>
        </Wrapper>
      </main>
    );
  }
}
