// src/components/Body/Body.jsx
import React from 'react';

const Body = ({ bill, handleBillChange, handleCalculate }) => {
  return (
    <div>
      <label>
        Bill amount:
        <input
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          value={bill}
          placeholder="Enter bill amount"
          onChange={handleBillChange}
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate Tip</button>
    </div>
  );
};

export default Body;
