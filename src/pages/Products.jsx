
import React from 'react';
import Product from '../components/Product'
import {connect} from 'react-redux'

import styles from "./Products.module.css";

const Products = ({products}) => 
(
        <div className={styles.products}>
        {
            products.map(p =>
            (
                <Product 
                key={p.id}
                prodData= {p}/>
            ))
        }
        </div>
)


const mapStateToProps = (state) =>
(
    {
        products: state.shop.products,
    }
)

export default connect(mapStateToProps)(Products);
