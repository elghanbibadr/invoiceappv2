import React, { useContext, useEffect, useState } from 'react';
import checkIcon from "../../../public/assets/icon-check.svg";
import Card from './Card';
import arrow from "../../../public/assets/icon-arrow-down.svg";
import { AppContext } from '../../store/AppContext';

const dropDownItems = [
    { id: "1", text: "draft" },
    { id: "2", text: "pending" },
    { id: "3", text: "paid" }
];

const DropDown = () => {
    const { invoices, setInvoices, setFilteredInvoices } = useContext(AppContext);
    const [activeBox, setActiveBox] = useState(null);
    const [dropDownCollapsed, setDropDownCollapsed] = useState(false);
    const currentActiveBox = dropDownItems.find(item => item.id === activeBox);


    // console.log(currentActiveBox)

    const handleOptionSelected = (boxId) => {
        // If the clicked option is already active, reset activeBox to null
        setActiveBox((prevActiveBox) => (prevActiveBox === boxId ? null : boxId));
    };

    const handleDropDownCollapsed = () => setDropDownCollapsed(prev => !prev);

    useEffect(() => {
        if (!activeBox) {
            setFilteredInvoices(invoices); // Reset to the original state when no filter is applied
            return;
        }

        const filteredInvoices = invoices.filter(invoice => invoice.data.status === currentActiveBox.text);
        setFilteredInvoices(filteredInvoices); // Update the filtered state
    }, [activeBox, invoices]);

    return (
        <div className='relative'>
            <div className='flex items-center' onClick={handleDropDownCollapsed}>
                <h4 className='cursor-pointer'>Filter by status</h4>
                <img className={`ml-2 mt-1 ${dropDownCollapsed ? "rotate-180" : "rotate-0"} transition-transform duration-300`} src={arrow} alt="arrow icon" />
            </div>
            {dropDownCollapsed && (
                <Card className="w-fit absolute z-20 right-2 top-8 pr-14">
                    {dropDownItems.map(({ id, text }) => (
                        <div onClick={() => handleOptionSelected(id)} key={id} className='flex items-center mb-4'>
                            <span className={`h-4 w-4 rounded-sm inline-flex justify-center items-center ${activeBox === id ? 'bg-accentColor' : 'bg-secondaryColor'}`}>
                                {activeBox === id && <img src={checkIcon} alt='check icon' />}
                            </span>
                            <p className='font-bold ml-2 capitalize'>{text}</p>
                        </div>
                    ))}
                </Card>
            )}
        </div>
    );
};

export default DropDown;
