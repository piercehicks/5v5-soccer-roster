import React, { useState } from 'react';

function AddPlayerForm(props) {
    const initialFormState = {
        id: null, 
        name: '', 
        position: '', 
        goals: '', 
        assists: ''
    }

    const [player, setPlayer] = useState(initialFormState)

    const handleInputChange = e => {
        const { name, value } = e.target

        setPlayer({...player,[name]: value})
    }
    return (
        <form
            onSubmit={ e => {
                e.preventDefault()
                if (!player.name)
                return

                props.addPlayer(player)
                setPlayer(initialFormState)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={player.name} onChange={handleInputChange}></input>
            <label>Position</label>
            <input type="text" name="position" value={player.position} onChange={handleInputChange}></input>
            <label>Goals</label>
            <input type="text" name="goals" value={player.goals} onChange={handleInputChange}></input>
            <label>Assists</label>
            <input type="text" name="assists" value={player.assists} onChange={handleInputChange}></input>
            <button>Add Player</button>
        </form>
    )
}

export default AddPlayerForm;
