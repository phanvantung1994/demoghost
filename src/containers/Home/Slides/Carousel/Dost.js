import React, { useEffect } from "react";
import Styles from "./style.module.scss";

export default function Dots({ slides = [], currentSlide = 0, goToSlide }) {
  return (
    <div className={Styles.converDot}>
      <hr />
      <div className={Styles.dots}>
        {slides.length &&
          slides.map((s, i) => {
            return (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                className={`${Styles.dot} ${
                  i === currentSlide ? Styles.active : ""
                }`}
              >
                {s.key}
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
}
