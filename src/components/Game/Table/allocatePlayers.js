import React from 'react';

const allocatePlayers = (players, Seat) => {
    return players.map(player => <Seat {...player} />);
}

export default allocatePlayers;