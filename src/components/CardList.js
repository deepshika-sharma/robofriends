import Card from "./Card";
import React from "react";
// import Input from "./Input";

const CardList = (props) => {
  return (
    <div className="flex justify-center flex-wrap">
      {props.robots.map((robo) => {
        return <Card key={robo.id} robot={robo} />;
      })}
    </div>
  );
};

export default CardList;
