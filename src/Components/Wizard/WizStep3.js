import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setWizStep3 } from '../../ducks/reducer';
import store from '../../ducks/store';


export default class WizStep3 extends Component {
    constructor() {
        super();
        const {monthly_mortgage, rent} = store.getState()
        this.state = {
            monthly_mortgage: monthly_mortgage,
            rent: rent
        }
    }


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

    monthly_mortgageChangeHandler(event) {
        this.setState({ monthly_mortgage: event.target.value })
    }

    rentChangeHandler(event) {
        this.setState({ rent: event.target.value })
    }

    render() {
        const {monthly_mortgage, rent} = this.state;
        return (
            <div>

                <input
                    value={monthly_mortgage}
                    placeholder='monthly mortgage'
                    type='text'
                    onChange={e => this.monthly_mortgageChangeHandler(e)}
                />
                <input
                    value={rent}
                    placeholder='desired rent'
                    type='text'
                    onChange={e => this.rentChangeHandler(e)}
                />

                <Link to='/'>
                    <button onClick={() => this.onClick()}>
                        Complete
                </button>
                </Link>
                <Link to='/wizard/step2'>
                    <button onClick={(event) => {
                        store.dispatch(setWizStep3(monthly_mortgage, rent))
                        setTimeout(() => {console.log('store', store.getState())}, 500);
                    }}>
                        Previous
                </button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { name, address, city, state, zip_code, img, monthly_mortage, rent } = reduxState
    return {
        name: name, address: address, city: city, state: state, zip_code: zip_code,
        img: img, monthly_mortage: monthly_mortage, rent: rent
    }
}

connect(mapStateToProps, { setWizStep3 })(WizStep3)