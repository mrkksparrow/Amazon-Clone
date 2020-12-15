import React from 'react';
import "./Product.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, unfilledstar }) {
    const [{ basket }, dispatch]= useStateValue();

    //console.log('this is the basket >>>', basket);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                unfilledstar: unfilledstar,
            },
        });
    };

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
                src={image}
            />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product
