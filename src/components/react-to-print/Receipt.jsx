// components/Receipt.js
import React from 'react';
import './style.css'; 

const Receipt = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="receipt">
      <h2 style={{ textAlign: 'center' }}>IFRESH</h2>
      <p style={{ textAlign: 'center', fontSize: '12px' }}>Receipt Number: 37154554</p>
      <p style={{ textAlign: 'center', fontSize: '12px' }}>Invoice: INV-004832</p>
      <p style={{ textAlign: 'center', fontSize: '12px' }}>Date: 10-Dec-23</p>
      <p style={{ textAlign: 'center', fontSize: '12px' }}>Time: 03:31 PM</p>
      <hr />

      <p style={{ fontSize: '12px' }}>Owner: Owner</p>
      <p style={{ fontSize: '12px' }}>Branch: 310879518300003</p>
      <p style={{ fontSize: '12px' }}>-----------------------------------</p>

      <p style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
        <span>Item 1</span>
        <span>18.00</span>
      </p>
      <p style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
        <span>Item 2</span>
        <span>18.00</span>
      </p>

      <p style={{ fontSize: '12px' }}>-----------------------------------</p>
      <p style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
        <strong>Total</strong>
        <strong>36.00</strong>
      </p>

      <p style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
        <span>VAT (Included)</span>
        <span>18.00</span>
      </p>

      <p style={{ fontSize: '12px' }}>Payment Method: Visa</p>
      <p style={{ textAlign: 'center', fontSize: '12px' }}>Thank you for your purchase!</p>
      <p style={{ textAlign: 'center', fontSize: '12px' }}>Scan QR for more info:</p>
      <img src="qrCode.png" alt="QR Code" style={{ display: 'block', margin: '0 auto', width: '80px' }} />
    </div>
  );
});

export default Receipt;