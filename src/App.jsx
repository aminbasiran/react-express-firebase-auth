import { useState } from 'react'
import './App.css'
import  Login from './components/Login'
import Register from './components/Register'
import AuthDetails from './components/AuthDetails'

function App() {

  const [user,setUser] = useState(null)

  return (
    <div className='flex flex-col gap-4'>
      <Register/>
      <Login setUser={setUser}/>
      <AuthDetails user={user} setUser={setUser}/>
    </div>
  )
}

export default App
