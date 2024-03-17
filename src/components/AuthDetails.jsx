import React, {useEffect} from 'react'
import { signOut,onAuthStateChanged  } from "firebase/auth";
import auth from '../firebaseConfig';

const AuthDetails = ({user,setUser}) => {

    useEffect(()=>{

        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.metadata.creationTime === user.metadata.lastSignInTime) {
                    console.log('User account was just created (registered).');
                } 
                
                else {
                    console.log("a user has signed in")
                    setUser(user)
                    // Perform actions specific to login
                }
            }
                
            else {
                console.log('User is logged out!');
                setUser(null)
            }
        })


        return () => listen
    },[])

    const handleSignOut = async() => {
        try {
            await signOut(auth)
            setUser(null)
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
        {user ? <h1>Your are signed in : {user.email}</h1> :<h1>Your are signed out</h1>}
        <button onClick={handleSignOut} className='p-1 cursor-pointer bg-indigo-400' type='button'>Sign out</button>
        </div>
    )
}

export default AuthDetails
