import * as React from "react"

function Cart(props) {
    return (
        <svg width={24} height={24} viewBox="0 0 64 64" fill="none" {...props}>
            <path
                d="M23 60a4 4 0 100-8 4 4 0 000 8zM49 60a4 4 0 100-8 4 4 0 000 8zM3 4h8l4 16h46l-8 24H23a4 4 0 100 8h32"
                stroke="#202020"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Cart;