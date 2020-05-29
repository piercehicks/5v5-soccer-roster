import React, { useState } from 'react';
import PlayerTable from './components/PlayerTable';
import AddPlayer from './components/AddPlayer';
import './App.css';

function App() {
  const playerData = [
    {name: "Josef Martinez", position:"Forward", goals:"2", assists:"5", id: 1 },
    {name: "Pity Martinez", position:"Midfield", goals:"2", assists:"5", id: 1 },
    {name: "Miles Robinson", position:"Defender", goals:"2", assists:"5", id: 1 }
  ];

  const [players, setPlayers] = useState(playerData);

  const addPlayer = player => {
    player.id = player.length + 1
    setPlayers([...players, player])
  }
  return (
    <div className="App">
      <h1>5v5 Roster Maker</h1>
      <AddPlayer 
        addPlayer={addPlayer}
      />
      <PlayerTable 
        players={players}
      />
    </div>
  );
}

export default App;
