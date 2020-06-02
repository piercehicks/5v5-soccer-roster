import React, { useState } from 'react';
import PlayerTable from './components/PlayerTable';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';

function App() {
  const playerData = [
    {name: "Josef Martinez", position:"Forward", goals:"2", assists:"5", id: 1 },
    {name: "Pity Martinez", position:"Midfield", goals:"2", assists:"5", id: 2 },
    {name: "Miles Robinson", position:"Defender", goals:"2", assists:"5", id: 3 }
  ];

  const [players, setPlayers] = useState(playerData);

  const addPlayer = player => {
    player.id = player.length + 1
    setPlayers([...players, player])
  }

  const deletePlayer = id => {
    setPlayers(players.filter(player => player.id !== id))
  }

  return (
    <div className="App">
      <h1>5v5 Roster Maker</h1>
      <AddPlayerForm 
        addPlayer={addPlayer}
      />
      <PlayerTable 
        players={players}
        deletePlayer={deletePlayer}
      />
    </div>
  );
}

export default App;
