import {
    SUCCESSFUL_LOGIN,
    UNSUCCESSFUL_LOGIN,
    LOG_OUT,
    STORE_INFO
} from './consts'

const initialState = {
    authenticated: false,
    loginError: false,
    info: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESSFUL_LOGIN: 
            return {
                ...state,
                authenticated: true,
                loginError: false
            }
        case UNSUCCESSFUL_LOGIN:
            return {
                ...state,
                authenticated: false,
                loginError: true
            }
        case LOG_OUT:
            return {
                ...state,
                authenticated: false
            }
        case STORE_INFO:
            return {
                ...state,
                ifno: action.payload
            }
        default:
            return state
    }
}

export default reducer
