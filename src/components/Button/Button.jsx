import React from 'react';
import PropTypes from 'prop-types';
import { DeleteBtn } from './Button.styled';

function Button({ children, onClick }) {
  return <DeleteBtn onClick={onClick}>{children}</DeleteBtn>;
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
