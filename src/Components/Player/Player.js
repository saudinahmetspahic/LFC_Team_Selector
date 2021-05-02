import React, { useState, useEffect } from 'react';
import { Players } from '../../Data/Players';
import '../Player/Player.css';

import RateImage from '../../Images/rate.png';
import RatePlayer from '../RatePlayer/RatePlayer.js'
import SelectPlayer from '../SelectPlayer/SelectPlayer';

function Player({ playerid }) {
    const [toSelectPlayer, setToSelectPlayer] = useState(false);
    const [ratingPlayer, setRatingPlayer] = useState(false);
    const [player, setPlayer] = useState({});

    useEffect(() => {
        let _player = Players.filter((player) => player.id == playerid)[0];
        if (_player !== undefined) {
            setPlayer(_player);
        }
    }, []);

    const playerSelecting = () => {
        setToSelectPlayer(true);
    }

    const playerGotSelected = (playerid) => {
        let _player = Players.filter((player) => player.id === playerid)[0];
        setPlayer(_player);
        setToSelectPlayer(false);
    }

    const hideSelectPlayer = () => {
        setToSelectPlayer(false);
    }

    const ratePlayer = () => {
        setRatingPlayer(true);
    }

    const hideRatePlayer = () => {
        setRatingPlayer(false);
    }

    if (Object.keys(player).length === 0) {
        return <>
            <div className="player player-not-selected" onClick={() => playerSelecting()}>
            </div>
            {toSelectPlayer && <SelectPlayer playerSelected={playerGotSelected} hideSelectPlayer={hideSelectPlayer}></SelectPlayer>}
        </>
    }
    return <>
        <div className="cover">
            <div className="player" onClick={() => playerSelecting()}>
                <img className="player-image" src={player.image} alt="" />
                <div className="player-info">
                    <h5 className="player-name">{player.name}</h5>
                    <div className="side-info">
                        <h6>{player.id}</h6>
                        <h6>{player.line}</h6>
                    </div>
                </div>
            </div>
            <img className="rate-image" onClick={() => ratePlayer()} src={RateImage} alt="" />
        </div>
        {toSelectPlayer && <SelectPlayer playerSelected={playerGotSelected} hideSelectPlayer={hideSelectPlayer}></SelectPlayer>}
        {ratingPlayer && <RatePlayer playerid={player.id} hideRatePlayer={hideRatePlayer}></RatePlayer>}
    </>
}

export default Player;