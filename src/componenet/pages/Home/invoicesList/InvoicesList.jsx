import React, { useContext, useState } from 'react'
// import { AppContext } from '../../../../store/AppContext'
import { AppContext } from "../../../../store/AppContext"

const InvoicesList = () => {
  const { invoice } = useContext(AppContext)

  console.log(invoice)
  return (
    <div>InvoicesList</div>
  )
}

export default InvoicesList