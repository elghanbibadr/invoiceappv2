import React from 'react'

const InvoiceStatus = () => {
    return (
        <div className='flex  items-center bg-primaryColor w-fit py-3 px-5 rounded-md'>
            <span className='h-2 w-2 rounded-full inline-block bg-white'></span>
            <p className='font-bold text-sm ml-2'>Pending</p>
        </div>
    )
}

export default InvoiceStatus