import React, {useEffect, useState} from "react";
import "./ComputerButton.css";

import ReactDOM from "react-dom";

function ComputerButtons({activeButton}){

    const [currentButton, setCurrentButton] = useState(activeButton);

    useEffect(() => {

        // Update the document title using the browser API
        setCurrentButton(activeButton)
    },[activeButton]);



        return (

            <div>
                <div className="container-buttons">
                    <div className="Computer">
                        <p className="p">Der Computer spielt:  {currentButton?.title}</p>
                        <div>{currentButton?.title}</div>
                        <div>{currentButton?.icon}</div>



                        </div>


                </div>
            </div>
        );
    }
    const rootElement=
        document.getElementById("root");
    ReactDOM.render(<ComputerButtons/>, rootElement);


export default ComputerButtons;
