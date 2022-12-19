import React, { useEffect } from "react";
import {
  Wrapper,
  ConverBackGround,
  ConverContent,
  FilterBackground,
  ConverTitle,
  ConverContentBottom,
  ContentBottom,
} from "./HomeOld.style";
import { Link } from "react-router-dom";

const HomeOld = () => {
  useEffect(() => {
    setTimeout(
      () =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        }),
      0
    );
  }, []);
  return (
    <Wrapper>
      <ConverBackGround>
        <img
          src={"./BackGround.webp"}
          alt="BackGround"
          width={"100%"}
          height={"100%"}
        />
        <ConverContent>
          <ConverTitle>
            <p>SECURED ANONYMITY</p>
            <span>
              TRUSTED BY TOP FIRMS <br /> AROUND THE WORLD.
            </span>
            <a href="">
              Built from the ground up and designed <br /> for maximum security.
            </a>
          </ConverTitle>
          {window.innerWidth >= 1200 ? (
            <>
              <img
                src={"./child.png"}
                alt="child"
                style={{ position: "absolute", right: "25vh", bottom: "17vh" }}
              />
              <img
                src={"./child1.png"}
                alt="child1"
                style={{ position: "absolute", left: "20vh", bottom: "40vh" }}
              />
            </>
          ) : null}
        </ConverContent>
      </ConverBackGround>
      <FilterBackground></FilterBackground>
      <ConverContentBottom>
        {window.innerWidth >= 1200 ? (
          <>
            <img
              src={"./Child3.png"}
              alt="child3"
              style={{ right: "7rem", bottom: "13rem", position: "absolute" }}
            />
            <img
              src={"./Child4.png"}
              alt="child4"
              style={{
                right: "10rem",
                bottom: "12.5rem",
                position: "absolute",
              }}
            />
            <img
              src={"./Child5.png"}
              alt="child5"
              style={{ left: "6rem", top: "3rem", position: "absolute" }}
            />
            <img
              src={"./Child6.png"}
              alt="child6"
              style={{ right: "7rem", top: "3rem", position: "absolute" }}
            />
            <img
              src={"./Child7.png"}
              alt="child7"
              style={{ left: "7rem", bottom: "13rem", position: "absolute" }}
            />
            <img
              src={"./Child2.png"}
              alt="child2"
              style={{ right: "17rem", top: "17rem", position: "absolute" }}
            />
          </>
        ) : null}

        <ContentBottom>
          <p>Our Objective is Privacy & Security</p>
          <a>
            The Agency elevates our clients to the most advanced mobile
            operating system in the world. Our <br />
            GhostOS, built for privacy and security, includes a full suite of
            secure applications that ensure user
            <br />
            personal privacy and professional security by protecting against
            cyber threats and third-party eavesdropping.
          </a>
          <Link to="/ghost-stack">
            <span>
              Our Technology <img src="IconArrow.png" alt="IconArrow" />
            </span>
          </Link>
        </ContentBottom>
      </ConverContentBottom>
    </Wrapper>
  );
};

export default HomeOld;
