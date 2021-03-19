import React from "react";
import { useScrollSection } from "react-scroll-section";

function VerticalNav() {
  const explore1 = useScrollSection("explore1");
  const explore2 = useScrollSection("explore2");
  const explore3 = useScrollSection("explore3");

  return (
    <nav className="verticalNav">
      <ul>
        <li
          onClick={explore1.onClick}
          className={explore1.selected ? "selected" : ""}
        ></li>
        <li
          onClick={explore2.onClick}
          className={explore2.selected ? "selected" : ""}
        ></li>
        <li
          onClick={explore3.onClick}
          className={explore3.selected ? "selected" : ""}
        ></li>
        <li
          onClick={explore3.onClick}
          className={explore3.selected ? "selected" : ""}
        ></li>
        <li
          onClick={explore3.onClick}
          className={explore3.selected ? "selected" : ""}
        ></li>
      </ul>
    </nav>
  );
}

export default VerticalNav;