import React from 'react';

function PlayerTable(props) {
    return (
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Goals</th>
                    <th>Assists</th>
                </thead>
                <tbody>
                    {
                        props.players.length > 0 ? (
                            props.players.map( player => (
                                
                            <tr key={player.id}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td>{player.goals}</td>
                                <td>{player.assists}</td>
                                <button
                                    onClick={()=> props.deletePlayer(player.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={()=> props.editRow(player)}
                                >
                                    Edit
                                </button>
                            </tr>
                        ))
                            ) : (
                                <tr>
                                    <td colSpan={4}>No players listed</td>
                                </tr>
                                )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlayerTable;
