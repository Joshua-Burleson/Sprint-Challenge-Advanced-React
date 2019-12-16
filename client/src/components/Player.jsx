import React from 'react';

const Player = (props) => {
    return (
    <div>
        <h3>{props.player.name}</h3>
        <h4>{props.player.country}</h4>
        <p>{props.player.searches}</p>
    </div>
    );
};

export default Player;