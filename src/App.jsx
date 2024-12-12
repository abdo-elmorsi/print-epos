import React, { useState } from 'react';
import ThermalPrinter from './components/ThermalPrinter';
import ReactToPrintWay from './components/react-to-print';

function App() {
  const [isFirstPrinter, setIsFirstPrinter] = useState(true);

  const togglePrinter = () => {
    setIsFirstPrinter(prev => !prev);
  };

  return (
    <div>
      <button onClick={togglePrinter}>
        Switch to {isFirstPrinter ? 'ThermalPrinterWay' : 'ReactToPrintWay'}
      </button>

      <div className='container'>
        {isFirstPrinter ? <ThermalPrinter /> : <ReactToPrintWay />}
      </div>
    </div>
  );
}

export default App;