import React from "react";
import { useScrollSection } from "react-scroll-section";

function VerticalNav() {
  const intro = useScrollSection("intro-Section");
  const engineer = useScrollSection("engineer-Section");
  const explore = useScrollSection("explore-Section");
  const explore3 = useScrollSection("explore3");

  return (
    <nav className="verticalNav">
      <ul>
        <li
          onClick={intro.onClick}
          className={intro.selected ? "selected" : ""}
        ></li>
        <li
          onClick={engineer.onClick}
          className={engineer.selected ? "selected" : ""}
        ></li>
        <li
          onClick={explore.onClick}
          className={explore.selected ? "selected" : ""}
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
