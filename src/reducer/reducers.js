import * as actionTypes from '../actions/types'

const INTIAL_STATE = 
{
    products: 
    [
        {
            id: 0,
            title: "i9 10900k",
            desc: "intel CPU",
            price: 400,
            img: "https://images-na.ssl-images-amazon.com/images/I/71J2jBmoOaL._AC_SX466_.jpg"
        },
        {
            id: 1,
            title: "razer hyperflux",
            desc: "mouse mousepad combo",
            price: 330,
            img: "https://assets2.razerzone.com/images/pnx.assets/c9a9621af3697614d6f17bcaf4921f46/hyperflux-usp3-mobile.jpg"
        },
        {
            id: 2,
            title: "MSI Monitor",
            desc: "gaming monitor",
            price: 1630,
            img: "https://images-na.ssl-images-amazon.com/images/I/51l6pMgAH2L._AC_SL1024_.jpg"
        }
    ], // {id, title, descr, price, img}
    cart: [], // {id, title, descr, price, img, qty}
    currentItem: null
}

const shopReducer = (state = INTIAL_STATE, action) =>
{
    switch(action.type)
    {
        case actionTypes.ADD_TO_CART:
            // get item's data from products array
            const item = state.products.find(prod => prod.id === action.payload.id)
            // check if item in cart
            const inCart = state.cart.find(item => item.id === action.payload.id ? true: false)
            return {
                ...state,
                cart: inCart? 
                state.cart.map( item => 
                    item.id === action.payload.id? 
                    {...item, qty: item.qty+1}: item): 
                [...state.cart, {...item, qty: 1}]
            }
        case actionTypes.REMOVE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !==action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item=> item.id ===action.payload.id ? 
                    {...item, qty: Number(action.payload.qty)}:
                    item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state
    }
}
export default shopReducer