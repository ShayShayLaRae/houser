import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class WizStep1 extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip_code: ''
        };

    }


    nameChangeHandler(event) {
        this.setState({ name: event.target.value })
    }
    addressChangeHandler(event) {
        this.setState({ address: event.target.value })
    }
    cityChangeHandler(event) {
        this.setState({ city: event.target.value })
    }
    stateChangeHandler(event) {
        this.setState({ state: event.target.value })
    }
    zip_codeChangeHandler(event) {
        this.setState({ zip_code: event.target.value })
    }


    render() {
        console.log('Does it work?', this.props);
        
        const { name, address, city, state, zip_code } = this.state;
        return (
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
                <Link to='/wizard/step2'>
                    <button>
                        Next
                    </button>
                </Link>


            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

connect(mapStateToProps)(WizStep1)