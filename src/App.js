import './App.css';
import ThreeButtons from './components/ThreeButtons/ThreeButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
            Spiele Schere Stein Papier mit einem computer
        </p>
          //Drei Auswahlmöglichkeiten (Schere,Stein,Papier)
          <ThreeButtons/>
        //Text, für was du dich entschieden hast
          //Automatisches Icon vom Computer
          <p> Computer spielte: Stein</p>

          <p> Du hast gewonnen/verloren</p>

      </header>
    </div>
  );
}

export default App;
