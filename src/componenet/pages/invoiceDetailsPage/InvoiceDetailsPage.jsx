import React, { useContext } from 'react'
import EditOrDeleteInvoiceBox from './EditOrDeleteInvoiceBox'
import InvoiceDetailsBox from './InvoiceDetailsBox'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../store/AppContext'

const InvoiceDetailsPage = () => {
  const { invoices } = useContext(AppContext)
  const { id } = useParams();
  console.log(invoices)
  const { data: currentShownInvoiceDetail } = invoices.find(invoice => invoice.data.id === id)
  console.log(currentShownInvoiceDetail)
  console.log(id)
  return (
    <div>
      <EditOrDeleteInvoiceBox />
      <InvoiceDetailsBox />
    </div>
  )
}

export default InvoiceDetailsPage