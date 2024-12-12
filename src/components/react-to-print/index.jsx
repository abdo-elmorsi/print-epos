// components/PrintEposReceipt.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Receipt from './Receipt';

const PrintEposReceipt = () => {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <div>
      <h1>Print EPOS Receipt Example</h1>
      <button onClick={handlePrint}>Print Receipt</button>
      <Receipt ref={contentRef} />
    </div>
  );
};

export default PrintEposReceipt;