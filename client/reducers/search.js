import { NEW_DATA } from '../actions/types';

export default function (state = { search: null }, action) {
    switch (action.type) {
        case NEW_DATA:
            return {...state, data: action.payload };

        default:
            return state;
    }
};
