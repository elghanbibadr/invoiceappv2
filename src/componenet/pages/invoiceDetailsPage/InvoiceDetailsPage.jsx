import React, { useContext, useEffect } from 'react'
import EditOrDeleteInvoiceBox from './EditOrDeleteInvoiceBox'
import InvoiceDetailsBox from './InvoiceDetailsBox'
import IconLeftArrow from "../../../../public/assets/icon-arrow-left.svg"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../store/AppContext'

const InvoiceDetailsPage = () => {
  const { invoices } = useContext(AppContext)
  const { id } = useParams();
  const currentShownInvoiceDetail = invoices.find(invoice => invoice.id === id)

  return (
    <div>
      <Link to="/home" className='flex cursor-pointer  items-center'>
        <img src={IconLeftArrow} alt="left arrow icon" />
        <p className='font-bold mx-3'>Go Back</p>
      </Link>
      <EditOrDeleteInvoiceBox status={currentShownInvoiceDetail.data.status} subId={currentShownInvoiceDetail.data.id} id={id} />
      <InvoiceDetailsBox subId={currentShownInvoiceDetail.data.id} clientName={currentShownInvoiceDetail.data.clientName} paymentDue={currentShownInvoiceDetail.data.paymentDue} createdAt={currentShownInvoiceDetail.data.createdAt} items={currentShownInvoiceDetail.data.items} />
    </div>
  )
}

export default InvoiceDetailsPage