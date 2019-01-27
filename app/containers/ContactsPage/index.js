/**
 * Page
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import PageBanner from 'components/PageBanner/PageBanner';
import Wrapper from 'components/Wrapper';
import H2 from 'components/H2';

import messages from 'components/Header/messages';
import bannerImage from './contact_us.png';
import './ContactsPage.scss';

const H2extended = styled(H2)`
  padding: 50px 0;
`;

/* eslint-disable react/prefer-stateless-function */
export default class ContactsPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.contacts} />}
        />
        <Wrapper>
          <H2extended>COME TO OUR OFFICE</H2extended>
          <div className="address-wrap commonStyle wrapper">
            <div className="addresses">
              <section>
                <h1 className="visuallyHidden">kharkiv address</h1>
                <p>Kharkiv, Ukraine, 61051,</p>
                <p>Koneva Street, 4</p>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                  src="https://www.google.com/maps?q=ул.+Конева,+4,+Харьков,+Харьковская+область,+61000&output=embed"
                  height="450"
                  title="Ukraine"
                />
              </section>
              <section>
                <h1 className="visuallyHidden">praha address</h1>
                <p>Praha 8, Czech Republic, 18000, </p>
                <p>NA ZERTVACH 2230/44</p>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */
                /* eslint-disable-next-line prettier/prettier */}
                <iframe title="Czech Republic" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.9942829048455!2d14.476840815718909!3d50.10511397942913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470becaccd50bd99%3A0x5d76ee047cf1048!2zTmEgxb1lcnR2w6FjaCAyMjMwLzQ0LCAxODAgMDAgUHJhaGEgOC1MaWJlxYgsINCn0LXRhdC40Y8!5e0!3m2!1sru!2sua!4v1541145191061" height="450" allowFullScreen></iframe>
              </section>
            </div>
          </div>
          <div className="emails-wrap commonStyle wrapper">
            <H2extended className="centered-txt">Send an email</H2extended>
            <div className="sending-email-wrap">
              <section>
                <p>
                  business department
                  <span>cmo@intechsoft.net</span>
                </p>
                <p>
                  hr department
                  <span>hr@intechsoft.net</span>
                </p>
              </section>
              <section>
                <form action="" className="main-form" id="contact-form">
                  <div className="form-control">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      size="30"
                      required
                    />
                  </div>
                  <textarea
                    id="msg"
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                  />
                  <p id="warning" />
                  <input type="submit" id="send-contact-btn" value="send" />
                </form>
              </section>
            </div>
          </div>
        </Wrapper>
      </main>
    );
  }
}
