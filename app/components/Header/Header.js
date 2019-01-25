import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import NavLink from './NavLink';
import messages from './messages';
import Logo from './logo.svg';
import './Header.scss';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
        <NavLink to="/portfolio">
          <img src={Logo} alt="Intechsoft" />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/magento-design">
                <FormattedMessage {...messages.magento_design} />
              </NavDropdown.Item>
              <NavDropdown.Item href="/magento-development">
                <FormattedMessage {...messages.magento_development} />
              </NavDropdown.Item>
              <NavDropdown.Item href="/magento-extension-development">
                <FormattedMessage {...messages.magento_extension_development} />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/magento-hosting">
                <FormattedMessage {...messages.magento_hosting} />
              </NavDropdown.Item>
              <NavDropdown.Item href="/magento-migration">
                <FormattedMessage {...messages.magento_migration} />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/portfolio">
              <FormattedMessage {...messages.portfolio} />
            </Nav.Link>
            <Nav.Link href="/career">
              <FormattedMessage {...messages.career} />
            </Nav.Link>
            <Nav.Link href="/outstaffing">
              <FormattedMessage {...messages.outstaffing} />
            </Nav.Link>
            <Nav.Link href="/contact">
              <FormattedMessage {...messages.contact} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
