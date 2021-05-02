import React, { Component, useEffect, useState } from 'react';
import Player from '../Player/Player'

import { Global } from '../../Data/Global';
import { Players } from '../../Data/Players';
import './Formation.css';

function Formation(props) {
    const [selectedPlayer, setSelectedPlayer] = useState(0);
    const [formation, setFormation] = useState([]);

    useEffect(() => {
        let formationLines = ["1"];
        formationLines.push(...Global.formation.split("-"));
        setFormation(formationLines);
    }, []);


    const test = () => {
        alert("test");
    }
   
    return (
        <div className="player-formation" id="playerFormation">
            {formation.map((line, index) => {
                return <div key={index} className="players-line">
                    {Array.from(Array(parseInt(line)), (e, i) => {
                        return <Player key={i} playerid={0}></Player>
                    })}
                </div>
            })}



            {/* {selectedPlayer && <SelectPlayer playerSelected={playerGetSelected}></SelectPlayer>} */}
        </div>
    );
}




export default Formation;