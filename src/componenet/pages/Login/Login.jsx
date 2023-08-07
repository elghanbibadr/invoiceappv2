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
    const [isLoading, setIsLoading] = useState(false)
    const { setInvoices, user, setUser } = useContext(AppContext)

    const navigate = useNavigate();

    const handleViewAsDemo = async () => {
        setIsLoading(true)
        try {
            // Sign in anonymously
            await signInAnonymously(auth);
            if (!auth.currentUser) return;
            // Fetch invoices for demo user
            const querySnapshot = await getDocs(collection(db, 'demoinvoices'));
            const fetchedItems = [];
            querySnapshot.forEach((doc) => {
                fetchedItems.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            setIsLoading(false)
            setInvoices(fetchedItems)
            setUser(auth.currentUser)
            // navigate user to home page
            navigate('/home');

        } catch (error) {
            console.error('Error signing in:', error);
        }
    };


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
        <>
            {isLoading && !user && <p className='text-white text-lg font-bold'>loading .....</p>}
            {!isLoading && !user && <Card className='w-fit mx-auto text-center'>
                <h1>Login</h1>
                <p className='my-4'>This is a portfolio project developed from a Front End Mentor challenge</p>
                <div>
                    <Button className="bg-primaryColor" onClick={handleViewAsDemo}>View as Demo</Button>
                    <Button className="bg-accentColor mx-2" onClick={handleSignInWithGitHub}>Sign in with GitHub</Button>
                </div>
            </Card>}
        </>
    );
};

export default Login;
