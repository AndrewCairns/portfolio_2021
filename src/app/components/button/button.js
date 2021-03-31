import React from "react";

function Button({ content, symbol, varient }) {
  return (
    <>
      <button className={"btn " + varient}>
        {content}
        {symbol ? <span className="symbol">{symbol}</span> : ""}
      </button>
    </>
  );
}

export default Button;
