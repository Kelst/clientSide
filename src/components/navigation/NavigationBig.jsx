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
      <img src={logo} width={150} height={100} className=' absolute left-2 top-[1px]'/>

      <ul>
        <li className={clases.list +' '+ `${activeItem=='Item1'? clases.active:''}`}
        onClick={()=>handleSetActive('Item1')}
        >
          <a href="#">
            <span className={clases.icon}><PermIdentityIcon fontSize='large' /></span>
            <span className={clases.text}>Загальне</span>
          </a>
        </li>
        <li className={clases.list +' '+ `${activeItem=='Item2'? clases.active:''}`}
         onClick={()=>handleSetActive('Item2')}
        >
          <a href="#">
            <span className={clases.icon}><PaidIcon fontSize='large' /></span>
            <span className={clases.text}>Оплати</span>
          </a>
        </li>
        <li className={clases.list +' '+ `${activeItem=='Item3'? clases.active:''}`}
         onClick={()=>handleSetActive('Item3')}
        >
          <a href="#">
            <span className={clases.icon}><InfoIcon fontSize='large' /></span>
            <span className={clases.text}>Додатково</span>
          </a>
        </li>
        <li className={clases.list +' '+ `${activeItem=='Item4'? clases.active:''}`}
         onClick={()=>handleSetActive('Item4')}
        >

          <a href="#">
            <span className={clases.icon}><NewspaperIcon fontSize='large'  /></span>
            <span className={clases.text}>Новини </span>
          </a>
        </li>
        <li className={clases.list +' '+ clases.logout }
        //  onClick={()=>handleSetActive('Item4')}
        >

          <a href="#">
            <span className={clases.icon}><LogoutIcon fontSize='large' /></span>
            <span className={clases.text}>Вийти</span>
          </a>
        </li>

        <div className={clases.indicator}></div>
      </ul>
        
    </div>
    </div>
  )
}
