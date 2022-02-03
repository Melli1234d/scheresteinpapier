import './App.css';
import ButtonItem from './components/ButtonItem/ButtonItem';
import {FaRegHandScissors, FaRegHandRock, FaRegHandPaper} from "react-icons/fa";


function App() {

//Variable buttons, die in einem Array alle einzelnen Inhalte und alle Items beinhaltet (Schere Stein Papier mit jeweils einem Icon und einem Titel)
//Andere beiden Buttons zum Element machen
    //Button die der Spieler drückt
    const buttons = [
        {id: 'e1', icon: <FaRegHandScissors className="icon"/>, title: 'Schere'},
        {id: 'e2', icon: <FaRegHandRock className="icon"/>, title: 'Stein'},
        {id: 'e3', icon: <FaRegHandPaper className="icon"/>, title: 'Papier'},
    ];

//Button, die der Computer spielt

    const randomButtons = [
        {id: 'e1', icon: <FaRegHandScissors className="icon"/>, title: 'Schere'},
        {id: 'e2', icon: <FaRegHandRock className="icon"/>, title: 'Stein'},
        {id: 'e3', icon: <FaRegHandPaper className="icon"/>, title: 'Papier'},
    ];
/*
// FUNKTION DIE DAS RICHTIGE ICON ZU DEM WORT RAUS GEBEN SOLL
    let game = [
        "Schere",
        "Stein",
        "Papier",
    ];

    icon_zu_button(){
        switch ({game}) {
            case "Schere":
                props.icon = <FaRegHandScissors className="icon"/>
                break;
            case "Stein":
                props.icon = <FaRegHandRock className="icon"/>
                break;
            case "Papier":
                props.icon = <FaRegHandPaper className="icon"/>
        }
        break;
    default:
        console.log('Es ist ein Fehler aufgetreten')
        break;
    }
};
*/


    
    
    
    

 //     DER TEXT DER UNTEN ERSCHEINEN SOLL, BEI DER ENTSCHEIDUNG WER GEWONNEN HAT
  //Stein-Stein - unentschieden
  //Stein-Schere - gewonnen
  //Stein-Papier - verloren

  //Papier- Stein - gewonnen
  //Papier-Schere - verloren
  //Papier-Papier - unentschieden

  //Schere-Stein - verloren
  //Schere-Schere - unentschieden
  //Schere-Papier - gewonnen

/*
    switch (){
        case Stein & Stein:
            console.log('Es ist ein unentschieden')
            break;
        case Stein & Schere:
            console.log(' Du hast gewonnen')
            break;
        case Stein & Papier:
            console.log(' Du hast verloren')
            break;
        case Papier & Stein:
            console.log(' Du hast gewonnen')
            break;
        case Papier & Schere:
            console.log(' Du hast verloren')
            break;
        case Stein & Schere:
            console.log(' Es ist ein unentschieden')
            break;
        case Schere & Stein:
            console.log(' Du hast verloren')
            break;
        case Schere & Schere:
            console.log(' Es ist ein unentschieden')
            break;
        case Schere & papier:
            console.log(' Du hast gewonnen')
            break;
        default:
            console.log('Es ist ein Fehler aufgetreten')
            break;
    }

*/


//ButtonItem ist das jeweilige Item, was dann das icon und den titel von der Button Variable/ Array enthält.
    return (
        <div className="App">
            <header className="App-header">
                <p>
                Spiele Schere Stein Papier mit einem Computer
                </p>
                {buttons.map((button) =>
                    <ButtonItem
                        title={button.title}
                        icon={button.icon}
                    />
                )}



                //Automatisches Icon vom Computer
                <p> Computer spielte: Stein</p>
                <ButtonItem

                    title={buttons.title}
                    icon={buttons.icon}
                />


                <p> Du hast gewonnen/verloren</p>

            </header>
        </div>
    );
}

export default App;
