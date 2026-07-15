// src/ListofPlayers.js
import React from 'react';

// Component to render all 11 players
export function ListofPlayers({ players }) {
  return (
    <ul>
      {players.map((item, index) => (
        <li key={index}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </ul>
  );
}

// Component to render filtered players with scores <= 70
export function Scorebelow70({ players }) {
  const players70 = [];
  
  // Filtering the players using ES6 arrow function loop
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
    return item;
  });

  return (
    <ul>
      {players70.map((item, index) => (
        <li key={index}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </ul>
  );
}