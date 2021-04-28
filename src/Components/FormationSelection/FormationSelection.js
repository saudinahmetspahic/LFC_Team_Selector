import React, { useEffect, useState } from 'react';
import { Global } from '../../Data/Global'
import './FormationSelection.css';

function FormationSelection(props) {
    const [choosenFormation, setChoosenFormation] = useState('4-3-3');

    const changeFormation = (e) => {
        var option = document.getElementById("formation-select").value;
        setChoosenFormation(option);
    }

    const CreateColumn = (numOfPlayers) => {
        let column = document.createElement("div");
        column.style.height = "100%";
        column.style.minWidth = "50px";
        column.style.margin = "5px";
        column.className = "d-flex flex-column";

        for (let i = 0; i < numOfPlayers; i++) {
            let player = document.createElement("div");
            player.style.width = "50px";
            player.style.height = "50px";
            player.style.borderRadius = "50%";
            player.style.backgroundColor = "red";
            player.style.margin = "10px";
            column.appendChild(player);
        }

        document.getElementById("formation-presentation").appendChild(column);
        document.getElementById("formation-presentation").firstChild.firstChild.style.backgroundColor = "yellow";
    }

    useEffect(() => {
        document.getElementById("formation-presentation").innerHTML = "";
        var lines = choosenFormation.split("-");
        if (lines.length > 1) {
            CreateColumn(1);
            lines.forEach(line => {
                CreateColumn(line);
            });
        }
    }, [choosenFormation]);

    const CreateFormation = () => {
        Global.formation = choosenFormation;
        props.OnFormationChoose(choosenFormation);
    }

    return (
        <div className="formation-background">
            <div className="formation">
                <form className="form">
                    <label htmlFor="formation">Select formation</label>
                    <select onChange={changeFormation} name="formation" id="formation-select">
                        <option value="0" disabled selected hidden>Select different</option>
                        <option value="4-3-3">4 - 3 - 3</option>
                        <option value="4-2-3-1">4 - 2 - 3 - 1</option>
                        <option value="4-4-2">4 - 4 - 2</option>
                        <option value="3-5-2">3 - 5 - 2</option>
                    </select>
                </form>
                <div id="formation-presentation"></div>
                <button className="btn" onClick={CreateFormation}>Next</button>
            </div>
        </div>
    );
}

export default FormationSelection;