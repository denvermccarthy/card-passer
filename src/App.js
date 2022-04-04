import './App.css';
import Player from './components/Player';
import CardList from './components/CardList';
import ExecutePassButton from './components/ExecutePassButton';
import { useGameData } from './GameContex/GameContex';

function App() {
  const {
    playerOneHand,
    playerThreeHand,
    playerTwoHand,
    deck,
    to,
    setFrom,
    selectedCard,
    setTo,
    setSelectedCard,
    from,
  } = useGameData();

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player
          to={to}
          player={1}
          hand={playerOneHand}
          setFrom={setFrom}
          selectedCard={selectedCard}
          setTo={setTo}
          setSelectedCard={setSelectedCard}
        />
        <Player
          to={to}
          player={2}
          hand={playerTwoHand}
          setFrom={setFrom}
          selectedCard={selectedCard}
          setTo={setTo}
          setSelectedCard={setSelectedCard}
        />
        <Player
          to={to}
          player={3}
          hand={playerThreeHand}
          setFrom={setFrom}
          selectedCard={selectedCard}
          setTo={setTo}
          setSelectedCard={setSelectedCard}
        />
        <CardList
          cards={deck}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          setFrom={setFrom}
          player={'deck'}
        />
      </section>
      <section>
        {selectedCard && (
          <ExecutePassButton
            setFrom={setFrom}
            from={from}
            to={to}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
      </section>
    </div>
  );
}

export default App;
