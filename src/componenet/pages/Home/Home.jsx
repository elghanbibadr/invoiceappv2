import React from 'react'
import FilterInvoicesBar from "./FilterInvoicesBar/FilterInvoicesBar"
import InvoicesList from './invoicesList/InvoicesList'
import Container from '../../ui/Container'
import NoInvoiceYet from '../../ui/NoInvoiceYet'
const Home = () => {
    return (
        <Container>
            <FilterInvoicesBar />
            <InvoicesList />
            <NoInvoiceYet />
        </Container>
    )
}

export default Home