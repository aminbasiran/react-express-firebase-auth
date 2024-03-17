import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../firebaseConfig';


const Register = () => {

    const [email,setEmail] = useState("") 
    const [password,setPassword] = useState("") 

    const handleRegister = async(e) => {
        e.preventDefault()

        try {
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            const user = userCredential.user;
            console.log(user)
        } 
        
        
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        }

        finally{
            setEmail("")
            setPassword("")
        }


        

    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div className='flex gap-3 justify-center'>
                    <input className="p-2" type="text"  placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <input className="p-2" type="text"  placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="p-2 bg-fuchsia-400" type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register
