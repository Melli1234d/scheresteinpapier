import './ButtonItem.css';
import React from "react";





function ButtonItem({icon, title, onPress}) {
    //Objekt mit Elementen/Variablen
    //erstelle Variablen um das Item dynamisch zu gestalten
    //Das Item enthält ein Icon und ein Titel

    //Aufgabe: Beiden Variablen mit geben


    return (
        <button onClick={()=>onPress()} className="container-buttons">

        <div className="Ausrichtung_column">
            <div className="icon">{icon}</div>
            <div className="icon-title">{title}</div>
        </div>

        </button>
    );
}

export default ButtonItem;
