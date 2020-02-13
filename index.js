import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

const Accordion = ({ children, className = "", onToggle, title }) => {
  const [visibility, setVisibility] = useState(true);
  return (
    <div className={className}>
      <h2
        className="title"
        onClick={() => {
          setVisibility(!visibility);
          if (onToggle) onToggle(!visibility);
        }}
      >
        {title}
      </h2>
      {visibility ? <Fragment>{children}</Fragment> : null}
    </div>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  onToggle: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Accordion;
