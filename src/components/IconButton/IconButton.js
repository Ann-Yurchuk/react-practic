import React from 'react';
import PropTypes from 'prop-types';
import css from './IconButton.module.css';

const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <button
      type="button"
      className={css.IconButton}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
