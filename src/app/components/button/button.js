import React from "react";

function Button({ content, symbol }) {
  return (
    <>
      <button className="btn">
        {content}
        {symbol ? <span className="symbol">{symbol}</span> : ""}
      </button>
    </>
  );
}

export default Button;
