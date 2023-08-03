import React from 'react'

const Card = ({ children, className, onClick }) => {
    return (
        <div onClick={onClick} className={`${className} bg-primaryColor p-6 rounded-md cursor-pointer`}>
            {children}
        </div>
    )
}

export default Card