import React from 'react';

const InvoiceStatus = ({ className, status }) => {
    const boxBg = (status === "paid") ? "bg-[#33d69f0f]" : (status === "draft") ? "bg-[#dfe3fa0f]" : "bg-[#f78d041c]";

    return (
        <div className={`flex ${className} items-center ${boxBg} w-[100px] py-3 px-5 rounded-md`}>
            <span className={`h-[10px] w-[10px] rounded-full ${status === "paid" ? "bg-[#33d69f]" : status === "pending" ? "bg-[#ff8f00]" : "bg-white"} block`}></span>
            <p className={`font-bold capitalize text-sm ml-2 ${status === "paid" ? "text-[#33d69f]" : status === "pending" ? "text-orange-400" : "text-white"}`}>{status}</p>
        </div>
    );
}

export default InvoiceStatus;
