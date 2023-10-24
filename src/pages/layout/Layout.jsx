import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useStore from '../../store/store'
import Navigation from '../../components/navigation/Navigation'
import { Box } from '@mui/material'

export default function Layout() {
  

  const checkUser= useStore(store=>store.checkUser)

  
  const navigate=useNavigate()
useEffect(()=>{

  const fetchData = async () => {
    try {
    let flag=  await checkUser();
     
      if (!flag) {
      
      navigate("/login");
    }
    } catch (error) {
    console.log("помилка в Layout при перевірці чи користувач авторизований");
    }
  };
  fetchData()

},[])
  return (
    <div className='p-3 '>
     
    <div className='flex  gap-28 '>
    <div className='relative'>
    <Navigation />
    </div>
    <Outlet/>
    </div>

    </div>
  )
}
