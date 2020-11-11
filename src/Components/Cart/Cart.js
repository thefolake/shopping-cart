import React from 'react';
import './_Cart.scss';
import PropTypes from 'prop-types';

const Cart = props => {
    return (
        <div className={`cart ${props.active ? 'active' : ''}`}>
            <div className='cart-holder'>
                <div>{props.children}</div>
            </div>
        </div>
    )
};

Cart.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.bool,
};

export default Cart;