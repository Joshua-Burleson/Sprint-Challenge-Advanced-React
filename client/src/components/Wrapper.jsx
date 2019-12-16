import React from 'react';
import axios from 'axios';
import PlayerWrapper from './styles/PlayerWrapper';
import Player from './Player';

class Wrapper extends React.Component {
    constructor(){
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({players: res.data});
            })
            .catch(err => console.log('AXIOS ERROR: ', err));
    };

    render(){
       return(
            <div>
                {this.state.players && this.state.players.map(player => <Player key={player.name} data-testid={player.name} player={player} />)}
            </div>
       );
    };
};

export default Wrapper;