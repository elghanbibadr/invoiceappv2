import React from 'react'
import illustrationEmpty from "../../../public/assets/illustration-empty.svg"

const NoInvoiceYet = () => {
    return (
        <div className='mt-20 text-center'>
            <img className='mx-auto' src={illustrationEmpty} alt="illustration-empty" />
            <h2 className='my-3'>There is nothing here</h2>
            <p className='text-[#888eb0]'>Create an invoice by clicking the New Invoice button and get started </p>
        </div >
    )
}

export default NoInvoiceYet