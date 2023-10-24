import React, { useState } from "react";
import clases from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Navigation() {

    const [active,setActive]=useState(false)

    const handleActiveNavigation=()=>{
        setActive(ac=>!ac)
    }
  return (
    <div className={`${clases.sideBar} ${active?clases.active:''}`}>
    <nav >
      <ul>
        <li className={clases.logo}>
          <div onClick={handleActiveNavigation}>
            
            <div className={clases.text}> logo</div>
          </div>
        </li>

        <div className={clases.menuList}>
          <li style={{'--bg': '#FF0000'}}>
            <NavLink to={"#"}>
              <div className={clases.icon}><PermIdentityIcon/></div>
              <div className={clases.text}>Item1</div>
            </NavLink>
          </li>
          <li style={{'--bg': '#00FF00'}} >
            <NavLink to={"#"}>
              <div className={clases.icon}><PaidIcon/></div>
              <div className={clases.text}>Item2</div>
            </NavLink>
          </li>
          <li style={{'--bg': '#0000FF'}} >
            <NavLink to={"#"}>
              <div className={clases.icon}><InfoIcon/></div>
              <div className={clases.text}>Item3</div>
            </NavLink>
          </li>
          <li style={{'--bg': '#FFFF00'}}>
            <NavLink to={"#"}>
              <div className={clases.icon}><NewspaperIcon/></div>
              <div className={clases.text}>Item4</div>
            </NavLink>
          </li>
          

        </div>
        <div className={clases.bottom}>
            <li style={{'--bg': '#FF69B4'}} >
            <NavLink to={"#"}>
              <div className={clases.icon}><LogoutIcon/></div>
              <div className={clases.text}>LogOut</div>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
    </div>
  );
}
