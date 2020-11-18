import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  size, icon, color, className, viewBox,
}) => (
  <svg
    className={className}
    viewBox={viewBox}
    width={`${size}px`}
    height={`${size}px`}
  >
    <use href={`./assets/svg/${icon}.svg#${icon}`} fill={color} />
  </svg>
);

Icon.defaultProps = {
  size: 16,
  color: 'black',
  viewBox: '0 0 24 24',
  style: {},
  className: undefined,
};

// Icon.propTypes = {
//   size: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   viewBox: PropTypes.string.isRequired,
//   className: PropTypes.string,
// };

export default Icon;
