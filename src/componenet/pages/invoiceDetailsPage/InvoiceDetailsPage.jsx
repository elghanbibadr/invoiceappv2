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
      <EditOrDeleteInvoiceBox status={currentShownInvoiceDetail?.status} docId={currentShownInvoiceDetail?.docId} id={currentShownInvoiceDetail?.id} />
      <InvoiceDetailsBox id={currentShownInvoiceDetail?.id} clientName={currentShownInvoiceDetail?.clientName} paymentDue={currentShownInvoiceDetail?.paymentDue} createdAt={currentShownInvoiceDetail?.createdAt} items={currentShownInvoiceDetail?.items} />
    </div>
  )
}

export default InvoiceDetailsPage