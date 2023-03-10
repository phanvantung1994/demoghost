import React, { useState } from "react";
import styles from "./styled.module.scss";
import { Link } from "react-router-dom";
import "../Slide.css";

const Header = () => {
  const [isActive, setActive] = useState(null);
  const ClickMenu = () => {
    isActive ? setActive(false) : setActive(true);
  };

  const CloseMenu = () => {
    setActive(null);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.blockLogo}>
          <a href="/home">
            <img src="./LogoIcon.png" width={"74px"} height={"auto"} />
            <img
              src="./GHOST.png"
              width={"80px"}
              height={"auto"}
              style={{ marginLeft: "20px" }}
            />
          </a>
        </div>
        <div className={styles.blockItemHeader}>
          {/* Block child */}
          <div className={styles.dropdown}>
            <div className={styles.blockHeader}>
              About <img src="./dropdown.png" />
            </div>
            <div className={styles.dropdownContent}>
              <a href="/about-company">Company</a>
              <a href="/about-career">Career</a>
              <a href="/about-contact">Contact</a>
            </div>
          </div>
        </div>
        <div className={styles.blockItemHeader}>
          {/* Block child */}
          <div className={styles.dropdown}>
            <div className={styles.blockHeader}>
              Technology{" "}
              <span className={styles.arrow180}>
                <img src="./dropdown.png" />
              </span>
            </div>
            <div className={styles.dropdownContent}>
              <Link to="/encryption">Encryption</Link>
              <a href="/ghost-mess">GHOST Mess</a>
              <a href="/ghost-os">GHOST OS</a>
            </div>
          </div>
        </div>
        <div className={styles.blockItemHeader}>
          {/* Block child */}
          <div className={styles.dropdown}>
            <Link to="/a-and-d">
              <div className={styles.blockHeader}>R&D</div>
            </Link>
          </div>
        </div>
        <div className={styles.blockItemHeader}>
          {/* Block child */}
          <div className={styles.dropdown}>
            <Link to="/partner">
              <div className={styles.blockHeader}>Partner</div>
            </Link>
          </div>
        </div>
        <div class="nav">
          <button
            class={
              isActive == null || !isActive ? "btn-nav" : "btn-nav animated"
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
              ? "hidden"
              : !isActive
              ? "nav-content hideNav"
              : "showNav nav-content"
          }
        >
          <ul class="nav-list" onClick={() => CloseMenu()}>
            <li class="nav-item">
              <Link to="/home">
                <span class="item-anchor">Home</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about-company">
                <span class="item-anchor">Company</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about-career">
                <span class="item-anchor">Career</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about-contact">
                <span class="item-anchor">Contact</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/encryption">
                <span class="item-anchor">Encryption</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/ghost-mess">
                <span class="item-anchor">GHOST Messenger</span>
              </Link>
            </li>{" "}
            <li class="nav-item">
              <Link to="/ghost-os">
                <span class="item-anchor">GHOST OS</span>
              </Link>
            </li>{" "}
            <li class="nav-item">
              <Link to="/a-and-d">
                <span class="item-anchor">R&D</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/partner">
                <span class="item-anchor">Partner</span>
              </Link>
            </li>
          </ul>
          <div class="line-betwen"></div>
        </div>
      </div>
    </>
  );
};
export default Header;
