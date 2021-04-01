import React from "react";
import { useScrollSection } from "react-scroll-section";

function VerticalNav() {
  const intro = useScrollSection("intro-Section");
  const engineer = useScrollSection("engineer-Section");
  const explore = useScrollSection("explore-Section");
  const experiment = useScrollSection("experiment-Section");
  const experience = useScrollSection("experience-Section");

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
          onClick={experiment.onClick}
          className={experiment.selected ? "selected" : ""}
        ></li>
        <li
          onClick={experience.onClick}
          className={experience.selected ? "selected" : ""}
        ></li>
      </ul>
    </nav>
  );
}

export default VerticalNav;
