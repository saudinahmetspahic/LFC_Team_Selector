import React, { useEffect, useState } from 'react';
import { Players } from '../../Data/Players';
import '../RatePlayer/RatePlayer.css'

function RatePlayer(props) {
    const [player, setPlayer] = useState({})
    useEffect(() => {
        setPlayer(Players.filter((p) => p.id == props.playerid)[0]);
    }, [])

    return (
        <div className="rate-background">
            <div className="rate">
                {player.name}
                <button className="btn" onClick={() => props.hideRatePlayer()}>CLOSE</button>
            </div>
        </div>
    );
}

export default RatePlayer;