import './ThreeButtons.css';
import React from "react";
import {useState} from "react";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandRock} from "react-icons/fa";
import { FaRegHandPaper} from "react-icons/fa";




function ThreeButtons() {
return (
        <div className ="container-buttons">
                <div className = "button"><FaRegHandScissors size={50} color="white"/></div>
                <div className = "button"><FaRegHandRock size={50} color="white"/></div>
                <div className = "button"><FaRegHandPaper size={50} color="white"/></div>
        </div>
    );
}

export default ThreeButtons;
