import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return (
    <GameContext.Provider
      value={
        (deck,
        setDeck,
        playerOneHand,
        setPlayerOneHand,
        selectedCard,
        setSelectedCard,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
        from,
        setFrom,
        to,
        setTo)
      }
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameData = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameData must be used within a GameProvider');
  }
  return context;
};

export { useGameData, GameProvider };
