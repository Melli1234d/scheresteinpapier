import './ButtonItem.css';
import React, {useState} from "react";





function ButtonItem({icon, title, onPress}) {
    const [count, setCount] = useState(0);
    //Objekt mit Elementen/Variablen
    //erstelle Variablen um das Item dynamisch zu gestalten
    //Das Item enthält ein Icon und ein Titel

    //Aufgabe: Beiden Variablen mit geben
    const handleAmountGames = () => {
        setCount(count + 1);
    }

    return (
        <button onClick={()=>onPress()}
               
                className="container-buttons">

        <div className="Ausrichtung_column">
            <div className="icon">{icon}</div>
            <div className="icon-title">{title}</div>
        </div>

        </button>
    );
}

export default ButtonItem;
