import * as actionTypes from './types'

export const addToCart = (itemId) =>  
(
    {
        type: actionTypes.ADD_TO_CART,
        payload: 
        {
            id: itemId
        }
    }
)


export const removeFromCart = (itemId) => 
(
    {
        type: actionTypes.REMOVE_TO_CART,
        payload: 
        {
            id: itemId
        }
    }
)

export const adjustQty = (itemId, newValue) => 
(
    {
        type: actionTypes.ADJUST_QTY,
        payload: 
        {
            id: itemId,
            qty: newValue
        }
    }
)

export const loadCurrentItem = (item) => 
(
    {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
)