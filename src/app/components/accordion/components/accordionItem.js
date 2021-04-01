import React, { useEffect, useContext } from "react";
import PropTypes, { bool } from "prop-types";
import Button from "../../button/button";
import generateID from "../../../utilities/generateID/generateID";
import { AccordionToggleContext } from "../../accordion/accordionContext";
import { createVertexShader } from "@tensorflow/tfjs-backend-webgl/dist/gpgpu_util";
import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";

/**
 * @property accordionItem.propTypes
 * @type {Object}
 * @static
 */

const accordionItemPropTypes = {
  className: PropTypes.string,
  isActive: PropTypes.bool,
  isHeaderTrigger: PropTypes.bool,
  toggleAccordion: PropTypes.func,
  headerChildren: PropTypes.node,
  headerTitle: PropTypes.string,
  headerSubTitle: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  triggerRight: PropTypes.bool,
  triggerTop: PropTypes.bool,
  triggerText: PropTypes.string,
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
  isHeaderTrigger: false,
  toggleAccordion: () => {},
  headerChildren: null,
  headerTitle: null,
  headerSubTitle: null,
  onOpen() {},
  onClose() {},
  triggerRight: false,
  triggerTop: false,
  triggerText: null,
  onClickTrigger: null,
  children: <></>,
  parentId: "",
  childIndex: 0,
};

const AccordionItem = ({
  className,
  isActive,
  isHeaderTrigger,
  toggleAccordion,
  headerChildren,
  headerTitle,
  headerSubTitle,
  onOpen,
  onClose,
  triggerRight,
  triggerTop,
  triggerText,
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
        triggerTop,
        triggerRight,
        triggerText,
        isHeaderTrigger,
        headerChildren,
      })}
      <div id={bodyId} role="tabpanel" aria-labelledby={headingId}>
        {active && (
          <div className="c-accordion__bd">
            <div className="c-accordion__inner-bd">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

function createChevron(triggerText) {
  return triggerText ? (
    <span className="c-accordion__triggertext">{triggerText}</span>
  ) : (
    <div className="c-accordion__hd-icon">
      <Logo />
    </div>
  );
}

function renderHeaderContent(headerOptions) {
  const { headerTitle, headerSubTitle, headerChildren } = headerOptions;
  return (
    <div className="c-accordion__hdcontent">
      <div>
        {headerTitle && (
          <div className="c-accordion__hd-title">
            <span>{headerTitle}</span>
          </div>
        )}
        {headerSubTitle && (
          <span className="c-accordion__hd-subtitle">{headerSubTitle}</span>
        )}
      </div>
      {headerChildren && (
        <div className="c-accordion__hd-children">{headerChildren}</div>
      )}
    </div>
  );
}

function createHeader(headerOptions) {
  const {
    active,
    triggerRight,
    triggerTop,
    triggerText,
    isHeaderTrigger,
  } = headerOptions;
  const chevron = createChevron(triggerText);

  return (
    <div
      className={`c-accordion__hd ${
        triggerRight ? "c-accordion__hd--right" : ""
      } ${triggerTop ? "c-accordion__hd--top" : ""} ${
        isHeaderTrigger
          ? "c-accordion__hd--headertrigger"
          : "c-accordion__hd--icontrigger"
      }`}
    >
      <div className="c-accordion__hdbody">
        {renderTrigger(chevron, headerOptions)}
        {!isHeaderTrigger && renderHeaderContent(headerOptions)}
      </div>
    </div>
  );
}

function renderTrigger(chevron, headerOptions) {
  const {
    onClick,
    bodyId,
    active,
    headingId,
    headerTitle,
    headerSubTitle,
    triggerText,
    isHeaderTrigger,
    headerChildren,
  } = headerOptions;

  if (!isHeaderTrigger) {
    return (
      <button
        className="c-accordion__button c-accordion__button--istrigger"
        onClick={onClick}
      >
        {chevron}
      </button>
    );
  } else {
    return (
      <button varient="c-accordion__button" onClick={onClick}>
        <div className="c-accordion__hd-iconwrapper c-btn c-btn--icon">
          {chevron}
        </div>
        <div className="c-accordion_hdcontent">
          <div>
            {headerTitle && (
              <div className="c-accordion__hd-title">
                <span>{headerTitle}</span>
              </div>
            )}
            {headerSubTitle && (
              <div className="c-accordion__hd-subtitle">
                <span>{headerSubTitle}</span>
              </div>
            )}
          </div>
          {headerChildren && (
            <div className="c-accordion__hd-children">{headerChildren}</div>
          )}
        </div>
      </button>
    );
  }
}

AccordionItem.propTypes = accordionItemPropTypes;
AccordionItem.defaultProps = accordionItemDefualtProps;

export default AccordionItem;
