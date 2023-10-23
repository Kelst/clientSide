import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useStore from '../../store/store'

export default function Layout() {
  const isAuth= useStore(store=>store.isAuth) 
  const navigate=useNavigate()
useEffect(()=>{
if(!isAuth){
  navigate("/login")
}
},[])
  return (
    <>
    
<h1>
  TESTUVANJA
</h1>
     <Outlet/>
      
    </>
  )
}
