import React, { useContext } from 'react'
import EditOrDeleteInvoiceBox from './EditOrDeleteInvoiceBox'
import InvoiceDetailsBox from './InvoiceDetailsBox'
import IconLeftArrow from "../../../../public/assets/icon-arrow-left.svg"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../store/AppContext'

const InvoiceDetailsPage = () => {
  const { invoices } = useContext(AppContext)
  const { id } = useParams();
  const { data: currentShownInvoiceDetail } = invoices.find(invoice => invoice.data.id === id)

  return (
    <div>
      <Link to="/home" className='flex cursor-pointer  items-center'>
        <img src={IconLeftArrow} alt="left arrow icon" />
        <p className='font-bold mx-3'>Go Back</p>
      </Link>
      <EditOrDeleteInvoiceBox />
      <InvoiceDetailsBox clientName={currentShownInvoiceDetail.clientName} paymentDue={currentShownInvoiceDetail.paymentDue} createdAt={currentShownInvoiceDetail.createdAt} items={currentShownInvoiceDetail.items} />
    </div>
  )
}

export default InvoiceDetailsPage