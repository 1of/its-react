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
import messages from './messages';
import './CareerPage.scss';

import bannerImage from './vacansy.jpg';
const H2extended = styled(H2)`
  padding: 50px 0;
`;

/* eslint-disable react/prefer-stateless-function */
export default class CareerPage extends React.PureComponent {
  render() {
    return (
      <main>
        <PageBanner
          bannerImage={bannerImage}
          bannerText={<FormattedMessage {...messages.join_our_team} />}
        />
        <Wrapper>
          <H2extended>HOT VACANCIES</H2extended>
        </Wrapper>
        <section>
          <div className="services-block">
            <Wrapper>
              <ul className="vacansy-items-wrap wrapper">
                <li>
                  <div className="vacansy-header">
                    <span className="vacansy-photo item1" />
                    <span className="vacansy-name">
                      Full-Stack .Net Software Engineer (BMW)
                    </span>
                  </div>
                  <div className="vacansy-description">
                    <input type="checkbox" id="hd-1" className="hide" />
                    <label htmlFor="hd-1">
                      Ability to analyze complex processes and solve problems.
                      Software architecture and modeling skills (UML). Good
                      communication skills. Speaking level of English.
                    </label>
                    <div className="vacansy-inner">
                      At least 2 years’ experience in <br />— Visual Studio.
                      <br />— C#.
                      <br />
                      <br />
                      At least 1 year experience in
                      <br />— Oracle or MS-SQL Server, including stored
                      procedure programming.
                      <br />— JavaScript.
                      <br />— AngularJS or Angular 2-5 version.
                      <br />— ASP.NET MVC.
                      <br />
                      <br />
                      Good understanding of:
                      <br />— Data structures and algorithms (algorithms
                      complexity).
                      <br />— Design patterns.
                      <br />— SOLID.
                      <br />
                      <br />
                      Ability to analyze complex processes and solve problems.
                      <br />
                      Software architecture and modeling skills (UML).
                      <br />
                      Good communication skills.
                      <br />
                      Speaking level of English.
                      <br />
                      <br />
                      Will be a plus
                      <br />
                      Experience with:
                      <br />— Typescript.
                      <br />— WEB-API /Linq, Entity Framework.
                      <br />— ASP.NET WebhtmlForms.
                      <br />— Team Foundation Server.
                      <br />— Testing frameworks, Selenium.
                      <br />— Documentation and project management tools.
                      <br />
                      SCRUM (Agile) experience.
                      <br />
                      <input type="checkbox" id="hd-1" className="hide" />
                      <label htmlFor="hd-1">
                        <i className="fa fa-close" />
                      </label>
                    </div>
                  </div>
                  <a
                    href="https://jobs.dou.ua/companies/intechsoft/vacancies/66270/"
                    target="_blank"
                  >
                    Apply
                  </a>
                </li>
                <li>
                  <div className="vacansy-header">
                    <span className="vacansy-photo item2" />
                    <span className="vacansy-name">
                      Java EE Software Developer (BMW)
                    </span>
                  </div>
                  <div className="vacansy-description">
                    <input type="checkbox" id="hd-2" className="hide" />
                    <label htmlFor="hd-2">
                      InTechSoft company are ooking htmlFor Java EE Software
                      Engineer. Applicationselated to BMW car security:
                      keyanagement, encryption, signing, etc. related to BMW
                      car-integrated devices and connected...
                    </label>
                    <div className="vacansy-inner">
                      Experience in: <br />• Java <br />• JDBC <br />•
                      JavaScript <br />• HTML <br />• CSS <br /> <br />
                      Experience in: <br />• Java EE (JPA, JAX-RS, JMS, EJB,
                      JAAF) <br />• Oracle, MS-SQL Server or PostgreSQL,
                      including stored procedure programming <br />
                      <br />
                      Good understanding of: <br />• Data structures and
                      algorithms (algorithms complexity) <br />• Design patterns{' '}
                      <br />
                      <br />
                      Languages: <br />• Intermediate English+ <br />
                      <br />
                      Soft skills: <br />• Ability to analyze complex processes
                      and solve problems <br />• Software architecture and
                      modelling skills (UML) <br />• Basic knowledge of agile
                      development principles <br />• Good communication skills{' '}
                      <br />
                      <br />
                      Education: <br />• Bachelor’s degree in InhtmlFormatics or
                      similar <br />
                      <input type="checkbox" id="hd-2" className="hide" />
                      <label htmlFor="hd-2">
                        <i className="fa fa-close" />
                      </label>
                    </div>
                  </div>
                  <a
                    href="https://jobs.dou.ua/companies/intechsoft/vacancies/75629/"
                    target="_blank"
                  >
                    Apply
                  </a>
                </li>
                <li>
                  <div className="vacansy-header">
                    <span className="vacansy-photo item3" />
                    <span className="vacansy-name">
                      PHP/Magento Backend Developer
                    </span>
                  </div>
                  <div className="vacansy-description">
                    <input type="checkbox" id="hd-3" className="hide" />
                    <label htmlFor="hd-3">
                      InTechSoft company are looking htmlFor Middle PHP/Magento
                      2 Developer to join our team on full-time basis in Kharkiv
                      office. You will be part of a high-perhtmlFormance feature
                      driven development team responsible htmlFor building
                      complex ecommerce solutions.
                    </label>
                    <div className="vacansy-inner">
                      <p>Requirements skills</p>— Magento backend experience (1+
                      years). <br />— Excellent knowledge in PHP, MySQL.
                      <br />— At least 1 finished project on Magento 2.
                      <br />— Confident knowledge of CMS functional.
                      <br />— Pre-Intermediate+ level of English.
                      <br />— Experience in Git.
                      <br />— Familiarity with Agile/Scrum.
                      <br />
                      <br />
                      Will be a plus:
                      <br />— Mid-level JavaScript knowledge.
                      <br />— Magento Certified.
                      <br />— Understanding of (X)HTML, W3C standards, CSS, DOM
                      events.
                      <br />
                      <br />
                      We offer:
                      <br />— Competitive salary.
                      <br />— Excellent conditions htmlFor long-term
                      cooperation.
                      <br />— A cozy office in the heart of the city.
                      <br />— Experienced colleagues.
                      <br />— Nontrivial tasks, htmlForeign projects.
                      <br />— Possibility of professional grown.
                      <br />— English speaking club, and other educational
                      activities.
                      <br />— Delicious coffee / tea / biscuits / fruit / milk
                      in in the office.
                      <br />
                      <input type="checkbox" id="hd-3" className="hide" />
                      <label htmlFor="hd-3">
                        <i className="fa fa-close" />
                      </label>
                    </div>
                  </div>
                  <a
                    href="https://jobs.dou.ua/companies/intechsoft/vacancies/28823/"
                    target="_blank"
                  >
                    Apply
                  </a>
                </li>
                <li>
                  <div className="vacansy-header">
                    <span className="vacansy-photo item3" />
                    <span className="vacansy-name">
                      Junior Magento Developer
                    </span>
                  </div>
                  <div className="vacansy-description">
                    <input type="checkbox" id="hd-4" className="hide" />
                    <label htmlFor="hd-4">
                      Must have experience: Working experience: at least 1 year
                      Experience in developing ecommerce solutions with Magento
                      Programming Languages: PHP, JavaScript basic knowledge:
                      HTML5, CSS3... Version Control Systems: Git
                    </label>
                    <div className="vacansy-inner">
                      Must have experience: Working experience: at least 1 year
                      Experience in developing ecommerce solutions with Magento
                      Programming Languages: PHP, JavaScript basic knowledge:
                      HTML5, CSS3... Version Control Systems: Git
                      <input type="checkbox" id="hd-4" className="hide" />
                      <label htmlFor="hd-4">
                        <i className="fa fa-close" />
                      </label>
                    </div>
                  </div>
                  <a href="https://jobs.dou.ua/companies/intechsoft/vacancies/66270/">
                    Apply
                  </a>
                </li>
                <li>
                  <div className="vacansy-header">
                    <span className="vacansy-photo " />
                    <span className="vacansy-name"> </span>
                  </div>
                  <div className="vacansy-description">
                    <input type="checkbox" id="hd-5" className="hide" />
                    <label htmlFor="hd-5"> </label>
                    <p className="temporary-text">Coming soon</p>
                    <div className="vacansy-inner">
                      <input type="checkbox" id="hd-5" className="hide" />
                      <label htmlFor="hd-5">
                        <i className="fa fa-close" />
                      </label>
                    </div>
                  </div>
                  {/* <!-- <a href="#">Apply</a>--> */}
                </li>
                <li>
                  <div className="vacansy-header">
                    <span className="vacansy-photo " />
                    <span className="vacansy-name" />
                  </div>
                  <div className="vacansy-description">
                    <input type="checkbox" id="hd-6" className="hide" />
                    <label htmlFor="hd-6"> </label>
                    <p className="temporary-text">Coming soon</p>
                    <div className="vacansy-inner">
                      <input type="checkbox" id="hd-6" className="hide" />
                      <label htmlFor="hd-6">
                        <i className="fa fa-close" />
                      </label>
                    </div>
                  </div>
                  {/* <!-- <a href="#">Apply</a> --> */}
                </li>
              </ul>
            </Wrapper>
          </div>
        </section>
      </main>
    );
  }
}
