import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthData = createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)

   useEffect(function(){
    setLocalStorage()
    const {employee} = getLocalStorage()
    setUserData(employee)
},[])
    
    
  return (
    <div>
        <AuthData.Provider value={[userData,setUserData]}>
            {children}
        </AuthData.Provider>
    </div>
  )
}

export default AuthProvider