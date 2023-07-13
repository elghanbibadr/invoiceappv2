import { signInAnonymously, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../../../../public/firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../../public/firebase/FirebaseConfig';

const Login = () => {

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

            // navigate user to home page
            navigate('/home');

        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const handleSignInWithGitHub = async () => {
        try {
            // Sign in with GitHub
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            // Fetch invoices for GitHub user
            // Add your logic to fetch invoices from Firestore
        } catch (error) {
            console.error('Error signing in with GitHub:', error);
        }
    };

    return (
        <div>
            <button onClick={handleViewAsDemo}>View as Demo</button>
            <button onClick={handleSignInWithGitHub}>Sign in with GitHub</button>
        </div>
    );
};

export default Login;
