import React, { useState } from 'react'

const Login = (props) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        setPassword("")
        setEmail("")
        props.handleLogin(email,password)
    }
  return (
    <div className='h-screen w-full flex items-center bg-[#1c1c1c] text-white justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form
            onSubmit={submitHandler}
             className='flex flex-col items-center justify-center'>
                <input
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                value={email}
                required className='outline-none border-2 border-emerald-500 rounded-full px-6 py-3 text-xl bg-transparent placeholder:text-gray-500' type="email" placeholder='Enter email'/>
                <input
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                value={password}
                required className='outline-none border-2 mt-4 border-emerald-500 rounded-full px-6 py-3 text-xl bg-transparent placeholder:text-gray-500' type="password" placeholder='Enter password'/>
                <button className='outline-none w-full border-2 mt-4 border-none bg-emerald-500 rounded-full px-6 py-3 text-xl text-white placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login