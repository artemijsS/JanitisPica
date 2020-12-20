export const addItemToCart = (itemObj) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: itemObj
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})

export const removeItem = (obj) => ({
    type: 'REMOVE_ITEM',
    payload: obj
})

export const minusItem = (obj) => ({
    type: 'MINUS_ITEM',
    payload: obj
})

export const plusItem = (obj) => ({
    type: 'PLUS_ITEM',
    payload: obj
})