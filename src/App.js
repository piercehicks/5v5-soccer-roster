import React, { useState } from 'react';
import PlayerTable from './components/PlayerTable';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';
import EditPlayerForm from './components/EditPlayerForm';

function App() {
  const playerData = [
    {name: "Josef Martinez", position:"Forward", goals:"2", assists:"5", id: 1 },
    {name: "Pity Martinez", position:"Midfield", goals:"2", assists:"5", id: 2 },
    {name: "Miles Robinson", position:"Defender", goals:"2", assists:"5", id: 3 }
  ];

  const initialFormState = { id: null, name: '', position:'', goals:'', assists:'' }


//Setting state
  const [players, setPlayers] = useState(playerData);
  const [currentPlayer, setCurrentPlayer] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  //CRUD ops
  const addPlayer = player => {
    player.id = players.length + 1
    setPlayers([...players, player])
  }

  const deletePlayer = id => {
    setEditing(false)
    setPlayers(players.filter(player => player.id !== id))
  }

  const updatePlayer = (id, updatedPlayer) => {
    setEditing(false)

    setPlayers(players.map(player => ( player.id === id ? updatedPlayer : player )))
  }

  const editRow = player => {
    setEditing(true)

    setCurrentPlayer({
      id: player.id, 
      name: player.name, 
      position: player.position,
      goals: player.goals,
      assists: player.assists
    })
  }

  




  return (
    <div className="App">
      <h1>5v5 Roster Maker</h1>
      {
        editing ? (
          <div>
            <h2>Edit Player</h2>
            <EditPlayerForm 
              editing={editing}
              setEditing={setEditing}
              currentPlayer={currentPlayer}
              updatePlayer={updatePlayer}
            />
          </div>
        ) : (
          <div>
            <h2>Add a Player</h2>
            <AddPlayerForm 
              addPlayer={addPlayer}
            />
          </div>
        )
      }
        <div>
      <PlayerTable 
        players={players}
        deletePlayer={deletePlayer}
        editRow={editRow}
      />
      </div>
    </div>
  );
}

export default App;

