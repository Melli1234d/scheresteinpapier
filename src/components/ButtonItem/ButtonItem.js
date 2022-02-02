import './ButtonItem.css';
import React from "react";
import {useState} from "react";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandRock} from "react-icons/fa";
import { FaRegHandPaper} from "react-icons/fa";




function ButtonItem() {
    const buttonIcon = 'FaRegHandScissors';
    const buttonTitle = 'Schere';


 const buttons = [
     {id: 'e1', icon:'FaRegHandScissors', title: 'Schere'},
     {id: 'e2', icon:'FaRegHandRock', title: 'Stein'},
     {id: 'e3', icon:'FaRegHandPaper', title: 'Papier'},
 ];

return (
        <div className ="container-buttons">

            <div className ="icon"><FaRegHandScissors size={50} color="white"/> <div className ="icon">{buttonIcon}</div> <div className = "icon-title">{buttonTitle}</div></div>
                <div className = "icon"><FaRegHandRock size={50} color="white"/><div className = "icon-title">Stein</div></div>
                <div className = "icon"><FaRegHandPaper size={50} color="white"/><div className = "icon-title">Papier</div></div>
        </div>
    );
}

export default ButtonItem;
