import React from "react";
import { Header } from "../Header/Header";
import FlowerCard from "../FlowerCard/FlowerCard";
import rozes from "../../../image/rozes.jfif";
import tylpan from "../../../image/tulpan.jfif";
import romashki from "../../../image/romashki.webp";
import podsolnuh from "../../../image/podsolnuh.webp";
import s from "./Main.module.css";

export const Main = () => {
  const flowerData = [
    {
      image: tylpan,
      name: "Тюльпаны Микс",
      price: 4590,
    },
    {
      image: rozes,
      name: "розы",
      price: 5450,
    },
    {
      image: romashki,
      name: "ромашки",
      price: 3950,
    },
    {
      image: podsolnuh,
      name: "подсолнух в упаковке",
      price: 2550,
    },
  ];
  return (
    <>
      <Header />
      <div className={s.cards}>
        {flowerData.map((flower, index) => (
          <FlowerCard key={index} {...flower} />
        ))}
      </div>
    </>
  );
};
