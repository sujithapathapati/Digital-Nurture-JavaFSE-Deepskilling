// src/App.js
import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  // Mock data representing the dashboard from the document image 
  const cohortsData = [
    { cohortCode: 'INTADMDF10', programName: '.NET FSD', startDate: '22-Feb-2022', status: 'Scheduled', coach: 'Aathma', trainer: 'Jojo Jose' },
    { cohortCode: 'ADM21JF014', programName: 'Java FSD', startDate: '10-Sep-2021', status: 'Ongoing', coach: 'Apoorv', trainer: 'Elisa Smith' },
    { cohortCode: 'CDBJF21025', programName: 'Java FSD', startDate: '24-Dec-2021', status: 'Ongoing', coach: 'Aathma', trainer: 'John Doe' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Cohorts Details</h2>
      <div>
        {cohortsData.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;