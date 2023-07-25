import React, { useContext, useState } from 'react'
// import { AppContext } from '../../../../store/AppContext'
import Card from "../../../ui/Card"
import Invoice from '../../../ui/Invoice'
import { AppContext } from "../../../../store/AppContext"

const InvoicesList = () => {
  const { invoices } = useContext(AppContext)

  console.log(invoices)
  return (
    <div>
      {invoices.map(({ id, data }) => (

        <Invoice key={id} data={data} />
      ))}
    </div>
  )
}

export default InvoicesList