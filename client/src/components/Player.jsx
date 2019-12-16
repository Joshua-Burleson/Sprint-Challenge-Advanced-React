import React from 'react';
import PlayerBox from './styles/PlayerBox';
import { usePlayerStorage, useGreenText } from '../custom-hooks/utils';

const Player = (props) => {
    const [cachedPlayers, setCachedPlayers] = usePlayerStorage('players', []);
    const [greenText, setGreenText] = useGreenText(false);

    setCachedPlayers(props.player);

    return (
    <PlayerBox onClick={() => setGreenText(!greenText)}>
        <h3>Name: {props.player.name}</h3>
        <h4>Country: {props.player.country}</h4>
        <p>Searches: {props.player.searches}</p>
    </PlayerBox>
    );
};

export default Player;