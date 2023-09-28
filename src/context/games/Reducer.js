import { GET_ALL_CHILDS } from "../types";


export default (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_ALL_CHILDS:
            return {...state, childs: payload}
        default:
            return state;
    }
}