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
        <div className='flex flex-col justify-center items-center border-2 border-emerald-600 p-8 sm:p-10 md:p-14 lg:p-20 rounded-xl w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[35%] mx-auto'>
            <form
            onSubmit={submitHandler}
             className='flex flex-col items-center justify-center w-full gap-4 sm:gap-5'>
                <input
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                value={email}
                required className='w-full outline-none border-2 border-emerald-500 rounded-full px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg md:text-xl bg-transparent placeholder:text-gray-500' type="email" placeholder='Enter email'/>
                <input
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                value={password}
                required className='w-full outline-none border-2 border-emerald-500 rounded-full px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg md:text-xl bg-transparent placeholder:text-gray-500' type="password" placeholder='Enter password'/>
                <button className='w-full outline-none bg-emerald-500 rounded-full px-5 py-3 sm:px-6 sm:py-4 text-base sm:text-lg md:text-xl text-white font-semibold hover:bg-emerald-600 transition-colors'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login