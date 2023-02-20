import React from "react";
import Carousel from "./Carousel/Carousel";
import { v4 as uuidv4 } from "uuid";
import Card from "./Carousel/Card";
import Styles from "./styled.module.scss";
const SlideDemo = () => {
  let cards = [
    {
      key: "Bank",
      content: <Card imagen="/GhostHome/Tab_Banking_new.png" />,
    },
    {
      key: "Consulting",
      content: <Card imagen="/GhostHome/Tab_Consulting.png" />,
    },
    {
      key: "Energy",
      content: <Card imagen="/GhostHome/Tab_Energy.png" />,
    },
    {
      key: "Legal",
      content: <Card imagen="/GhostHome/Tab_Legal.png" />,
    },
    {
      key: "Pharmaceuticals",
      content: <Card imagen="/GhostHome/Tab_Pharmace.png" />,
    },
    {
      key: "Security",
      content: <Card imagen="/GhostHome/Tab_Security.png" />,
    },
  ];
  return (
    <div className={Styles.wrapper}>
      <Carousel slides={cards} />
    </div>
  );
};
export default SlideDemo;
