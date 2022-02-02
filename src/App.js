import './App.css';
import ButtonItem from './components/ButtonItem/ButtonItem';

function App() {

    const buttons = [
        {id: 'e1', icon:'FaRegHandScissors', title: 'Schere'},
        {id: 'e2', icon:'FaRegHandRock', title: 'Stein'},
        {id: 'e3', icon:'FaRegHandPaper', title: 'Papier'},
    ];


  return (
    <div className="App">
      <header className="App-header">

        <p>
            Spiele Schere Stein Papier mit einem Computer
        </p>
          <ButtonItem
              title={buttons[0].title}
              icon={buttons[0].icon}
          ></ButtonItem>
          <ButtonItem
              title={buttons[1].title}
              icon={buttons[1].icon}
          ></ButtonItem>

          <ButtonItem
              title={buttons[2].title}
              icon={buttons[2].icon}
          ></ButtonItem>

          //Automatisches Icon vom Computer
          <p> Computer spielte: Stein</p>

          <p> Du hast gewonnen/verloren</p>

      </header>
    </div>
  );
}

export default App;
