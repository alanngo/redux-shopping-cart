
import React ,{useState}from 'react';

import {connect} from "react-redux"
import { removeFromCart, adjustQty } from '../redux/actions/actions';
const CartItem = ({itemData, removeFromCart, adjustQty}) => 
{
    const [input, setInput] = useState(itemData.qty)
    const onChangeHandler = (e) =>
    {
        setInput(e.target.value)
        adjustQty(itemData.id, e.target.value)
    }
    return (
        <div className='CartItem'>

            <h1>{itemData.title}: ${itemData.price}</h1>
            <img src= {itemData.img} alt={itemData.title}></img>
            <p>{itemData.desc}</p>
            <input 
            min="1"
            type ="number" 
            id="qty" 
            value ={input}
            onChange={onChangeHandler}/>
            <button onClick={() => removeFromCart(itemData.id)}><h3>❌</h3></button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => 
(
    {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
)

export default connect(null, mapDispatchToProps)(CartItem);
