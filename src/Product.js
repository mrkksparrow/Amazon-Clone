import React from 'react';
import "./Product.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Product({ id, title, image, price, rating, unfilledstar }) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                    {Array(unfilledstar).fill().map((_, i) => (
                        <p><StarBorderIcon></StarBorderIcon> </p>
                    ))}
                </div>
            </div>
            <img 
                src={image} alt=""
            />
            <button>Add to art</button>
        </div>
    );
}

export default Product
