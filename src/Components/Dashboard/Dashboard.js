import React, {Component} from 'react';
import House from '../House/House'
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {houseList:[]}
    }

    getHouses=() => {
        axios.get('http://localhost:4000/api/')
        .then(results => {
            this.setState({
                houseList: results.data
            });
        });
    }

    componentDidMount(){
       this.getHouses()
    }


    render(){
        
        return(
            <div>

                {this.state.houseList.map(h =>
                <House key={h.id} house={h} getHouseList={this.getHouses} />
                    )}
                    <Link to='/wizard/step1'>
                        <button className='propertyBtn'>
                        Add New Property
                        </button>
                    </Link>
            </div>

        )
    }
}