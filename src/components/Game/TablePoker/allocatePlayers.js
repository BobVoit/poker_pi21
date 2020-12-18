import React from 'react';
import AdaptiveSeat from './PlayerSeat/AdaptiveSeat';

export default function allocatePlayers(players) {
  return players.map(player => <AdaptiveSeat {...player} />);
}
