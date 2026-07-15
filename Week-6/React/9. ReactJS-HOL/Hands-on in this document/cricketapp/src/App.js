// src/App.js
import React from 'react';
import { ListofPlayers, Scorebelow70 } from './ListofPlayers';
import { OddPlayers, EvenPlayers, IndianPlayers, ListofIndianPlayers } from './IndianPlayers';

function App() {
  // 1. Array data structure housing the 11 player details[cite: 3]
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  // 2. Destructuring array source representing Indian Team squad mappings[cite: 3]
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  // Toggle this flag manually between true and false to see both views[cite: 3]
  const flag = true;

  // Conditional evaluation block[cite: 3]
  if (flag === true) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <div>
          <h1>Odd Players</h1>
          <ul>
            {OddPlayers(IndianTeam)}
          </ul>
          <hr />
          <h1>Even Players</h1>
          <ul>
            {EvenPlayers(IndianTeam)}
          </ul>
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;