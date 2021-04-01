import React, { useState, useEffect } from "react";
import PropTypes, { func } from "prop-types";
import generateID from "../../utilities/generateID/generateID";
import AccordionItem from "./components/accordionItem";
import { AccordionToggleContext } from "../accordion/accordionContext";

const accordionPropTypes = {
  className: PropTypes.string,
  collapseOthers: PropTypes.bool,
  triggerRight: PropTypes.bool,
  isHeaderTrigger: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  id: PropTypes.string,
  varient: PropTypes.string,
};

const accordionDefaultProps = {
  className: "",
  collapseOthers: false,
  triggerRight: false,
  isHeaderTrigger: false,
  children: <></>,
  id: "",
  varient: "white",
};

function toggleAccordion(activeStates, collapseOthers, i, setActiveStates) {
  return function () {
    let activeStatesArray = [...activeStates];
    const index = activeStatesArray.indexOf(i);

    if (collapseOthers) {
      if (activeStatesArray[0] === i) {
        activeStatesArray = [];
      } else {
        activeStatesArray = [i];
      }
    }

    if (!collapseOthers && index > -1) {
      activeStatesArray.splice(index, 1);
    }

    if (!collapseOthers && index < 0) {
      activeStatesArray.push(i);
    }

    setActiveStates(activeStatesArray);
  };
}

const Accordion = ({
  className,
  collapseOthers,
  triggerRight,
  isHeaderTrigger,
  children,
  id,
  varient,
  ...other
}) => {
  const [activeStates, setActiveStates] = useState([]);
  const useID = id && id !== "" ? id : generateID("accordion_");

  useEffect(() => {
    const activeStatesArray = [];
    React.Children.forEach(children, (child, i) => {
      if (child.props.isActive) {
        activeStatesArray.push(i);
      }
    });

    setActiveStates(activeStatesArray);
  }, []);

  const childrenWithProps = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      childIndex: i,
      parentId: useID,
      toggleAccordion: toggleAccordion(
        activeStates,
        collapseOthers,
        i,
        setActiveStates
      ),
      isHeaderTrigger,
      triggerRight,
      varient,
    });
  });

  return (
    <AccordionToggleContext.Provider value={activeStates}>
      <div
        id={useID}
        className={`c-accordion ${className}`}
        role="tablist"
        aria-multiselectable="true"
        {...other}
      >
        {childrenWithProps}
      </div>
    </AccordionToggleContext.Provider>
  );
};

Accordion.propTypes = accordionPropTypes;
Accordion.defaultProps = accordionDefaultProps;

Accordion.Item = AccordionItem;

export default Accordion;
