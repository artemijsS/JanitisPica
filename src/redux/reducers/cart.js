const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

// const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            let totalFinalPrice = parseFloat((state.totalPrice + action.payload.finalPrice).toFixed(2));
            let itemTotalPrice;
            try {
                itemTotalPrice = parseFloat((state.items[action.payload.id][action.payload.finalSize].totalPrice + action.payload.finalPrice).toFixed(2));
            } catch (e) {

            }


            return {
                items: {
                    ...state.items,
                    [action.payload.id]:
                        !state.items[action.payload.id]
                            ? {[action.payload.finalSize]: {[action.payload.id]: action.payload, totalCount: 1, totalPrice: action.payload.finalPrice}, totalItemCount: 1}
                            : !state.items[action.payload.id][action.payload.finalSize]
                                ? {...state.items[action.payload.id], totalItemCount: state.items[action.payload.id].totalItemCount + 1, [action.payload.finalSize]: {[action.payload.id]:action.payload, totalCount: 1, totalPrice: action.payload.finalPrice}}
                                : {...state.items[action.payload.id], totalItemCount: state.items[action.payload.id].totalItemCount + 1, [action.payload.finalSize]: {[action.payload.id]:action.payload, totalCount: state.items[action.payload.id][action.payload.finalSize].totalCount + 1, totalPrice: itemTotalPrice}}
                },
                totalPrice: totalFinalPrice,
                totalCount: state.totalCount + 1
            }
        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        case 'REMOVE_ITEM':
            let totalFinalPriceV = parseFloat((state.totalPrice - action.payload.finalPrice).toFixed(2));
            if (Object.keys(state.items[action.payload.id]).length < 3) {
                delete state.items[action.payload.id]
            }
            else {
                delete state.items[action.payload.id][action.payload.finalSize];
                state.items[action.payload.id].totalItemCount -= 1;
            }

            return {
                items: {
                    ...state.items
                },
                totalPrice: totalFinalPriceV,
                totalCount: state.totalCount - action.payload.totalCount
            }
        case 'MINUS_ITEM':
            let totalFinalPriceV0 = parseFloat((state.totalPrice - action.payload.finalPrice).toFixed(2));
            let itemTotalPriceV0 = parseFloat((state.items[action.payload.id][action.payload.finalSize].totalPrice - action.payload.finalPrice).toFixed(2));
            if (state.items[action.payload.id][action.payload.finalSize].totalCount === 1) {
                return {
                    ...state
                }
            }
            return {
                items: {
                    ...state.items,
                    [action.payload.id]:
                        {...state.items[action.payload.id], totalItemCount: state.items[action.payload.id].totalItemCount - 1, [action.payload.finalSize]: {[action.payload.id]:action.payload, totalCount: state.items[action.payload.id][action.payload.finalSize].totalCount - 1, totalPrice: itemTotalPriceV0}}
                },
                totalPrice: totalFinalPriceV0,
                totalCount: state.totalCount - 1
            }
        case 'PLUS_ITEM':
            let totalFinalPriceV1 = parseFloat((state.totalPrice + action.payload.finalPrice).toFixed(2));
            let itemTotalPriceV1 = parseFloat((state.items[action.payload.id][action.payload.finalSize].totalPrice + action.payload.finalPrice).toFixed(2));
            return {
                items: {
                    ...state.items,
                    [action.payload.id]:
                        {...state.items[action.payload.id], totalItemCount: state.items[action.payload.id].totalItemCount + 1, [action.payload.finalSize]: {[action.payload.id]:action.payload, totalCount: state.items[action.payload.id][action.payload.finalSize].totalCount + 1, totalPrice: itemTotalPriceV1}}
                },
                totalPrice: totalFinalPriceV1,
                totalCount: state.totalCount + 1
            }
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload,
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.payload,
            }
        default:
            return state
    }
}

export default cart;