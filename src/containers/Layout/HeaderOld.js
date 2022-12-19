/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Slide.css';

import { Container } from '../../theme/commonStyle';
import { HeaderWrapper, LeftWrapper, Navigation } from './Layout.style';

const HeaderOld = () => {
  const [isActive, setActive] = useState(null);
  const ClickMenu = () => {
    isActive ? setActive(false) : setActive(true);
  };

  const CloseMenu = () => {
    setActive(null);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <LeftWrapper>
            <a href="/home">
              <img src="./LogoGhost.png" width={'100px'} height="auto" />
              {window.innerWidth >= 800 ? (
                <>
                  <span>GHOST</span>
                </>
              ) : null}
            </a>
          </LeftWrapper>
          <div class="nav">
            <button
              class={
                isActive == null || !isActive ? 'btn-nav' : 'btn-nav animated'
              }
              onClick={ClickMenu}
            >
              <span class="icon-bar top"></span>
              <span class="icon-bar middle"></span>
              <span class="icon-bar bottom"></span>
            </button>
          </div>
          <div
            class={
              isActive == null
                ? 'hidden'
                : !isActive
                ? 'nav-content hideNav'
                : 'showNav nav-content'
            }
          >
            <ul class="nav-list" onClick={() => CloseMenu()}>
              <li class="nav-item">
                <Link to="/home">
                  <span class="item-anchor">Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/the-agency">
                  <span class="item-anchor">The Agency</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Legal">
                  <span class="item-anchor">Legal</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/ghost-stack">
                  <span class="item-anchor">GHOST Stack</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact">
                  <span class="item-anchor">Contact</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/career">
                  <span class="item-anchor">Career</span>
                </Link>
              </li>
            </ul>
            <div class="line-betwen"></div>
          </div>
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
};

export default HeaderOld;
