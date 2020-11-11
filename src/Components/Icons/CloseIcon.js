import * as React from "react"

function CloseIcon(props) {
    return (
        <svg width={24} height={24} viewBox="0 0 64 64" fill="none" {...props}>
            <path
                d="M41.999 42.002L20 20m21.999.002l-22 22 22-22z"
                stroke="#202020"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default CloseIcon
