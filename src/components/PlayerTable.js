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
                    <td>Name</td>
                    <td>Position</td>
                    <td>Goals</td>
                    <td>Assists</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default PlayerTable;
