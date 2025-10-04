import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { Authservies } from './Authservies'

// function Authservies() {


 export  const AuthProvider=({children})=>{
     const [user,setuser]=useState('')
  const creatcontext=createContext()
     
  useEffect(()=>{
    checkloginstatus
  },[])
    const checkloginstatus= async()=>{
        try {
            const response=await Authservies.checklogin()
            if(response.logden){
                const userdata=await Authservies.getcurrentuser()
                setuser(userdata)
            }
            // return response
        } catch (error) {
            
        }
    }

    const register= async(userdata)=>{
        try {
            const response= await Authservies.register(userdata)

            return response

            
        } catch (err) {
      setError(err.message);
      throw err;
    }
    }

    const login = async(credatials)=>{
       try {
         const  response=await Authservies.login(credatials)
         const getcurrentuser=await Authservies.getcurrentuser()
         setuser(getcurrentuser)

         return(response)
           

        
       } catch (error) {
        
       }
    }
    const  logout=async ()=>{
    try {
            const  response = await Authservies.logout()
            setuser(null)
            return response
    } catch (error) {
       throw error
        
    }

    }



    const changepassword= async(changepassword)=>{
        try {
            const response= await Authservies.changepassword(changepassword)
            setuser(response)
            return response
        } catch (error) {
            
        }
    }

    const forgetPassword= async(email)=>{
        try {
            const response= await Authservies.forgetPassword(email)
            setuser(response)
            return(response)
            
        } catch (error) {
            
        }
    }












    const value={
        user,
    register,
    login,
    logout,
    // checkloginstatus,
    changepassword
    ,forgetPassword
}

  return (<AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>)

}

export const useAuth = () => {
  const context = useContext(createContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 

// export default Authservies
