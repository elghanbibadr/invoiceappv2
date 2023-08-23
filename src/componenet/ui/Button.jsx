import React from 'react'

const Button = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`${className} rounded-full text-[0.8rem]  leading-[0.93rem] capitalize text-white font-bold mx-1 py-[1.2rem] px-[1.5rem]`}>{children}</button>
    )
}

export default Button