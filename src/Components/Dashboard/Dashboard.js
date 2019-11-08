import React, {Component} from 'react';
import House from '../House/House'
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {houseList:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/')
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
                    <Link to='/wizard'>
                    <button className='propertyBtn'>
                    Add New Property
                    </button>
                    </Link>
            </div>

        )
    }
}