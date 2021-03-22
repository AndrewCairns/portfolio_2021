import React from "react";

function IndexBlock({ index, indexValue }) {
  return (
    <div className="index-block">
      <h1 className="txt--brand-secondary txt--color-tertiary txt--normal">
        {index ? index : "##"}
      </h1>
      <div className="rotation-block">
        <hr className="hr--thin" />
        <h4 className="txt--8 txt--light">
          {indexValue ? indexValue : "Section Name"}
        </h4>
      </div>
    </div>
  );
}

export default IndexBlock;
