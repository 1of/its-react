/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';
import HeaderTopContacts from 'components/HeaderTopContacts/HeaderTopContacts';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import 'app.scss';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <HeaderTopContacts />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
