
import React from 'react';

import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import {addToCart, loadCurrentItem} from '../redux/actions/actions'
const Product = ({prodData, addToCart, loadCurrentItem}) => 
(
        <div className='Product'>
        <table>
            <tr>
                <td><img src = {prodData.img} alt={prodData.title} width="100" height="100"/></td>
                <td><h1>{prodData.title}</h1></td>
                <td><button onClick={() =>addToCart(prodData.id)}><h2>add to cart</h2></button></td>
                <td><Link to={`/product/${prodData.id}`}><button onClick = { () =>loadCurrentItem(prodData)}><h2>view product</h2></button></Link></td>
            </tr>
            <tr>
                <td><p>{prodData.desc}</p></td>
            </tr>
        </table>
        {/* <h1>{prodData.title}: ${prodData.price}</h1>
        <img src= {prodData.img} alt={prodData.title}></img>
        <p>{prodData.desc}</p>
        <button onClick={() =>addToCart(prodData.id)}><h2>add to cart</h2></button>
        <button><h2>view product</h2></button> */}
        </div>
)

const mapDispatchToProps = (dispatch) => 
(
    {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
)

export default connect(null, mapDispatchToProps)(Product);
