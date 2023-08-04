import React, { useContext } from 'react'
import EditOrDeleteInvoiceBox from './EditOrDeleteInvoiceBox'
import InvoiceDetailsBox from './InvoiceDetailsBox'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../store/AppContext'

const InvoiceDetailsPage = () => {
  const { invoices } = useContext(AppContext)
  const { id } = useParams();
  const { data: currentShownInvoiceDetail } = invoices.find(invoice => invoice.data.id === id)
  console.log(currentShownInvoiceDetail)

  return (
    <div>
      <EditOrDeleteInvoiceBox />
      <InvoiceDetailsBox clientName={currentShownInvoiceDetail.clientName} paymentDue={currentShownInvoiceDetail.paymentDue} createdAt={currentShownInvoiceDetail.createdAt} items={currentShownInvoiceDetail.items} />
    </div>
  )
}

export default InvoiceDetailsPage