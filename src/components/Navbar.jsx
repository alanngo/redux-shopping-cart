
import { useState, useEffect } from 'react';
import React from 'react';
import "./Navbar.css"
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

const Navbar = ({cart}) => 
{
    const [cartCount, setCartCount] = useState(0)
    useEffect(() =>
    {
        let count = 0;
        cart.forEach(item => count+=item.qty)

        setCartCount(count)
    }, [cart, cartCount])
    
    return (
        <div className='Navbar'>
            <div align="right">
                <h1><Link to="/cart">🛒</Link> {cartCount} </h1>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>
(
    {
        cart: state.shop.cart,
    }
)

export default connect(mapStateToProps)(Navbar);
