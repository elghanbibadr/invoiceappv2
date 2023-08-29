import React, { useState } from 'react'
import IconLeftArrow from "../../../public/assets/icon-arrow-left.svg"
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import Modal from '../ui/Modal'


const NewInvoiceForm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsCalendarOpen(false);
    };

    const handleCalendarToggle = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const formatShortWeekday = () => ""; // Empty string

    return (
        <Modal>
            <div className='bg-secondaryColor pb-[3rem] overflow-y-scroll px-6 pt-20 h-full md:w-1/2 left-10'>
                <Link to="/home" className='flex mb-10 cursor-pointer  md:hidden items-center'>
                    <img src={IconLeftArrow} alt="left arrow icon" />
                    <p className='font-bold mx-3'>Go Back</p>
                </Link>

                {/*------------ FORM ------- */}
                <h4 className='text-2xl md:text-3xl'>New Invoice</h4>
                {/* ----bill form ----- */}
                <form >
                    <h6 className='text-accentColor my-6 font-bold'> Bill From</h6>
                    {/* input field */}
                    <div className="form-inputField">
                        <label htmlFor="street">Street address</label>
                        <input type="text" name="street" id="street" />
                    </div>
                    {/* gridx3 */}
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                        {/* input field */}
                        <div className="form-inputField">
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" />
                        </div>
                        {/* input field */}
                        <div className="form-inputField">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" />
                        </div>
                        {/* input field */}
                        <div className="form-inputField col-span-2 md:col-span-1">
                            <label htmlFor="postcode">Post Code</label>
                            <input type="text" name="postcode" id="postcode" />
                        </div>
                    </div>
                    <h6 className='text-accentColor my-6 font-bold'> Bill To</h6>
                    {/* input field */}
                    <div className="form-inputField ">
                        <label htmlFor="ClientName">Client's Name</label>
                        <input type="text" name="clientName" id="clientName" />
                    </div>
                    {/* input field */}
                    <div className="form-inputField ">
                        <label htmlFor="ClientEmail">Client's Email</label>
                        <input type="text" name="clientEmail" id="clientEmail" />
                    </div>
                    {/* input field */}
                    <div className="form-inputField ">
                        <label htmlFor="ClientName">Client's Name</label>
                        <input type="text" name="clientName" id="clientName" />
                    </div>
                    {/* input field */}
                    <div className="form-inputField">
                        <label htmlFor="clientstreet">Street address</label>
                        <input type="text" name="clientstreet" id="clientstreet" />
                    </div>
                    {/* gridx3 */}
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                        {/* input field */}
                        <div className="form-inputField">
                            <label htmlFor="clientcountry">Country</label>
                            <input type="text" name="clientcountry" id="clientcountry" />
                        </div>
                        {/* input field */}
                        <div className="form-inputField">
                            <label htmlFor="clientcity">City</label>
                            <input type="text" name="clientcity" id="clientcity" />
                        </div>
                        {/* input field */}
                        <div className="form-inputField col-span-2 md:col-span-1">
                            <label htmlFor="clientpostcode">Post Code</label>
                            <input type="text" name="clientpostcode" id="clientpostcode" />
                        </div>
                    </div>
                    {/* date picker */}
                    <div className="form-inputField ">
                        <label htmlFor="invoiceDate">
                            Invoice Date

                        </label>
                        <input
                            type="text"
                            value={selectedDate.toDateString()}
                            onClick={handleCalendarToggle}
                            id='invoiceDate'
                            readOnly
                        />
                        {isCalendarOpen && (
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                className="custom-calendar"
                                formatShortWeekday={formatShortWeekday}
                                prev2Label={""} // Empty string to remove one arrow
                                next2Label={""} // Empty string to remove one arrow   prev2Label={""} // Empty string to remove one arrow
                                onClickDay={handleDateChange}
                            />
                        )}
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default NewInvoiceForm