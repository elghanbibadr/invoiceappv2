import { signInAnonymously, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../../../../public/firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from '../../../../public/firebase/FirebaseConfig';
import { useContext, useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { useEffect } from 'react';
import { AppContext } from '../../../store/AppContext';

const Login = () => {
    const { setInvoices } = useContext(AppContext)
    const [user, setUser] = useState(undefined)

    const navigate = useNavigate();

    const handleViewAsDemo = async () => {
        try {
            // Sign in anonymously
            await signInAnonymously(auth);
            if (!auth.currentUser) return;
            // Fetch invoices for demo user
            // Add your logic to fetch invoices from Firestore
            const querySnapshot = await getDocs(collection(db, 'demoinvoices'));
            const fetchedItems = [];
            querySnapshot.forEach((doc) => {
                fetchedItems.push({
                    id: doc.id,
                    data: doc.data()
                });
            });


            setInvoices(fetchedItems)

            // navigate user to home page
            navigate('/home');

        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    // const handleSignInWithGitHub = async () => {
    //     try {
    //         // Sign in with GitHub
    //         const provider = new GithubAuthProvider();
    //         await signInWithPopup(auth, provider);

    //         console.log(auth.currentUser)
    //         // if (auth.currentUser) {
    //         //     const collectionRef = collection(db, auth.currentUser.email, {});
    //         //     await addDoc(collectionRef);

    //         // }
    //         // create a new user document on firestore

    //         // Fetch invoices for GitHub user
    //         // Add your logic to fetch invoices from Firestore
    //     } catch (error) {
    //         console.error('Error signing in with GitHub:', error);
    //     }
    // };
    const handleSignInWithGitHub = async () => {
        try {
            const provider = new GithubAuthProvider();
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error('Error signing in with GitHub:', error);
        }
    };
    useEffect(() => {
        if (user) {
            // If the user is signed in, fetch invoices from Firestore
            const fetchInvoices = async () => {
                try {
                    const invoicesRef = collection(db, 'invoices');
                    const q = query(invoicesRef, where('userId', '==', user.uid));

                    const querySnapshot = await getDocs(q);
                    const invoicesData = querySnapshot.docs.map((doc) => doc.data());
                    console.log(invoicesData)
                    setInvoices(invoicesData);
                } catch (error) {
                    console.error('Error fetching invoices:', error);
                }
            };
            fetchInvoices();
            //   console.log(Invoice)
        }
    }, [user]);



    return (
        <div>
            <button onClick={handleViewAsDemo}>View as Demo</button>
            <button onClick={handleSignInWithGitHub}>Sign in with GitHub</button>
        </div>
    );
};

export default Login;
