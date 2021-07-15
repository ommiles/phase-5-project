export const toggleHomeState = () => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_HOME' })
    }
}

export const toggleSignupState = () => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_SIGNUP' })
    }
}

export const toggleLoginState = () => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_LOGIN' })
    }
}

export const toggleCartState = () => {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_CART' })
    }
}