import React from "react";
import Carousel from "./Carousel/Carousel";
import { v4 as uuidv4 } from "uuid";
import Card from "./Carousel/Card";
import Styles from "./styled.module.scss";
const SlideDemo = () => {
  let cards = [
    {
      key: "Bank",
      content: <Card imagen="/Tab_Banking.png" />,
    },
    {
      key: "Consulting",
      content: <Card imagen="/Tab_Banking.png" />,
    },
    {
      key: "Energy",
      content: <Card imagen="/Tab_Banking.png" />,
    },
    {
      key: "Legal",
      content: <Card imagen="/Tab_Banking.png" />,
    },
    {
      key: "Pharmaceuticals",
      content: <Card imagen="/Tab_Banking.png" />,
    },
    {
      key: "Security",
      content: <Card imagen="/Tab_Banking.png" />,
    },
  ];
  return (
    <div className={Styles.wrapper}>
      <Carousel slides={cards} />
    </div>
  );
};
export default SlideDemo;
