import { createContext, useState, useEffect } from "react";
import { auth } from "../../public/firebase/FirebaseConfig";
import { where, collection, query, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../../public/firebase/FirebaseConfig";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [invoices, setInvoices] = useState([])
    const [user, setUser] = useState(undefined)
    const [filteredInvoices, setFilteredInvoices] = useState(invoices); // New state to store the filtered invoices

    console.log(auth.currentUser)
    const value = {
        invoices,
        setInvoices,
        user,
        setUser,
        filteredInvoices,
        setFilteredInvoices
    }
    useEffect(() => {
        // Subscribe to the Firebase Auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser(user);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        // Clean up the subscription on unmount
        return () => unsubscribe();
    }, []);


    useEffect(() => {
        if (user && !user.isAnonymous) {
            console.log(invoices)
            console.log('running')
            // If the user is signed in, fetch invoices from Firestore
            const fetchInvoices = async () => {
                try {
                    const invoicesRef = collection(db, 'invoices');
                    const q = query(invoicesRef, where('userId', '==', user.uid));
                    const querySnapshot = await getDocs(q);
                    const invoicesData = querySnapshot.docs.map((doc) => doc.data());
                    setInvoices(invoicesData);
                } catch (error) {
                    console.error('Error fetching invoices:', error);
                }
            };
            fetchInvoices();
            //   console.log(Invoice)
        }
    }, [user]);

    useEffect(() => {
        if (user && user.isAnonymous) {

            const fetchDemoInvoices = async () => {
                try {

                    // if (!auth.currentUser) return;
                    // setUser(auth.currentUser)
                    // Fetch invoices for demo user
                    const querySnapshot = await getDocs(collection(db, 'demoinvoices'));
                    const fetchedItems = [];
                    querySnapshot.forEach((doc) => {
                        fetchedItems.push({
                            id: doc.id,
                            data: doc.data()
                        });
                    });
                    setInvoices(fetchedItems)
                } catch (error) {
                    console.error('Error signing in:', error);
                }
            };
            fetchDemoInvoices()
        }


    }, [user])

    // useEffect(() => {
    //     setFilteredInvoices(invoices)
    // }, [invoices])

    console.log(filteredInvoices)
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}
