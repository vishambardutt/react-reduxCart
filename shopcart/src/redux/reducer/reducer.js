let initialState = {
    carts: []
};

export let cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DD_TO_CAR": return {
            ...state,
            carts: [...state.carts, action.payload]
        }
        default: return state

    }

}