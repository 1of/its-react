import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookLogo from './social_03.png';
import DouLogo from './social_05.png';
import LinkedinLogo from './social_07.png';
import TelegramLogo from './social_09.png';
import InstagramLogo from './social_11.png';
import FooterLogo from './logo_bigger.png';
import './Footer.scss';
/* eslint-disable react/prefer-stateless-function */
const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer commonStyle">
        <div className="wrapper footer-logo-wrap">
          <NavLink to="/" onClick={scroll}>
            <img src={FooterLogo} alt="Intechsoft" />
          </NavLink>
          <div className="social-link">
            <a
              target="_blank"
              href="https://www.facebook.com/Intechsoft.net/"
              className="facebook"
            >
              <div>
                <img src={FacebookLogo} alt="facebook" />
              </div>
            </a>
            <a
              target="_blank"
              href="http://jobs.dou.ua/companies/intechsoft/"
              className="dou"
            >
              <div>
                <img src={DouLogo} alt="dou" />
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/intechsoft"
              className="linkedin"
            >
              <div>
                <img src={LinkedinLogo} alt="linkedin" />
              </div>
            </a>
            <a target="_blank" href="https://t.me/Intechsoft" className="dou">
              <div>
                <img src={TelegramLogo} alt="" />
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/intechsoft_co/"
              className="instagram"
            >
              <div>
                <img src={InstagramLogo} alt="instagram" />
              </div>
            </a>
          </div>
        </div>
        <div className="back-btn" id="topBtn">
          <i className="fa fa-angle-up" />
        </div>
      </footer>
    );
  }
}

export default Footer;
