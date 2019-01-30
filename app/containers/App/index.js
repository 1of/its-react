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

import HeaderTopContacts from 'components/HeaderTopContacts/HeaderTopContacts';
import Header from 'components/Header/Header';

import HomePage from 'containers/HomePage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';
import OutstaffingPage from 'containers/OutstaffingPage/Loadable';
import MagentoServicesPage from 'containers/MagentoServicesPage/Loadable';
import CareerPage from 'containers/CareerPage/Loadable';
import ContactsPage from 'containers/ContactsPage/Loadable';
import MagentoDesignPage from 'containers/MagentoDesignPage/Loadable';
import MagentoDevelopmentPage from 'containers/MagentoDevelopmentPage/Loadable';
import MagentoExtensionPage from 'containers/MagentoExtensionPage/Loadable';
import MagentoHostingPage from 'containers/MagentoHostingPage/Loadable';
import MagentoMigrationPage from 'containers/MagentoMigrationPage/Loadable';
import MagentoSupportPage from 'containers/MagentoSupportPage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Footer from 'components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app.scss';
import GlobalStyle from '../../global-styles';
export default function App() {
  return (
    <div>
      <HeaderTopContacts />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={MagentoServicesPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/career" component={CareerPage} />
        <Route path="/outstaffing" component={OutstaffingPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/magento_design" component={MagentoDesignPage} />
        <Route path="/magento_development" component={MagentoDevelopmentPage} />
        <Route path="/magento_extension" component={MagentoExtensionPage} />
        <Route path="/magento_hosting" component={MagentoHostingPage} />
        <Route path="/magento_migration" component={MagentoMigrationPage} />
        <Route path="/magento_support" component={MagentoSupportPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
