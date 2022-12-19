import React from "react";
import styles from "./styled.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
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
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
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
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
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
            <div className={styles.blockHeader}>Partner</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
