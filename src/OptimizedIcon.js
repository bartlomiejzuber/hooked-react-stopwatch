import React from "react";
import PropTypes from "prop-types";

const OptimizedIcon = ({ Icon, className, onClick }) => (
  <Icon className={className} onClick={onClick} />
);

OptimizedIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default React.memo(OptimizedIcon);
