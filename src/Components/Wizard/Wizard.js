import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import WizStep1 from './WizStep1';
import WizStep2 from './WizStep2';
import WizStep3 from './WizStep3';



export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            img: '',
            monthly_mortage: '',
            rent: ''
        };

    }

    clearInputs() {
        this.setState({ name: '', address: '', city: '', state: '', zip_code: '', img: '', monthly_mortage: '', rent: '' })
    }

    render() {

        return (
            <div>
                <Link to='/'>
                    <button onClick={event => {
                        this.clearInputs()
                    }}>
                        Cancel
                        </button>
                </Link>

                <Switch>
                    <Route path='/wizard/step1' component={WizStep1} />
                    <Route path='/wizard/step2' component={WizStep2} />
                    <Route path='/wizard/step3' component={WizStep3} />
                </Switch>
            </div>
        )
    }
}