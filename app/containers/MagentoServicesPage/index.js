/**
 * MagentoSupportPage
 *
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from 'components/Header/messages';
import H2 from 'components/H2';
import P from 'components/P';
import Contacts from 'components/HomePageContacts/HomePageContacts';
import Wrapper from 'components/Wrapper';
import './MagentoServicesPage.scss';
const H2extended = styled(H2)`
  padding: 50px 0;
`;
const Pextended = styled(P)`
  padding: 15px 0;
`;

/* eslint-disable react/prefer-stateless-function */
export default class MagentoServicesPage extends React.PureComponent {
  render() {
    return (
      <main>
        <Wrapper>
          <H2extended>СUSTOM MAGENTO DEVELOPMENT</H2extended>
          <Pextended>
            Intechsoft company not just have been masters of Magento for more
            then 7 years, but been powerful E-commerce digital agency all over
            Eastern Europe. Our aim is to deliver the best platform and
            technology for you. We believe your website should provide
            everything people need to find their tribe, discover new, creative
            ways of understanding themselves, and thrive in their own unique
            way. Intechsoft is a full-service building and optimizing ecommerce,
            complex websites and digital strategy.
          </Pextended>
          <Pextended>
            We are creating site that calling customers to your brand, and this
            site will keep people coming back again and again. Our Moto is be
            creative, different, and curious and push the limits of technology,
            changing industry for the better.
          </Pextended>
          <Pextended>
            With our certified specialista in Magento and Magento2 and our
            experience of over 8 years, we are able to provide fast loading,
            slick and super-efficient sites that we may host at our fastest own
            hosting cloud solution in the USA, Canada, UK, Germany and
            Netherlands.
          </Pextended>
          <Pextended>
            Intechsoft company is an ideal balance between creativity and
            technology with affordable rates, that will save you huge amount of
            money with perfect developers that made top e-commerce websites and
            24/7 support team who are always happy to help You!
          </Pextended>
        </Wrapper>
        <div className="services-block">
          <Wrapper>
            <ul className="dev-items-wrap">
              <li>
                <div>
                  <span className="item-header item1" />
                </div>
                <h4>
                  <span>magento development</span>
                </h4>
                <p>
                  Intechsoft company develop each of our projects with passion
                  and love, and every single project is seeing our client profit
                  from the new functional store we have...
                </p>
                <NavLink to="/magento_development">more information</NavLink>
              </li>
              <li>
                <div>
                  <span className="item-header item2" />
                </div>
                <h4>
                  <span>magento extensions</span>
                </h4>
                <p>
                  Intechsoft company has over 6 years experience in building
                  custom Magento extensions for various ecommerce projects and
                  huge experience on how to create..{' '}
                </p>
                <NavLink to="/magento_extension">more information</NavLink>
              </li>
              <li>
                <div>
                  <span className="item-header item3" />
                </div>
                <h4>
                  <span>magento web design</span>
                </h4>
                <p>
                  Intechsoft company suggest affordable attractive and
                  user-friendly Magento designs.Intechsoft eCommerce website
                  design is all about understanding how to..
                </p>
                <NavLink to="/magento_design">more information</NavLink>
              </li>
              <li>
                <div>
                  <span className="item-header item4" />
                </div>
                <h4>
                  <span>magento hosting and administrations</span>
                </h4>
                <p>
                  From Magento to Websphere, Shopify to Oracle, whatever the
                  size and platform you choose, Intechsoft offers affordable
                  bare metal infrastructure and industry...
                </p>
                <NavLink to="/magento_hosting">more information</NavLink>
              </li>
              <li>
                <div>
                  <span className="item-header item5" />
                </div>
                <h4>
                  <span>magento support</span>
                </h4>
                <p>
                  Every single customer gets special 24/7 support from our
                  developers. And any issue, happens with their store or project
                  would be on the first place for Intechsoft{' '}
                </p>
                <NavLink to="/magento_support">more information</NavLink>
              </li>
              <li>
                <div>
                  <span className="item-header item6" />
                </div>
                <h4>
                  <span>magento data migrations</span>
                </h4>
                <p>
                  Magento Migration service covers all the stages of the store
                  migration. Starting from an old store you end up with every
                  necessary data migrated to the brand...
                </p>
                <NavLink to="/magento_migration">more information</NavLink>
              </li>
            </ul>
          </Wrapper>
        </div>
        <Wrapper>
          <H2extended>Contact Us</H2extended>
          <Contacts />
        </Wrapper>
      </main>
    );
  }
}
