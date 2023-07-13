import { signInAnonymously, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../../../../public/firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const handleViewAsDemo = async () => {
        try {
            // Sign in anonymously
            await signInAnonymously(auth);
            console.log(auth.currentUser)
            // navigate user to home page
            // if (auth.currentUser) {
            //     navigate('/home');

            // }
            // Fetch invoices for demo user

            // Add your logic to fetch invoices from Firestore
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
