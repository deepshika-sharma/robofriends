import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid deeppink",
        // borderColor: "deeppink"
        height: "500px",
        width: "80%",
        margin: "0 auto",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
