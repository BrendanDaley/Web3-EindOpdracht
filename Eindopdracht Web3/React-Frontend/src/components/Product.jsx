import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';

const Product = ({imageNumber, name, price, description, productId}) => {
    return (
        <div className="product">
        <img src={`SneakerPhotos\${imageNumber}`} alt={name}/>

        <div className="product__info">
            <p className="info__name">{name}</p>
            <p className="info__description">
            {description}
            </p>
            <p className="info__price">€{price}</p>
            <Link to={`/product/${productId}`} className="info__button">
            View
            </Link>
        </div>
        </div>
    )
}

export default Product
