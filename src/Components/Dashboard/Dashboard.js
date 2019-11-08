import React, {Component} from 'react';
import House from '../House/House'
import axios from 'axios';


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {houseList:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/houses')
        .then(results => {
            this.setState({
                houseList: results.data
            });
        });
    }
    render(){
        return(
            <div>

                {this.state.houseList.map(h =>
                <House key={h.id} house={h} />
                    )}
                    <button>Add New Property</button>
            </div>
        )
    }
}