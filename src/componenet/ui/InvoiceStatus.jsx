import React from 'react'

const InvoiceStatus = ({ className, status }) => {
    return (
        <div className={`flex ${className} items-center bg-primaryColor w-[100px] py-3 px-5 rounded-md`}>
            <span className={`h-2 w-2 rounded-full inline-block ${status === "paid" ? "bg-green-400" : status === "pending" ? "bg-orange-400" : "bg-white"}`}></span>
            <p className={`font-bold capitalize text-sm ml-2 ${status === "paid" ? "text-green-400" : status === "pending" ? "text-orange-400" : "text-white"}`}>{status}</p>
        </div>
    )
}

export default InvoiceStatus