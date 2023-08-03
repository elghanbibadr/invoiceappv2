import { signInAnonymously, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../../../../public/firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection, query } from 'firebase/firestore';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import { db } from '../../../../public/firebase/FirebaseConfig';
import { useContext, useState } from 'react';
import { AppContext } from '../../../store/AppContext';

const Login = () => {
    const { setInvoices, setUser } = useContext(AppContext)

    const navigate = useNavigate();

    const handleViewAsDemo = async () => {
        try {
            // Sign in anonymously
            await signInAnonymously(auth);
            if (!auth.currentUser) return;
            setUser(auth.currentUser)
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
            if (result.user) {
                navigate('/home');
            }
        } catch (error) {
            console.error('Error signing in with GitHub:', error);
        }
    };




    return (
        <Card className='w-fit mx-auto text-center'>
            <h1>Login</h1>
            <p className='my-4'>This is a portfolio project developed from a Front End Mentor challenge</p>
            <div>
                <Button className="bg-primaryColor" onClick={handleViewAsDemo}>View as Demo</Button>
                <Button className="bg-accentColor mx-2" onClick={handleSignInWithGitHub}>Sign in with GitHub</Button>
            </div>
        </Card>
    );
};

export default Login;
