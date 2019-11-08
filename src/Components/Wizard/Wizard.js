import React, {Component} from 'react';

export default class Wizard extends Component{
    constructor(){
        super()
        this.state= {
            name: '',
            address: '',
            city: '',
            state: '',
            zip_code: ''
        };
        
        }
    clearInputs(){
        this.setState({name: '', address: '', city: '', state: '', zip_code: ''})
    }

    render(){
        const{name, address, city, state, zip_code} = this.state;
        return(
            <div>
                <input 
                value={name}
                placeholder='title'
                type='text'
                 />
                <input  
                value={address}
                placeholder='address'
                type='text'
                 />
                <input  
                value={city}
                placeholder='city'
                type='text'
                 />
                 <input 
                 value={state}
                 placeholder='state'
                 type='text'
                 />
                 <input 
                 value={zip_code}
                 placeholder='zip'
                 type='text'
                 />

            </div>
        )
    }
}