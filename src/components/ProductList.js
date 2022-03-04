import React from 'react'
import './productlist.css'

export default function ProductList(props) {
    const {img, name, price, alt} = props;
    return (
        <div className="product-list">
            <div>
                <img className="product" src={img} alt={alt}/>
            </div>
            <div>
                <p>
                    {name}
                </p> 
            </div>
            <div>
                <p>${price}</p>
            </div>
        </div>
    )
}