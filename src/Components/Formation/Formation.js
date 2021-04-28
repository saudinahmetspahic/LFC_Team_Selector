import React, { useEffect, useState } from 'react';
import SelectPlayer from '../SelectPlayer/SelectPlayer'
import { Global } from '../../Data/Global';
import './Formation.css';


function Formation(props) {
    const [selectedPlayer, setSelectedPlayer] = useState(0);

    useEffect(() => {
        CreateFormation();
    }, []);

    const PlayerClicked = (e) => {
        setSelectedPlayer(e.target.id);
    }
    const CreateColumn = (numOfPlayers) => {
        var main = document.getElementById("playerFormation");
        var addedPlayersCount = document.getElementsByClassName("player").length;

        let column = document.createElement("div");
        column.style.height = "100%";
        column.style.minWidth = "50px";
        column.style.margin = "5px";
        column.className = "d-flex flex-column justify-content-center";

        for (let i = 1; i <= numOfPlayers; i++) {
            let player = document.createElement("div");
            player.id = addedPlayersCount + i;
            player.className = "player player-not-selected";
            player.addEventListener("click", PlayerClicked);
            column.appendChild(player);
        }

        main.appendChild(column);
        main.firstChild.firstChild.style.backgroundColor = "yellow";
    }

    const CreateFormation = () => {
        let formation = Global.formation.split("-");
        document.getElementById("playerFormation").innerHTML = "";
        CreateColumn(1);
        for (let i = 0; i < formation.length; i++) {
            CreateColumn(formation[i]);
        }
    }

    const playerGetSelected = (playerid) => {
        alert("Formation: " + playerid);
        setSelectedPlayer(0);
    }

    return (
        <div className="player-formation" id="playerFormation">
            {selectedPlayer && <SelectPlayer playerSelected={playerGetSelected}></SelectPlayer>}
        </div>
    );
}

export default Formation;