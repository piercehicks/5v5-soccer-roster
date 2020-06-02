import React, { useState, useEffect } from 'react';

const EditPlayerForm = props => {
    const { player, setPlayer } = useState(props.currentPlayer)

    useEffect(()=> {
        setPlayer(props.currentPlayer)
    }, [props])

    const handleInputChange = e => {
        const { name, value } = e.target

        setPlayer({...player, [name]: value }) 
    }

    

return (
    <form
        onSubmit={e => {
            e.preventDefault()

            props.updatePlayer(player.id, player)
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
            <button
                onClick={() => props.setEditing(false)} 
            >Cancel</button>
        </form>
    )
}

export default EditPlayerForm;