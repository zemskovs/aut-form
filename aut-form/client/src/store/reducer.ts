import {
    SUCCESSFUL_LOGIN,
    UNSUCCESSFUL_LOGIN,
    LOG_OUT,
    STORE_INFO,
    CATEGORIES_LOADED,
    CATEGORIES_LOADED_ERROR,
} from './consts'

export interface IGlobalAppState {
    authenticated: boolean,
    loginError: boolean,
    categoriesLoaded: boolean,
    categories: any[],
    info: any[]
}

export interface IReducerAction {
    type: string,
    payload: any,
}

const initialState: IGlobalAppState = {
    authenticated: true,
    loginError: false,
    categoriesLoaded: false,
    categories: [],
    info: []
}

const reducer = (state = initialState, action: IReducerAction) => {
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
        case CATEGORIES_LOADED:
            return {
                ...state,
                categories: action.payload,
                categoriesLoaded: true,
            }
        case CATEGORIES_LOADED_ERROR:
            return {
                ...state,
                categoriesLoaded: false,
            }
        default:
            return state
    }
}

export default reducer
