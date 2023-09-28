import axios from 'axios'
import React, { useReducer } from 'react'

import GamesReducer from './Reducer'
import GamesContext from './Context'

import { GET_ALL_CHILDS } from '../types'

const GamesState = ({children}) => {
    const initialState = {
        childs: []
    }

    const [state, dispatch] = useReducer(GamesReducer, initialState);

    const getChilds = async() => {
        const { data } = await axios.get("/api/child");
        dispatch({
            type: GET_ALL_CHILDS,
            payload: data
        })
    }

    return (
        <GamesContext.Provider
        value={{
            childs: state.childs,
            getChilds,
        }}
        >
        {children}
        </GamesContext.Provider>
    )
}

export default GamesState;