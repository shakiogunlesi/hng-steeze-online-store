
import React from 'react';
import './PaymentSuccessful.css';

const PaymentSuccessful = ({ show, handleClose }) => {
  return (
    <div className={`payment-success ${show ? 'show' : ''}`}>
      <div className="payment-success-content">
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        <div className="checkmark-container">
          <div className="checkmark"></div>
        </div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase.</p>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
