import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [playerOneHand, setPlayerOneHand] = useState([]);

  return (
    <GameContext.Provider value={{ playerOneHand, setPlayerOneHand }}>
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
