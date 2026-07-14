// src/CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css'; // Import the CSS Module 

function CohortDetails({ cohort }) {
    // Check if the cohort status is ongoing (case-insensitive) [cite: 68]
    const isOngoing = cohort.status.toLowerCase() === 'ongoing';
    
    // Green color font when status is "ongoing" and blue color in all other scenarios [cite: 68]
    const headingColor = isOngoing ? 'green' : 'blue';

    return (
        // Apply the box class to the container div [cite: 67]
        <div className={styles.box}>
            <h3 style={{ color: headingColor }}>
                {cohort.cohortCode} - {cohort.programName}
            </h3>
            
            <dl>
                <dt>Started On</dt>
                <dd>{cohort.startDate}</dd>
                
                <dt>Current Status</dt>
                <dd>{cohort.status}</dd>
                
                <dt>Coach</dt>
                <dd>{cohort.coach}</dd>
                
                <dt>Trainer</dt>
                <dd>{cohort.trainer}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;