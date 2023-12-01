import React, { useState } from 'react'
import clases from "./NavigationBig.module.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../../assets/intelekt.png"
import minLogo from "../../assets/min-logo.png"
export default function NavigationBig() {
  const [activeItem,setActiveItem]=useState("Item1")
  const handleSetActive=(item)=>{

setActiveItem(item)
  }
  return (
    <div className=' '>
      <div className='w-[200px] h-[100px] sm:w-[360px] md: bg-white fixed left-[calc(50%-60px)] sm:left-[calc(50%-90px)]   top-2  rounded-md'>
        <img src={minLogo} width={'100px'} height={'100px'} className=' absolute  left-[49px] sm:left-[130px] top-[-2px]' alt="" />
            <div className='p-2 text-center font-bold  cursor-pointer  uppercase hover:shadow-red-900  mx-2 shadow-none mt-10 text-xs'>Особистий кабінет</div>
      </div>
    <div className={ ' transition-all duration-500 bg-slate-100 -translate-y-80 md:translate-y-[0px]' +' '+clases.navigation }>
      <img src={logo} width={210} height={200} className=' absolute left-[-23px] mt-8 '/>
        <div className=' absolute font-bold top-[90px] transition-all duration-500  left-0 uppercase text-white  2xl:top-[21px] 2xl:left-60 2xl:text-black'> <span className={clases.spanText}> Особистий кабінет</span>  </div>
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
