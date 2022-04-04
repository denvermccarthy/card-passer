import React from 'react';
import { useGameData } from '../GameContex/GameContex';
import Card from './Card';

export default function CardList({ cards, player }) {
  const { setSelectedCard, setFrom, selectedCard } = useGameData();
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}
