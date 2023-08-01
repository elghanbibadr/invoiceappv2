import { createContext, useState } from "react";
import { auth } from "../../public/firebase/FirebaseConfig";
export const AppContext = createContext(null);


export const AppContextProvider = ({ children }) => {
    const [invoices, setInvoices] = useState([])
    console.log(auth.currentUser)
    const value = {
        invoices,
        setInvoices
    }

    console.log(invoices)
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}
