import React, { useContext } from 'react'
import FilterInvoicesBar from "./FilterInvoicesBar/FilterInvoicesBar"
import InvoicesList from './invoicesList/InvoicesList'
import Container from '../../ui/Container'
import NoInvoiceYet from '../../ui/NoInvoiceYet'
import Modal from '../../ui/Modal'
import NewInvoiceForm from '../../addNewInvoice/NewInvoiceForm'
import { AppContext } from '../../../store/AppContext'
const Home = () => {
    const { Invoices } = useContext(AppContext)

    return (
        <Container>
            <FilterInvoicesBar />
            <NewInvoiceForm />
            {Invoices?.length !== 0 && <InvoicesList />}
            {Invoices?.length === 0 && <NoInvoiceYet />}
        </Container>
    )
}

export default Home