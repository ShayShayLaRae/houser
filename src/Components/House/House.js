import React, {Component} from 'react';

export default class House extends Component{
    render(){
        const {house} = this.props;
        const {name, address, city, state, zip_code} = house;
        return(
            <div>
                <div className='name'>{name}</div>
                <div className='address'>{address}</div>
                <div className='city'>{city}</div>
                <div className='state'>{state}</div>
                <div className='zip'>{zip_code}</div>
                <button>Delete</button>
            </div>
        )
    }
}