import React, { useContext, useState } from 'react'
// import { AppContext } from '../../../../store/AppContext'
import Card from "../../../ui/Card"
import Invoice from '../../../ui/Invoice'
import { AppContext } from "../../../../store/AppContext"

const InvoicesList = () => {
  const { invoices, filteredInvoices } = useContext(AppContext)



  return (
    <div>
      {filteredInvoices && filteredInvoices.map(({ id, data }) => (
        <Invoice key={id} data={data} id={id} />
      ))}
    </div>
  )
}

export default InvoicesList