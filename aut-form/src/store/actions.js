import {
    SUCCESSFUL_LOGIN,
    UNSUCCESSFUL_LOGIN,
} from './types'

export const credentialChecker = (username, password) => {
    if (username === "Admin" && password === "Password1") {
        return {
            type: SUCCESSFUL_LOGIN
        }
    } else {
        return {
            type: UNSUCCESSFUL_LOGIN
        }
    }
}