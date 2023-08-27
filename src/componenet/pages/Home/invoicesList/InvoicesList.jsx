import React, { useContext, useState } from 'react'
// import { AppContext } from '../../../../store/AppContext'
import Card from "../../../ui/Card"
import Invoice from '../../../ui/Invoice'
import { AppContext } from "../../../../store/AppContext"

const InvoicesList = () => {
  const { invoices, filteredInvoices } = useContext(AppContext)



  return (
    <div>
      {filteredInvoices && filteredInvoices.map(({ id, clientName = { clientName }, createdAt = { createdAt }, total = { total }, status = { status } }) => (
        <Invoice key={id} id={id} clientName={clientName} createdAt={createdAt} total={total} status={status} />
      ))}
    </div>
  )
}

export default InvoicesList