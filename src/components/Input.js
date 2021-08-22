import React from "react";
// import CardList from "./CardList";

const Input = (props) => {
  // console.log(props);
  return (
    <div className="pa2">
      <input
        type="text"
        className="pa3 ba bg-lightest-blue tc br2 b--pink"
        placeholder="Search Robots..."
        htmlFor="robots"
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
