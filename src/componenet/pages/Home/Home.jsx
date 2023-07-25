import React from 'react'
import FilterInvoicesBar from "./FilterInvoicesBar/FilterInvoicesBar"
import InvoicesList from './invoicesList/InvoicesList'
import Container from '../../ui/Container'

const Home = () => {
    return (
        <Container>
            <FilterInvoicesBar />
            <InvoicesList />
        </Container>
    )
}

export default Home