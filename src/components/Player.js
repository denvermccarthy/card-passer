import React from 'react';
import { useGameData } from '../GameContex/GameContex';
import CardList from './CardList';

export default function Player({ player, hand }) {
  const { setTo, to } = useGameData();
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList player={player} cards={hand} />
    </div>
  );
}
