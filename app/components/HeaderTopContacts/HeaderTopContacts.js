import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';

import './HeaderTopContacts.scss';
/* eslint-disable react/prefer-stateless-function */
class HeaderTopContacts extends React.Component {
  render() {
    return (
      <div className="top-header">
        <div className="top-header-content commonStyle">
          <LocaleToggle />
          <p className="skype">
            <span>
              <i className="fa fa-skype" />
            </span>
            <a href="skype:pevko-liliya?call">Skype Intechsoft Now</a>
          </p>
          <p className="email">
            <span>
              <i className="fa fa-envelope" /> email :
            </span>
            <a href="mailto:cmo@intechsoft.net"> cmo@intechsoft.net</a>
          </p>
          <p className="phone">
            <span>
              <i className="fa fa-phone-square" /> phone :
            </span>
            <a href="tel:+380505000564"> +380505000564</a>
          </p>
        </div>
      </div>
    );
  }
}

export default HeaderTopContacts;
