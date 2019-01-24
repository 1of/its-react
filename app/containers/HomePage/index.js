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

import HomePageSlider from 'components/HomePageSlider/HomePageSlider';
import HomePageServices from 'components/HomePageServices/HomePageServices';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <HomePageSlider />
        <p>
          Intechsoft company is an ideal balance between creativity and
          technology with affordable rates, that will save you huge amount of
          money with perfect developers that made top e-commerce websites and
          24/7 support team who are always happy to help You!
        </p>
        <HomePageServices />
      </div>
    );
  }
}
