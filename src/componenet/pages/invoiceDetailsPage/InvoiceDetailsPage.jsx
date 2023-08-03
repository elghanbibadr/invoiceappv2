import React from 'react'
import EditOrDeleteInvoiceBox from './EditOrDeleteInvoiceBox'
import InvoiceDetailsBox from './InvoiceDetailsBox'
import { useParams } from 'react-router-dom'

const InvoiceDetailsPage = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <EditOrDeleteInvoiceBox />
      <InvoiceDetailsBox />
    </div>
  )
}

export default InvoiceDetailsPage