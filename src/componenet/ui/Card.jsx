import React from 'react'

const Card = ({ children, className }) => {
    return (
        <div className={`${className} bg-primaryColor p-6 rounded-md cursor-pointer`}>
            {children}
        </div>
    )
}

export default Card