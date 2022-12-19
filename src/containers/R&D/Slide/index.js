import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination";

import "./slide.css";
// import required modules

export default function Slide() {
  const swiperRef = useRef();
  return (
    <>
      <div style={{ width: "100%", display: "flex", position: "absolute" }}>
        <div style={{ width: "30%", position: "relative" }}>
          <h1 className="h">
            A framework <br />
            designed to <br />
            deliver
          </h1>
          <div className="onClickChangeSlide">
            <button
              className="button"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src="/iconback.png" width={"48px"} height={"48px"} />
            </button>
            <button
              className="button"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src="/iconnext.png" width={"48px"} height={"48px"} />
            </button>
          </div>
        </div>
        <div style={{ width: "70%", position: "relative" }}>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <div className="blockSlide">
                <a>
                  <img src="./iconclass1.png" width={"64px"} height={"64px"} />
                </a>
                <a>1</a>
              </div>
              <div className="titleSlide">REQUIREMENT ANALYSIS</div>
              <div className="content">
                <p>
                  In this early stage, we evaluate your expectations and product
                  requirements.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blockSlide">
                <a>
                  <img src="./iconclass2.png" width={"64px"} height={"64px"} />
                </a>
                <a>2</a>
              </div>
              <div className="titleSlide">PROOF OF CONCEPT</div>
              <div className="content">
                <p>
                  A short development cycle that aims to test and verify the
                  feasibility of a specific concept.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blockSlide">
                <a>
                  <img src="./iconclass3.png" width={"64px"} height={"64px"} />
                </a>
                <a>3</a>
              </div>
              <div className="titleSlide">PROTOTYPING</div>
              <div className="content">
                <p>
                  The prototyping phase aims to develop an interactive working
                  model of the end product.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blockSlide">
                <a>
                  <img src="./iconclass4.png" width={"64px"} height={"64px"} />
                </a>
                <a>4</a>
              </div>
              <div className="titleSlide">DEVELOPMENT</div>
              <div className="content">
                <p>
                  We combine the gathered requirements and know-how and start
                  the product development.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blockSlide">
                <a>
                  <img src="./iconclass5.png" width={"64px"} height={"64px"} />
                </a>
                <a>5</a>
              </div>
              <div className="titleSlide">COMMERCIALIZATION</div>
              <div className="content">
                <p>
                  We ensure that the product is ready for mass production, can
                  be easily scaled, and meet regulatory requirements.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="blockSlide">
                <a>
                  <img src="./iconclass6.png" width={"64px"} height={"64px"} />
                </a>
                <a>6</a>
              </div>
              <div className="titleSlide">PRODUCTION</div>
              <div className="content">
                <p>The product enters mass production.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
