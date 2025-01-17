import React, {Component} from 'react';
import axios from 'axios';
import './House.css';

export default class House extends Component{


    onClick(id) {
        axios.delete(`http://localhost:4000/api/wizard/${id}`) 
        .then(() => {
            this.props.getHouseList()
        })
    }
    render(){
        const {house, getHouseList} = this.props;
        const {id, name, address, city, state, zip_code, img, monthly_mortgage, rent} = house;
        return(
            <div>
                <div className='name'>{name}</div>
                <div className='address'>{address}</div>
                <div className='city'>{city}</div>
                <div className='state'>{state}</div>
                <div className='zip'>{zip_code}</div>
                <img src={img} alt='house' className='image' />
                <div className='mortgage'>{monthly_mortgage}</div>
                <div className='rent'>{rent}</div>
                <button onClick={() => this.onClick(id)}>
                    Delete
                </button>
            </div>
        )
    }
}