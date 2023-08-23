import React from 'react'

const InvoiceStatus = ({ className, status }) => {
    const boxBg = status === "paid" ? "bg-green-400" : status === "pending" ? "bg-[#f78d041c] opacity-50" : "bg-white";
    console.log(boxBg)
    console.log(status)
    return (
        <div className={`flex ${className} items-center ${boxBg} w-[100px] py-3 px-5 rounded-md`}>
            <span className={`h-[10px] w-[10px] rounded-full bg-white  block `}></span>
            <p className={`font-bold capitalize text-sm ml-2 ${status === "paid" ? "text-green-400" : status === "pending" ? "text-orange-400" : "text-white"}`}>{status}</p>
        </div>
    )
}

export default InvoiceStatus