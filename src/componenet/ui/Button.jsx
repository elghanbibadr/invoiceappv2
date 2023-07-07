import React from 'react'

const Button = ({ children, className }) => {
    return (
        <button className={`${className} rounded-full text-[0.8rem]  leading-[0.93rem] capitalize text-white font-bold  py-[1rem] px-[1.5rem]`}>{children}</button>
    )
}

export default Button