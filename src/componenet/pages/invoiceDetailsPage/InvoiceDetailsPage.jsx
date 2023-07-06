import React from 'react'
import Card from '../../ui/Card'

const InvoiceDetailsPage = () => {
    return (
        <Card>
            <div className='grid grid-cols-2'>
                <p className='font-bold mb-6 col-span-2'> <strong className='text-accentColor'>#</strong>TV6773</p>
                <div>
                    <p className='mb-2'>Invoice Date</p>
                    <h3>23 Dec 2022</h3>
                </div>
                <div>
                    <p className='mb-2'>Bill To</p>
                    <h3>gerorge bosh</h3>
                </div>
                <div className='col-span-2 my-5'>
                    <p className='mb-2'>Payment Due</p>
                    <h3>30 Dec 2022</h3>
                </div>
                <div>
                    <p className='mb-2'>Sent To</p>
                    <h3>mosh hemdanai</h3>
                </div>
            </div>
        </Card>
    )
}

export default InvoiceDetailsPage