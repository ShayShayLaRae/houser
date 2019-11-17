import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class WizStep2 extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
            monthly_mortgage: '',
            rent: ''
        };
    }

    imgChangeHandler(event) {
        this.setState({ img: event.target.value })
    }

    monthly_mortgageChangeHandler(event) {
        this.setState({ monthly_mortgage: event.target.value })
    }

    rentChangeHandler(event) {
        this.setState({ rent: event.target.value })
    }


    render() {
        const { img, monthly_mortgage, rent } = this.state;
        return (
            <div>
                <input
                    value={img}
                    placeholder='image URL'
                    type='text'
                    onChange={e => this.imgChangeHandler(e)}
                />
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

                    <Link to='/wizard/step1'>
                        <button>
                            Previous
                        </button>
                    </Link>

                    <Link to='/wizard/step3'>
                        <button>
                            Next
                        </button>
                    </Link>

            </div>
        )
    }
}