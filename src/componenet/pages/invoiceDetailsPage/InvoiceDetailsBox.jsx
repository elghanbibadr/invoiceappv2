import React from 'react'
import Card from '../../ui/Card'
import InvoiceSummaryTable from './InvoiceSummaryTable'
import InvoiceTotalBox from './InvoiceTotalBox'

const InvoiceDetailsBox = ({ clientName, paymentDue, createdAt }) => {

    return (
        <Card className="mt-10">
            <div className='grid grid-cols-2'>
                <p className='font-bold mb-16 col-span-2 md:col-span-3'> <strong className='text-accentColor'>#</strong>TV6773</p>
                <div>
                    <p className='mb-2'>Invoice Date</p>
                    <h3>{createdAt}</h3>
                </div>
                <div>
                    <p className='mb-2'>Bill To</p>
                    <h3>{clientName}</h3>
                </div>
                <div className='col-span-2 my-5'>
                    <p className='mb-2'>Payment Due</p>
                    <h3>{paymentDue}</h3>
                </div>
                <div className='md:col-start-3 md:row-start-2'>
                    <p className='mb-2'>Sent To</p>
                    <h3>mosh hemdanai</h3>
                </div>
            </div>
            <InvoiceSummaryTable />
            <InvoiceTotalBox />
        </Card>
    )
}

export default InvoiceDetailsBox