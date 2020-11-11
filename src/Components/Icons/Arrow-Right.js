import * as React from "react"

function ArrowRight(props) {
    return (
        <svg width={24} height={24} viewBox="0 0 64 64" fill="none" {...props}>
            <path
                d="M28 21.002L41 32 28 43.002"
                stroke="#202020"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M32 62c16.569 0 30-13.431 30-30C62 15.431 48.569 2 32 2 15.431 2 2 15.431 2 32c0 16.569 13.431 30 30 30z"
                stroke="#202020"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowRight
