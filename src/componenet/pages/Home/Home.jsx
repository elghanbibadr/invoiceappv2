import React from 'react'
import FilterInvoicesBar from "./FilterInvoicesBar/FilterInvoicesBar"
import InvoicesList from './invoicesList/InvoicesList'
const Home = () => {
    return (
        <div>
            <FilterInvoicesBar />
            <InvoicesList />
        </div>
    )
}

export default Home