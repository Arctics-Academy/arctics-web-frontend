import React, {useReducer, useState} from 'react'

export const ParamContext = React.createContext()

const initState = {
    email: '',
    username: '',
    identity: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                email: action.payload.email,
                username: action.payload.username,
                identity: action.payload.identity
            }
        default:
            return state
    }
}

const ContextReducer = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const [login, setLogin] = useState(false)

    return (
        <ParamContext.Provider value={{Info: state, setInfo: dispatch, isLogin: login, setLogin: setLogin}}>
            {children}
        </ParamContext.Provider>
    )
}

export default ContextReducer