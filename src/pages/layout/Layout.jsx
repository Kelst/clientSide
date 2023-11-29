import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useStore from '../../store/store'
import Navigation from '../../components/navigation/Navigation'
import { Box } from '@mui/material'
import Loader from '../../components/loader/Loader'
import NavigationBig from '../../components/navigation/NavigationBig'

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
    <div className='pt-0 '>
           <Loader/>

    <div className='flex  gap-x-28 md:gap-x-0   '>
    <div className=' flex-shrink'>
     <Navigation  /> 
    <NavigationBig  />
    
    </div>
    <Outlet/>
    </div>

    </div>
  )
}
