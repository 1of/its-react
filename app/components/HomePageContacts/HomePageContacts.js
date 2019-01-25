import React from 'react';

import './HomePageContacts.scss';

/* eslint-disable react/prefer-stateless-function */
class HomePageContacts extends React.Component {
  render() {
    return (
      <div className="contact-item-wrap">
        <section>
          <span className="contact-imgs bg-email" />
          <div className="text-wrap">
            <span>Email</span>
            <span>
              <a href="mailto:cmo@intechsoft.net">cmo@intechsoft.net</a>
            </span>
          </div>
        </section>
        <section>
          <span className="contact-imgs bg-skype" />
          <div className="text-wrap">
            <span>Skype</span>
            <span>
              <a href="skype:vladimir-mvm?chat">vladimir-mvm</a>
            </span>
          </div>
        </section>
        <section>
          <span className="contact-imgs bg-resume" />
          <div className="text-wrap">
            <span>Career</span>
            <span>
              <a href="mailto:hr@intechsoft.net">hr@intechsoft.net</a>
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePageContacts;
