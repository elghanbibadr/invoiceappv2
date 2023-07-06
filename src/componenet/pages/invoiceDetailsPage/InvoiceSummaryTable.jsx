import React from 'react'


const InvoiceSummaryTable = () => {
    return (
        <table className='w-full mt-6 bg-darkBlue rounded-t-lg  '>
            <thead >
                <tr >
                    <td > Item Name</td>
                    <td>QTY.</td>
                    <td>Price</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>New Item</td>
                    <td>1</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                </tr>
            </tbody>
        </table>
    )
}

export default InvoiceSummaryTable