// import axios from 'axios';

//Initial state
const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    img: '',
    monthly_mortgage: '',
    rent: ''
}

const SET_WIZSTEP1 = 'SET_WIZSTEP1';
const SET_WIZSTEP2 = 'SET_WIZSTEP2';
const SET_WIZSTEP3 = 'SET_WIZSTEP3';
const CANCEL_ALL = 'CANCEL_ALL';

//ACTION BUILDER
export const setWizStep1 = (name, address, city, state, zip_code) => {
    return {
        type: SET_WIZSTEP1,
        payload: { name: name, address: address, city: city, state: state, zip_code: zip_code }
    }
}
export const setWizStep2 = (img) => {
    return {
        type: SET_WIZSTEP2,
        payload: {img: img}
    }
}
export const setWizStep3 = (monthly_mortgage, rent) => {
    return {
        type: SET_WIZSTEP3,
        payload: {monthly_mortgage: monthly_mortgage, rent: rent}
    }
}
export const cancelAll = (initialState) => {
    return {
        type: CANCEL_ALL,
        payload: {initialState}
    }
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case SET_WIZSTEP1:
            return {
                ...state,
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip_code: action.payload.zip_code
            }
        case SET_WIZSTEP2:
            return {
                ...state,
                img: action.payload.img
            }

        case SET_WIZSTEP3:
            return {
                ...state,
                monthly_mortgage: action.payload.monthly_mortgage,
                rent: action.payload.rent
            }
        case cancelAll:
            return {
                name: '',
                address: '',
                city: '',
                state: '',
                zip_code: '',
                img: '',
                monthly_mortgage: '',
                rent: ''
            }

        default: return state
    }
}
