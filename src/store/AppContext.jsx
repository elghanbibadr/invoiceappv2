import { createContext, useState, useEffect } from "react";
import { auth } from "../../public/firebase/FirebaseConfig";
import { data } from "../../public/data";
import { addDoc, deleteDoc } from "firebase/firestore";
import { orderBy } from "firebase/firestore";
import {
    where,
    collection,
    query,
    getDocs,
    onSnapshot // Step 1: Import onSnapshot
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../../public/firebase/FirebaseConfig";
import { useFetcher } from "react-router-dom";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {







    const [invoices, setInvoices] = useState([]);
    const [user, setUser] = useState(undefined);
    const [filteredInvoices, setFilteredInvoices] = useState(invoices);
    const value = {
        invoices,
        setInvoices,
        user,
        setUser,
        filteredInvoices,
        setFilteredInvoices,
    };

    console.log(invoices)

    let invoicesUnsubscribe; // Step 2: Variable to store the unsubscribe function

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribeAuth();
            if (invoicesUnsubscribe) {
                invoicesUnsubscribe(); // Clean up the invoices listener on unmount
            }
        };
    }, []);

    useEffect(() => {
        if (user) {
            const invoicesRef = collection(db, "invoices");
            const q = query(invoicesRef, where("email", "==", user.email));

            // Step 3: Use onSnapshot to listen to changes
            invoicesUnsubscribe = onSnapshot(q, (snapshot) => {
                const invoicesData = snapshot.docs.map((doc) => doc.data());
                setInvoices(invoicesData);
            });

            return () => {
                if (invoicesUnsubscribe) {
                    invoicesUnsubscribe(); // Clean up the invoices listener on unmount
                }
            };
        }
    }, [user]);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

























// import { createContext, useState, useEffect } from "react";
// import { auth } from "../../public/firebase/FirebaseConfig";
// import { where, collection, query, getDocs } from 'firebase/firestore';
// import { onAuthStateChanged } from "firebase/auth";
// import { db } from "../../public/firebase/FirebaseConfig";

// export const AppContext = createContext(null);

// export const AppContextProvider = ({ children }) => {
//     const [invoices, setInvoices] = useState([])
//     const [user, setUser] = useState(undefined)
//     const [filteredInvoices, setFilteredInvoices] = useState(invoices); // New state to store the filtered invoices

//     const value = {
//         invoices,
//         setInvoices,
//         user,
//         setUser,
//         filteredInvoices,
//         setFilteredInvoices,

//     }

//     useEffect(() => {
//         // Subscribe to the Firebase Auth state changes
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 // User is signed in
//                 setUser(user);
//             } else {
//                 // User is signed out
//                 setUser(null);
//             }
//         });

//         // Clean up the subscription on unmount
//         return () => unsubscribe();
//     }, []);


//     useEffect(() => {
//         if (user) {
//             // If the user is signed in, fetch invoices from Firestore
//             const fetchInvoices = async () => {
//                 try {
//                     const invoicesRef = collection(db, 'invoices');
//                     const q = query(invoicesRef, where('email', '==', user.email));
//                     const querySnapshot = await getDocs(q);
//                     const invoicesData = querySnapshot.docs.map((doc) => doc.data());
//                     setInvoices(invoicesData);
//                 } catch (error) {
//                     console.error('Error fetching invoices:', error);
//                 }
//             };
//             fetchInvoices();
//         }
//     }, [user]);



//     return <AppContext.Provider value={value}>
//         {children}
//     </AppContext.Provider>;
// }












