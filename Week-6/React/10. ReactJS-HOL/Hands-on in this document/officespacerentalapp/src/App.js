// src/App.js
import React from 'react';
import './App.css';
import officeImg from './office.jpg'; // Import the office space image asset

function App() {
  // Elements and attributes matching the hint rules
  const element = "Office Space";
  const jsxatt = <img src={officeImg} width="25%" height="25%" alt="Office Space" />;

  // Create an object array of office targets to loop through
  const officeItems = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 75000, Address: "Bangalore" }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* Heading structure element */}
      <h1>{element} , at Affordable Range</h1>
      
      {/* Display the image attribute component */}
      {jsxatt}

      {/* Loop through the office space items to display data cards */}
      {officeItems.map((item, index) => {
        // Evaluate condition to apply the dynamic style text array classes
        let colors = [];
        if (item.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }

        return (
          <div key={index} style={{ marginTop: '30px' }}>
            <h1>Name: {item.Name}</h1>
            {/* Combine the evaluated dynamic array item strings into the className property */}
            <h3 className={colors.join(' ')}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;