import React from 'react';
import axios from 'axios';
import Player from './Player';
//import { useLocalStorage } from '../custom-hooks/utils';

class Wrapper extends React.Component {
    constructor(){
        super();
        this.state = {
            players: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
            .then(res => this.setState({players: res.data}))
            .catch(err => console.log('AXIOS ERROR: ', err));
    };

    render(){
       return(
            <div>
                {this.state.players && this.state.players.map(player => <Player player={player} />)}
            </div>
       );
    }
}

export default Wrapper;