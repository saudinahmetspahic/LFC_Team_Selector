import React, { useState, useEffect } from 'react';
import './PlayerList.css'
import { Players } from '../../Data/Players'

function PlayerList(props) {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [playerIndex, setPlayerIndex] = useState(0);

    useEffect(() => {
        var p = Players.filter((player) => {
            return (player.line === props.position && player.line !== '');
        });
        setSelectedPlayers(p);


    }, [props.position]);

    useEffect(() => {
        var item = document.getElementById("cover");
        item.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) item.scrollLeft += 100;
            else item.scrollLeft -= 100;
        });
    });

    const PlayerGetSelected = (e) => {
        console.log(e);
        let playerid = e.key;
        alert("Player List: " + playerid);
        props.playerSelected(playerid);
    }

    return (
        <div className="list-background">
            <div id="cover">
                {selectedPlayers.map((player) => {
                    return <div className="player-image" key={player.id} onClick={PlayerGetSelected}>
                        <img src={player.image} alt="" />
                        <div className="info">
                            <h4>{player.name}</h4>
                            <h5>{player.position}</h5>
                        </div>
                    </div>
                })}
            </div>

        </div>
    );
}

export default PlayerList;