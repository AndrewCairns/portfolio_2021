import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import generateID from "../../../utilities/generateID/generateID";
import { AccordionToggleContext } from "../../accordion/accordionContext";
import { ReactComponent as Chevron } from "../../../../assets/images/chevron-down.svg";

const accordionItemPropTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  toggleAccordion: PropTypes.func,
  headerTitle: PropTypes.string,
  headerSubTitle: PropTypes.string,
  headerTitleHighlight: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  triggerRight: PropTypes.bool,
  onClickTrigger: PropTypes.func,
  children: PropTypes.node,
  parentId: PropTypes.string,
  childIndex: PropTypes.number,
};

/**
 * @property accordionItem.defaultProps
 * @type {Object}
 * @static
 */

const accordionItemDefualtProps = {
  className: "",
  isActive: false,
  toggleAccordion: () => {},
  headerTitle: null,
  headerSubTitle: null,
  headerTitleHighlight: null,
  onOpen() {},
  onClose() {},
  triggerRight: false,
  onClickTrigger: null,
  children: <></>,
  parentId: "",
  childIndex: 0,
};

const AccordionItem = ({
  className,
  isActive,
  toggleAccordion,
  headerTitle,
  headerSubTitle,
  headerTitleHighlight,
  onOpen,
  onClose,
  triggerRight,
  onClickTrigger,
  children,
  parentId,
  childIndex,
  ...other
}) => {
  const headingId = generateID(parentId + "_heading_");
  const bodyId = generateID(parentId + "_panel_");
  const activeStates = useContext(AccordionToggleContext);
  const active = activeStates ? activeStates.indexOf(childIndex) > -1 : 0;

  useEffect(() => {
    toggleAccordion(childIndex);
  }, []);

  useEffect(() => {
    toggleAccordion(childIndex);

    if (!isActive) {
      onClose();
    } else {
      onOpen();
    }
  }, [isActive]);

  useEffect(() => {
    if (!active) {
      onClose();
    } else {
      onOpen();
    }
  }, [active]);

  const onClick = (e) => {
    if (onClickTrigger) {
      onClickTrigger(e, bodyId, active);
      return;
    }
    toggleAccordion(childIndex);
  };

  const activeClass = active ? "is-active" : "";

  return (
    <div
      className={`c-accordion__section ${activeClass} ${className}`}
      role="tab"
      {...other}
    >
      {createHeader({
        onClick,
        bodyId,
        active,
        headingId,
        headerTitle,
        headerSubTitle,
        headerTitleHighlight,
        accordionItemDefualtProps,
        triggerRight,
      })}
      <div
        id={bodyId}
        className="c-accordion__outer-bd"
        role="tabpanel"
        aria-labelledby={headingId}
      >
        <div className="c-accordion__bd">
          <div className="c-accordion__inner-bd">{children}</div>
        </div>
      </div>
    </div>
  );
};

function createChevron() {
  return (
    <div className="c-accordion__hd-icon">
      <Chevron />
    </div>
  );
}

function renderHeaderContent(headerOptions) {
  const { headerTitle, headerSubTitle, headerTitleHighlight } = headerOptions;
  return (
    <div className="c-accordion__hdcontent">
      {headerTitle && (
        <div className="c-accordion__hd-title">
          {headerTitleHighlight && (
            <span className="txt--12 txt--black">{headerTitleHighlight}</span>
          )}
          <span className="txt--10"> / {headerTitle}</span>
        </div>
      )}
      {headerSubTitle && (
        <span className="c-accordion__hd-subtitle txt--10">
          {headerSubTitle}
        </span>
      )}
    </div>
  );
}

function createHeader(headerOptions) {
  const { triggerRight } = headerOptions;
  const chevron = createChevron();

  return (
    <div
      className={`c-accordion__hd ${
        triggerRight ? "c-accordion__hd--right" : ""
      }`}
    >
      <div className="c-accordion__hdbody">
        {renderTrigger(chevron, headerOptions)}
        {renderHeaderContent(headerOptions)}
      </div>
    </div>
  );
}

function renderTrigger(chevron, headerOptions) {
  const { onClick } = headerOptions;

  return (
    <button
      className="c-accordion__button c-accordion__button--istrigger"
      onClick={onClick}
    >
      {chevron}
    </button>
  );
}

AccordionItem.propTypes = accordionItemPropTypes;
AccordionItem.defaultProps = accordionItemDefualtProps;

export default AccordionItem;
