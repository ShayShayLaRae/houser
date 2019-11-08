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
    nameChangeHandler(event) {
        this.setState({name: event.target.value})
    }
    addressChangeHandler(event) {
        this.setState({address: event.target.value})
    }
    cityChangeHandler(event) {
        this.setState({city: event.target.value})
    }
    stateChangeHandler(event) {
        this.setState({state: event.target.value})
    }
    zip_codeChangeHandler(event) {
        this.setState({zip_code: event.target.value})
    }

    render(){
        const{name, address, city, state, zip_code} = this.state;
        return(
            <div>
                <input 
                value={name}
                placeholder='title'
                type='text'
                onChange={e => this.nameChangeHandler(e)}
                 />
                <input  
                value={address}
                placeholder='address'
                type='text'
                onChange={e => this.addressChangeHandler(e)}
                 />
                <input  
                value={city}
                placeholder='city'
                type='text'
                onChange={e => this.cityChangeHandler(e)}
                 />
                 <input 
                 value={state}
                 placeholder='state'
                 type='text'
                 onChange={e => this.stateChangeHandler(e)}
                 />
                 <input 
                 value={zip_code}
                 placeholder='zip'
                 type='text'
                 onChange={e => this.zip_codeChangeHandler(e)}
                 />
                 <button onClick={event =>{
                     this.clearInputs()
                 }}
                 >Cancel</button>
                 <button>Complete</button>

            </div>
        )
    }
}