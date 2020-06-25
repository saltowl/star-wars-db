import React from 'react';
import './error-block.css';
import icon from './jedi-order-brands.svg';

export default function ErrorBlock({ message = 'Something wents wrong' }) {
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
