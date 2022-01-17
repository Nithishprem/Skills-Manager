import {createContext, useState,useEffect} from 'react'

const UserContext=createContext()


export const UserProvider = ({children})=>{
 const [user, setUser]= useState(null)

    useEffect(()=>{
        if(!user && JSON.parse(localStorage.getItem('user'))){
            const userName=JSON.parse(localStorage.getItem('user')).name
            setUser(userName)
        }
        //eslint-disable-next-line
    },[])


 return <UserContext.Provider value={{
     user,
     setUser
 }}>
     {children}
 </UserContext.Provider>
}

export default UserContext