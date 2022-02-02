import './ButtonItem.css';
import React from "react";





function ButtonItem({icon, title}) {
    //Objekt mit Elementen/Variablen
    //erstelle Variablen um das Item dynamisch zu gestalten
    //Das Item enthält ein Icon und ein Titel

    //Aufgabe: Beiden Variablen mit geben


    return (
        <div className="container-buttons">


            <div className="icon">{icon}</div>
            <div className="icon-title">{title}</div>


        </div>
    );
}

export default ButtonItem;
