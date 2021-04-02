import React, { useState } from "react";
import classNames from "classnames";
import PropTypes, { func } from "prop-types";
import generateID from "../../utilities/generateID/generateID";

const tabPropTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
      onClick: PropTypes.func,
    })
  ),
  bordered: PropTypes.bool,
  align: PropTypes.string,
  activeTab: PropTypes.number,
  comparison: PropTypes.bool,
};

const tabDefaultProps = {
  tabs: [
    {
      label: "tab 1",
      id: "tab-1",
    },
    {
      label: "tab 2",
      id: "tab-2",
    },
    {
      label: "tab 3",
      id: "tab-3",
    },
    {
      label: "tab 4",
      id: "tab-4",
    },
  ],
  bordered: false,
  align: null,
  activeTab: 0,
  comparison: false,
};

const Tabs = ({ tabs, bordered, align, comparison, activeTab, ...other }) => {
  const [active, setActive] = useState(activeTab);

  const handleClick = (index, onClick) => {
    setActive(index);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={classNames("c-tabs", {
        "c-tabs--bordered": bordered,
        "c-tabs--comparison": comparison,
        [`c-tabs--${align}`]: align,
      })}
      {...other}
    >
      {tabs.map(({ content, label, onClick, ...otherProps }, i) => {
        const isActive = i === active;
        const tabIndex = `tab_${i}`;

        return (
          <button
            key={tabIndex}
            className={classNames("c-tabs__tab", {
              "is-active": isActive,
            })}
            onClick={() => handleClick(i, onClick)}
            {...otherProps}
          >
            {label}
            {content && <span className="c-tabs__tab__content">{content}</span>}
          </button>
        );
      })}
    </div>
  );
};

Tabs.propTypes = tabPropTypes;
Tabs.defaultProps = tabDefaultProps;

export default Tabs;
