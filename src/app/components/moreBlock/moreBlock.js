import React from "react";

function MoreBlock({ itemCount }) {
  return (
    <div className="moreBlock u-vr-top--gi">
      <h4 className="txt--8 txt--normal u-vr--sm">
        Explore more <span className="symbol">&#8594;</span>
      </h4>
      <ul className="itemBlocks">
        {[...Array(itemCount)].map((e, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
}

export default MoreBlock;
