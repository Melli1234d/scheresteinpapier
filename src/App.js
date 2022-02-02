import './App.css';
import ButtonItem from './components/ButtonItem/ButtonItem';
import {FaRegHandScissors, FaRegHandRock, FaRegHandPaper} from "react-icons/fa";


function App() {

//Variable buttons, die in einem Array alle einzelnen Inhalte und alle Items beinhaltet (Schere Stein Papier mit jeweils einem Icon und einem Titel)
//Andere beiden Buttons zum Element machen
    const buttons = [
        {id: 'e1', icon: <FaRegHandScissors size={50} color="white"/>, title: 'Schere'},
        {id: 'e2', icon: <FaRegHandRock size={50} color="white"/>, title: 'Stein'},
        {id: 'e3', icon: <FaRegHandPaper size={50} color="white"/>, title: 'Papier'},
    ];


//ButtonItem ist das jeweilige Item, was dann das icon und den titel von der Button Variable/ Array enthält.
    return (
        <div className="App">
            <header className="App-header">
                {buttons.map((button) =>
                    <ButtonItem
                        title={button.title}
                        icon={button.icon}
                    />
                )}
                <p>
                    Spiele Schere Stein Papier mit einem Computer
                </p>


                //Automatisches Icon vom Computer
                <p> Computer spielte: Stein</p>

                <p> Du hast gewonnen/verloren</p>

            </header>
        </div>
    );
}

export default App;
