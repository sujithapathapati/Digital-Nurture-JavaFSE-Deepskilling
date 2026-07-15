// src/IndianPlayers.js
import React from 'react';

// Odd Team Players rendering using ES6 array destructuring[cite: 3]
export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}

// Even Team Players rendering using ES6 array destructuring[cite: 3]
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </div>
  );
}

// Defining internal squads to merge[cite: 3]
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

// Merging the two arrays using the ES6 Spread operator feature[cite: 3]
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

// Helper list renderer for the merged squad output
export function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  );
}