
import React from 'react';
import CartItem from '../components/CartItem'
import {connect} from 'react-redux'
import { useState, useEffect } from 'react';

const Cart = ({cart}) => 
{
    const [totalCost, setTotalCost] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(()=>
    {
        let cost = 0
        let itemCount = 0
        cart.forEach(item =>
        {
            cost+=item.price *item.qty
            itemCount+= item.qty
        })
        setTotalCost(cost)
        setTotalItems(itemCount)
    }, [cart, totalCost, totalItems, setTotalCost, setTotalItems])
    return (
        <div className='Cart'>
        <h1>My Cart</h1>
        {
            cart.map(e =>
            (
                <div>
                    <CartItem
                    key={e.id}
                    itemData={e}/>
                </div>
            ))
        }
        <br/>
        <h1>Total Items: {totalItems}</h1>
        <h1>Total Cost: ${totalCost}</h1>
        </div>
    )
}

const mapStateToProps = (state) =>
(
    {
        cart: state.shop.cart,
    }
)

export default connect(mapStateToProps)(Cart);
