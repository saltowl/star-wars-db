import React from 'react';
import PropTypes from 'prop-types';
import './error-block.css';
import icon from './jedi-order-brands.svg';

function ErrorBlock({ message }) {
  return (
    <div className="error-block d-flex row">
      <img className="error-block__icon col-4" src={icon} alt="error icon" />
      <div className="error-block__info d-flex col-8">
        <span>{message}</span>
        <span>(but we already sent droids to fix it)</span>
      </div>
    </div>
  );
}

ErrorBlock.defaultProps = {
  message: 'Something wents wrong',
};

ErrorBlock.propTypes = {
  message: PropTypes.string,
};

export default ErrorBlock;
