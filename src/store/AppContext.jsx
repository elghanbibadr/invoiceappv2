import { createContext, useState } from "react";

export const AppContext = createContext(null);


export const AppContextProvider = ({ children }) => {
    const [invoices, setInvoices] = useState([])

    const value = {
        invoices,
        setInvoices
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}
