import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [deck, setDeck] = useState(initialCards);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return (
    <GameContext.Provider
      value={{
        playerOneHand,
        setPlayerOneHand,
        deck,
        setDeck,
        playerTwoHand,
        setPlayerTwoHand,
        playerThreeHand,
        setPlayerThreeHand,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameData = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { useGameData, GameProvider };
