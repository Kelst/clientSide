import React, { useState } from 'react'
import clases from "./NavigationBig.module.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../assets/intelekt.png"
export default function NavigationBig() {
  const [activeItem,setActiveItem]=useState("Item1")
  const handleSetActive=(item)=>{

setActiveItem(item)
  }
  return (
    <div className={clases.container}>
    <div className={clases.navigation}>
      <img src={logo} width={210} height={200} className=' absolute left-[-23px] mt-8 '/>
        <span className=' absolute font-bold top-[80px]   left-5 uppercase text-white'>Особистий кабінет</span>
      <ul>
        <li className={clases.list +' '+ `${activeItem=='Item1'? clases.active:''}`}
        onClick={()=>handleSetActive('Item1')}
        >
          <a href="#">
            <span className={clases.icon}><PermIdentityIcon fontSize='medium' /></span>
            <span className={clases.text}>Загальне</span>
          </a>
        </li>
        <li className={clases.list +' '+ `${activeItem=='Item2'? clases.active:''}`}
         onClick={()=>handleSetActive('Item2')}
        >
          <a href="#">
            <span className={clases.icon}><PaidIcon fontSize='medium' /></span>
            <span className={clases.text}>Оплати</span>
          </a>
        </li>
        <li className={clases.list +' '+ `${activeItem=='Item3'? clases.active:''}`}
         onClick={()=>handleSetActive('Item3')}
        >
          <a href="#">
            <span className={clases.icon}><InfoIcon fontSize='medium' /></span>
            <span className={clases.text}>Додатково</span>
          </a>
        </li>
        <li className={clases.list +' '+ `${activeItem=='Item4'? clases.active:''}`}
         onClick={()=>handleSetActive('Item4')}
        >

          <a href="#">
            <span className={clases.icon}><NewspaperIcon fontSize='medium'  /></span>
            <span className={clases.text}>Новини </span>
          </a>
        </li>
        <li className={clases.list +' '+ clases.logout }
        //  onClick={()=>handleSetActive('Item4')}
        >

          <a href="#">
            <span className={clases.icon}><LogoutIcon className=' hover:text-white' fontSize='medium' /></span>
            <span className={clases.text}>Вийти</span>
          </a>
        </li>

        <div className={clases.indicator}></div>
      </ul>
        
    </div>
    </div>
  )
}
