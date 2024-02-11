// src/TipCalculator.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tipDetails, setTipDetails] = useState(null);
  const [tipPercentage, setTipPercentage] = useState('20%'); // Inicializado a '20%'

  const handleBillChange = (e) => {
    const billValue = parseFloat(e.target.value) || 0;
    setBill(billValue);
    setTipPercentage(billValue <= 300 && billValue >= 1 ? '15%' : '20%'); // Actualizar tipPercentage al cambiar bill
  };

  const calculateTip = () => {
    return bill <= 300 && bill >= 1 ? bill * 0.15 : bill * 0.2;
  };

  const handleCalculate = () => {
    const calculatedTip = calculateTip();
    const total = bill + calculatedTip;

    const details = `BILL: $${bill.toFixed(2)}<br/>
    TIP (${tipPercentage}): $${calculatedTip.toFixed(2)}<br/>
    TOTAL $${total.toFixed(2)}`;

    setTipDetails(details);
  };

  return (
    <div>
      <Header />
      <Body
        bill={bill}
        handleBillChange={handleBillChange}
        handleCalculate={handleCalculate}
      />
      <Footer />

      {tipDetails && (
        <div>
          <h2>Tip Details:</h2>
          <p dangerouslySetInnerHTML={{ __html: tipDetails }}></p>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
