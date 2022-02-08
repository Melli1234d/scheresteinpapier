import './App.css';
import ButtonItem from './components/ButtonItem/ButtonItem';
import {FaRegHandScissors, FaRegHandRock, FaRegHandPaper} from "react-icons/fa";
import ComputerButton from './components/ComputerButton/ComputerButton';
import React, {useState} from 'react';

function App() {
    const [activeButton, setActiveButton] = useState(undefined);
    const [count, setCount] = useState(0);
    const [gewinn, setGewinn] = useState(0);
    const [verloren, setVerloren] = useState(0);
    const [unentschieden, setUnentschieden] = useState(0);


// Funktion die den Count wieder auf null stellt, wenn man auf dn Reset Button drückt
    const handleReset = () => {
        setCount(0);
    }
    // Funktion die den Count wieder auf null stellt, wenn man auf dn Reset Button drückt

    const handleAmountGames = () => {
        setCount(count + 1);
    }
//Funktion wie oft gewonnen
    const handleAmountWin = () => {
        setGewinn(gewinn + 1);
    }

    //wie oft verloren
    const handleAmountLose = () => {
        setVerloren(verloren + 1);
    }
    //wie oft unentschieden
    const handleAmountUnentschieden = () => {
        setUnentschieden(unentschieden + 1);
    }


//Variable buttons, die in einem Array alle einzelnen Inhalte und alle Items beinhaltet (Schere Stein Papier mit jeweils einem Icon und einem Titel)
//Andere beiden Buttons zum Element machen
    //Button die der Spieler drückt
    const buttons = [
        {id: 'e1', icon: <FaRegHandScissors className="icon"/>, title: 'Schere'},
        {id: 'e2', icon: <FaRegHandRock className="icon"/>, title: 'Stein'},
        {id: 'e3', icon: <FaRegHandPaper className="icon"/>, title: 'Papier'},
    ];


    const computerbuttons = [
        {
            title: "Schere",
            icon: <FaRegHandScissors className="icon"/>
        },
        {
            title: "Stein",
            icon: <FaRegHandRock className="icon"/>
        },
        {
            title: "Papier",
            icon: <FaRegHandPaper className="icon"/>
        }
    ];


    const randomComputerButtons = e => {
        const index = Math.floor(Math.random() * computerbuttons.length)

        setActiveButton(computerbuttons[index]);
        return computerbuttons[index].title
    };


/*
//Gewinn Funktion, was gewinnt gegen was
let userButtonTitle = button.title //User
let computerButtonTitle = randomComputerButtons()//Computer button beim draufklick angezeigt

    const winCondition={
       Papier: 'ROCK',
       Stein: 'SCHERE',
       Schere:'PAPIER',
    };
    //wenn user buttom gleich ist mit computer button ist unentschieden
    //wenn der computer button ist gleich mit der auswahl des userbuttons aus der wincondition hat man gewonnen
    //wenn die ersten beiden nicht stimmen dann hat man verloren

    function returnResult(){
        if (userButtonTitle === computerButtonTitle){
           return 'unentschieden'
        }
        else if(userButtonTitle === winCondition[userButtonTitle]){
            return 'gewonnen';
        }
        else {
            return 'verloren';
        }
    }

    returnResult();


/*
        switch ( buttons.title && computerbuttons.title ){
            case ("Schere | Schere"):{
                console.log("unentschieden")
                break;}
            case ("Schere | Papier"): {
                console.log("gewonnen")
                break;}
            case ("Schere | Stein"): {
                console.log("verloren")
                break;}
            case ("Stein | Stein"): {
                console.log("unentschieden")
                break;}
            case ("Stein | Schere"): {
                console.log("gewonnen")
                break;}
            case ("Stein | Papier"): {
                console.log("verloren")
                break;}
            case ("Papier | Papier"): {
                console.log("unentschieden")
                break;}
            case ("Papier | Schere"): {
                console.log("verloren")
                break;}
            case ("Papier | Stein"): {
                console.log("gewonnen")
                break;}
};

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

                        onPress={() => {
                            let userButtonTitle = button.title //User
                            let computerButtonTitle = //Computer button beim draufklick angezeigt
                                randomComputerButtons()


                        }}


                        title={button.title}
                        icon={button.icon}
                    />
                )}


                <ComputerButton activeButton={activeButton}/>


                <p> Du hast gewonnen/verloren</p>
                <p> Spiele: {count} </p>
                <p> Gewonnen: {gewinn} </p>
                <p> Verloren: {verloren} </p>
                <p> Unentschieden: {unentschieden} </p>
                <button onClick={handleReset}> Reset</button>
            </header>
        </div>
    );
}

export default App;







