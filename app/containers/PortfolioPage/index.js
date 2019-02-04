/**
 * PortfolioPage
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import H2 from 'components/H2';
import Wrapper from 'components/Wrapper';
import './Portfolio.scss';

/**
 * PhotoImages
 */
import emmamason from './img/emmamason.jpg';
import ashan from './img/ashan.jpg';
import fairAudio from './img/fair-audio.jpg';
import mossBros from './img/moss-bros.jpg';
import alamar from './img/alamar.jpg';
import meussa from './img/meussa.jpg';
import ruselGroup from './img/rusel-group.jpg';
import altnew from './img/altnew.png';
import dfstore from './img/df-store.jpg';
import theo from './img/theo.jpg';
import maison from './img/maison.png';
import carvalho from './img/carvalho.jpg';
import formycon from './img/formycon.jpg';
import lousse from './img/lousse.png';
import ajour from './img/ajour.jpg';

import messages from './messages';

const H2extendet = styled(H2)`
  padding: 50px 0;
`;

/* eslint-disable react/prefer-stateless-function */
export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <main>
        <Wrapper>
          <H2extendet>
            <FormattedMessage {...messages.our_portfolio} />
          </H2extendet>
        </Wrapper>
        <section className="main-content">
          <div className="column-1">
            <div className="small-card">
              <figure>
                <img src={emmamason} alt="" />
                <figcaption>
                  <div className="box-img emmamason" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2yVlYwC"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={ashan} alt="" />
                <figcaption>
                  <div className="box-img ashan" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2qvLrb0"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={fairAudio} alt="" />
                <figcaption>
                  <div className="box-img fair-audio" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2SQiUdc"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={mossBros} alt="" />
                <figcaption>
                  <div className="box-img moss-bros" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2L7aDxc"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="big-card">
              <figure>
                <img src={alamar} alt="" />
                <figcaption>
                  <div className="box-img alamar" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2ARL54D"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={meussa} alt="meussa" />
                <figcaption>
                  <div className="box-img meussa" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2Owe6Gv"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={ruselGroup} alt="rusel" />
                <figcaption>
                  <div className="box-img rusel-group" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2F6mtJF"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={altnew} alt="altnew" className="altnew-main" />
                <figcaption>
                  <div className="box-img altnew" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2SShq2b"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={theo} alt="" />
                <figcaption>
                  <div className="box-img theo" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2qxfpvn"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="column-2">
            <div className="big-card">
              <figure>
                <img src={dfstore} alt="" />
                <figcaption>
                  <div className="box-img df-store" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2STwWe5"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={maison} alt="" />
                <figcaption>
                  <div className="box-img maison" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2F6mAVB"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={carvalho} alt="" />
                <figcaption>
                  <div className="box-img carvalho" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2PNeN2Y"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={formycon} alt="" />
                <figcaption>
                  <div className="box-img formycon" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2SQguvf"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={lousse} alt="" />
                <figcaption>
                  <div className="box-img lousse" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2PfuJeX"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="big-card">
              <figure>
                <img src={ajour} alt="" />
                <figcaption>
                  <div className="box-img ajour" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2JKzWFI"
                  >
                    <FormattedMessage {...messages.view_website} />
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
