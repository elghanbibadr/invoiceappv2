import React from 'react'


const InvoiceSummaryTable = ({ items }) => {
    const totalSum = items?.reduce((acc, obj) => acc + obj.total, 0);

    return (
        <>

            <table className='w-full mt-6   bg-darkBlue rounded-t-lg  '>
                <thead >
                    <tr>
                        <td className='p-3' > Item Name</td>
                        <td>QTY.</td>
                        <td>Price</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody >
                    {items && items.map(({ total, quantity, price, name }, index) => {
                        return <tr key={index}>
                            <td className='p-3' >{name}</td>
                            <td >{quantity}</td>
                            <td >${price}</td>
                            <td >${total}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div className='bg-[#0c0e16] flex  justify-between items-center p-4 rounded-b-xl'>
                <p>Grand Total</p>
                <h1>${totalSum.toFixed(2)}</h1>
            </div>
        </>
    )
}

export default InvoiceSummaryTable