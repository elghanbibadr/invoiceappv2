import { signInAnonymously, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from './firebase.js';

const Login = () => {
    const handleViewAsDemo = async () => {
        try {
            // Sign in anonymously
            await signInAnonymously(auth);
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
