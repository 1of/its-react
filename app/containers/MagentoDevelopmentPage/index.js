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
import bannerImage from './magento_development.jpg';
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
export default class MagentoDevelopmentPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.magento_development} />}
        />
        <Wrapper>
          <H2extended>
            MAGENTO DEVELOPMENT SERVICES FOR YOUR BUSINESS
          </H2extended>
          <P>
            Intechsoft company develops every project with passion and love, and
            every single project shows our client profit from the new functional
            store we have created.{' '}
          </P>
          <P>
            The result of our work not only increasing sales to our customers,
            but keep profit come and increase it year by year.{' '}
          </P>
          <P>
            With over 7 years of experience as Magento development company,
            Intechsoft company provide professional e-commerce solutions for our
            clients while focusing on creating great user experience and
            customer service.
          </P>
          <H2extended>OUR WORK IS EFFICIENT AND TRANSPARENT</H2extended>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> Learn and Analyze your e-commerce
              site
            </LI>
          </ul>
          <P>
            With your help we start with a thorough review of your existing
            website, your business needs and your market. We present you with a
            plan and budget and negotiate the final outline.
          </P>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> Our Magento team create and test
              and host
            </LI>
          </ul>
          <P>
            Your Magento store is created to reflect your business needs and
            your showing your individuality, as well as current trends in online
            shopping experience to enhance sales.
          </P>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> We keep support your website 24/7
            </LI>
          </ul>
          <P>
            Once your new website is live, Intechsoft support team continue with
            24/7 Magento support. Every single needs or site improvement we are
            ready to do in nearest time. If you need we train your staff and
            help to acquaint them with magento CMS.
          </P>
          <H2extended>WHY WORK WITH INTECHSOFT COMPANY ?</H2extended>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> Expertise
            </LI>
          </ul>
          <P>
            Our leading developers were a part of the team that work together
            with Magento team and top magento didgital Agency, so we know all
            ins and outs of the Magento platform. With this unique knowledge we
            beat our competition’s expertise and deliver the ultimate Magento
            web stores.
          </P>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> Transparency
            </LI>
          </ul>
          <P>
            Our reputation is unimpeachable, because we are always honest and
            transparent with our clients. You get access to our JIRA time
            management system and you can track all the progress our developers
            make on your project. Our project managers are at your service to
            provide updates and explanations when needed. Work Within Deadlines
            and Budget. During 7 years we have not delayed a single project - We
            value efficiency and predictability as much as our clients do.
          </P>
          <ul>
            <LI className="dev-list">
              <I className="fa fa-circle" /> Save money
            </LI>
          </ul>
          <P>
            Our main development office is located in Eastern Europe - Kharkov,
            Ukraine, where developers` rates are mostly lower than in EU or the
            USA. However all our developers are western-minded, and work in
            cooperation with European and the USA teams for a long time. Having
            such an experience they are always fit to EU and the USA clients
            demand.
          </P>
        </Wrapper>
      </main>
    );
  }
}
