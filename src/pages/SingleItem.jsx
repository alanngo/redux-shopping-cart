
import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/actions';
const SingleItem = ({ currentItem, addToCart }) =>
(
    currentItem ?
        <div className='SingleItem'>
            <h1>{currentItem.title}</h1>
            <button onClick={() => addToCart(currentItem.id)}><h2>add to cart</h2></button>
        </div> : <>cannot get current item</>

)

const mapStateToProps = (state) =>
(
    {
        currentItem: state.shop.currentItem,
    }
)
const mapDispatchToProps = (dispatch) =>
(
    {
        addToCart: (id) => dispatch(addToCart(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
