/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import HomePageSlider from 'components/HomePageSlider/HomePageSlider';
import HomePageServices from 'components/HomePageServices/HomePageServices';
import HomePageContacts from 'components/HomePageContacts/HomePageContacts';
import HomePageOffices from 'components/HomePageOffices/HomePageOffices';
import H2 from 'components/H2';
import P from 'components/P';
import Wrapper from './Wrapper';
import messages from './messages';

const H2Home = styled(H2)`
  padding: 50px 0;
`;
const PHome = styled(P)`
  padding: 60px 0;
`;
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <HomePageSlider />
        <Wrapper>
          <PHome>
            Intechsoft company is an ideal balance between creativity and
            technology with affordable rates, that will save you huge amount of
            money with perfect developers that made top e-commerce websites and
            24/7 support team who are always happy to help You!
          </PHome>
          <HomePageServices />

          <H2Home>
            <FormattedMessage {...messages.contactus} />
          </H2Home>
          <HomePageContacts />
          <H2Home>
            <FormattedMessage {...messages.ouroffices} />
          </H2Home>
        </Wrapper>
        <HomePageOffices />
      </div>
    );
  }
}
