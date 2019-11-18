import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setWizStep2 } from '../../ducks/reducer';
import store from '../../ducks/store';


export default class WizStep2 extends Component {
    constructor() {
        super();
        this.state = {
            img: store.getState().img
        };
    }

    imgChangeHandler(event) {
        this.setState({ img: event.target.value })
    }

    render() {
        const {img} = this.state;
        return (
            <div>
                <input
                    value={img}
                    placeholder='image URL'
                    type='text'
                    onChange={e => this.imgChangeHandler(e)}
                />
             

                <Link to='/wizard/step1'>
                    <button onClick={(event) => {
                        store.dispatch(setWizStep2(img))
                        setTimeout(() => { console.log('store: ', store.getState()) }, 500);
                    }}>
                        Previous
                        </button>
                </Link>

                <Link to='/wizard/step3'>
                    <button onClick={(event) => {
                        store.dispatch(setWizStep2(img))
                        // setTimeout(() => { console.log('store: ', store.getState()) }, 500);
                    }}>
                        Next
                        </button>
                </Link>

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {img} = reduxState
    return {img: img}
}

connect(mapStateToProps, { setWizStep2 })(WizStep2)