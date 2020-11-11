import React from 'react';
import PropTypes from 'prop-types';
import './_Card.scss';

const Card = props => {
    return (
        <div className='card'>
            <div className='card_img'>
                <img src={props.image} alt={props.imageAlt}/>
            </div>
            <p>{props.title}</p>
            <p>{props.price}</p>
            {props.children}
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    imageAlt: PropTypes.string,
};

export default Card;