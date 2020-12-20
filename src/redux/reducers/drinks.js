const initialState = {
    items: [],
    isLoaded: false
}

const drinks = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DRINKS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case 'SET_DRINKS_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state
    }
}

export default drinks;