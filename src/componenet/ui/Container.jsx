import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='max-w-[1000px] p-6 mx-auto mt-10'>{children}</div>
    )
}

export default Container