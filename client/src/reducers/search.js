import { NEW_DATA, ERROR } from '../actions/types';

export default function (state = { error: false }, action) {
    switch (action.type) {
        case NEW_DATA:
            return {...state, forcast: action.payload, error: false };
        case ERROR:
            return {...state, error: action.payload };

        default:
            return state;
    }
};
