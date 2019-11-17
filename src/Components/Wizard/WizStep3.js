import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class WizStep3 extends Component{
    // constructor() {
    //     super();

    // }


    clearInputs() {
        this.setState({ name: '', address: '', city: '', state: '', zip_code: '', img: '', monthly_mortage: '', rent: '' })
    }
    onClick() {
        axios.post('http://localhost:4000/api/wizard', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
            img: this.state.img,
            monthly_mortage: this.state.monthly_mortage,
            rent: this.state.rent
        })
        this.clearInputs();
        alert('all good');
    }
    render(){
        return(
            <div>
                 <Link to='/'>
                <button onClick={() => this.onClick()}>
                    Complete
                </button>
                </Link>
                <Link to='/wizard/step2'>
                <button>
                    Previous
                </button>
                </Link>
            </div>
        )
    }
}