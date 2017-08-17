import { NEW_SEARCH } from '../actions/types';

export default function (state = { search: null }, action) {
    switch (action.type) {
        case NEW_SEARCH:
            return {...state, search: action.payload.data };

        default:
            return state;
    }
};
