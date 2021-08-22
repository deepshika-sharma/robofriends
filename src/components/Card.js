import React from "react";

const Card = (props) => {
  const { name, email, id } = props.robot;
  const url = `https://robohash.org/${id}?200x200`;
  return (
    <div className="tc dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5">
      <img src={url} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p className="f4 b">{email}</p>
      </div>
    </div>
  );
};

export default Card;
