import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.Init';
import { useState } from 'react';


const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()

  
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loginUser = result.user;
            console.log('User signed in:', loginUser);
            setUser(loginUser)
           
        })
        .catch(error => {
            console.error('Error signing in with Google:', error.message);
            
        });
    }
    const handleGoogleSignOut =()=>{
        signOut(auth)
        .then(result => {
            console.log(result)
            setUser(null)
        }  )
        .catch(error =>{
            console.log(error)
        })
    }

    const handleGitHubSignIn = () =>{
        signInWithPopup(auth,gitProvider)
        .then(result =>{
            const logUser = result.user
            console.log(logUser)
            setUser(logUser);
        
        })
    .catch(error =>{
        console.log(error)
    })
    }

    return ( 
        <div>
           { user? <button onClick={handleGoogleSignOut}>Sign Out</button>:
            <div>
                <button onClick={handleGoogleSignIn}>Google Log In</button>
                <button onClick={handleGitHubSignIn}>GitHub sign In</button>
            </div>
            }
            { user && <div>
                User: {user.displayName} <br />
                Photo:{user.photoURL}
            </div>}


        </div>
    );
};

export default Login;
