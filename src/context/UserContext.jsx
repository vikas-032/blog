import React from 'react'
import axios from 'axios'
import { createContext,useEffect,useState } from 'react'
import {URL} from "../url"

export const UserContext =createContext({})  
 
export default function userContext({children}){


    const [user, setUser] = userState(null)
    useEffect(() =>{
        getUser()
    }, [])

    const getUser = async()=>{
try{
    const res =await axios.get(URL+ '/api/auth/refe', {withCredentials: true})
    setUser(res.data)
}

catch(err){
console.log(err)
    }
}


    return(
   <UserContext.Provider value={(user, setUser)}>
    {children}
   </UserContext.Provider>
    )
}
