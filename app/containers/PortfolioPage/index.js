/**
 * PortfolioPage
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Portfolio.scss';

/**
 * PhotoImages
 */
import emmamason from './img/emmamason.jpg';
import ashan from './img/ashan.png';
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

// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class Portfolio extends React.PureComponent {
  render() {
    return (
      <main>
        <h1 className="intro-txt">Our portfolio</h1>
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
                    view website
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
                    view website
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
                    view website
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
                    view website
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
                    view website
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={meussa} alt="" />
                <figcaption>
                  <div className="box-img meussa" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2Owe6Gv"
                  >
                    view website
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={ruselGroup} alt="" />
                <figcaption>
                  <div className="box-img rusel-group" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2F6mtJF"
                  >
                    view website
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="small-card">
              <figure>
                <img src={altnew} alt="" className="altnew-main" />
                <figcaption>
                  <div className="box-img altnew" />
                  <a
                    target="_blank"
                    className="link"
                    href="https://bit.ly/2SShq2b"
                  >
                    view website
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
                    view website
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
                    view website
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
                    view website
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
                    view website
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
                    view website
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
                    view website
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
                    view website
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
