import React, { useState } from 'react';
import PlayerList from '../PlayerList/PlayerList';
import './SelectPlayer.css';

import gk_icon from '../../Images/gk.jpg';
import def_icon from '../../Images/def.png';
import mid_icon from '../../Images/mid.jpg';
import forw_icon from '../../Images/for.jpg';

function SelectPlayer(props) {
    const [position, setPosition] = useState('');

    const playerSelected = (playerid) => {
        alert("Select Player: " + playerid);
        props.playerSelected(playerid);
    }

    return (
        <div className="formation-background">
            <div className="formation">
                <div className="select-player-position">
                    <img onClick={() => setPosition('GK')} className="position-img" src={gk_icon} alt="GK" />
                    <img onClick={() => setPosition('DEF')} className="position-img" src={def_icon} alt="DEF" />
                    <img onClick={() => setPosition('MID')} className="position-img" src={mid_icon} alt="MID" />
                    <img onClick={() => setPosition('FOR')} className="position-img" src={forw_icon} alt="FORW" />
                </div>
                <PlayerList position={position} playerSelected={playerSelected}></PlayerList>
            </div>
        </div>
    );
}

export default SelectPlayer;