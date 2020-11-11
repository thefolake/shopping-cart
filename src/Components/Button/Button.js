import React from 'react';
import './_Button.scss';
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <button
            className='button'
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;