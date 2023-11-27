import React, { useState } from "react";
import clases from "./Navigation.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidIcon from '@mui/icons-material/Paid';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LogoutIcon from '@mui/icons-material/Logout';
import useStore from "../../store/store";
import KeyboardTabOutlinedIcon from '@mui/icons-material/KeyboardTabOutlined';
import IconMenuGridO from "../icons/IconMenuGrid0";

export default function Navigation() {

    const [active,setActive]=useState(false)
    const [activeItem, setActiveItem] = useState('Item1');
    const logOut=useStore(state=>state.logOut)
    const navigate=useNavigate()
    const handleLogOuth = async ()=>{
        try {
            
            await logOut()
            navigate("/login")

        }
        catch (e){

        }

    }
    const handleActiveItemSelect=(item)=>{
        setActiveItem(item)
    }
    const handleActiveNavigation=()=>{
        setActive(ac=>!ac)
    }
  return (
    <div className={`${clases.sideBar}    ${active?clases.active:''}`}>
    <nav >
      <ul>
        <li className={`${clases.logo}     `}>
          <div     className={` cursor-pointer mt-5 flex transition-transform  duration-300 ease-in  transform ${
      active ? 'rotate-180 translate-x-36' : ''
    }`}   onClick={handleActiveNavigation}>
          {/* <KeyboardTabOutlinedIcon  className={active?'    ml-auto': `  `} /> */}
          <IconMenuGridO/>
          </div>
        </li>

        <div className={clases.menuList}>
          <li style={{'--bg': '#FFA500'}}
          className={activeItem=='Item1'?clases.active:""}
          onClick={()=>handleActiveItemSelect('Item1')}
          >
            <NavLink to={"#"}>
              <div className={clases.icon}><PermIdentityIcon/></div>
              <div className={clases.text}>Item1 </div>
            </NavLink>
          </li>
          <li style={{'--bg': '#00FF00'}}
                    className={activeItem=='Item2'?clases.active:""}
                    onClick={()=>handleActiveItemSelect('Item2')}
          >
            <NavLink to={"#"}>
              <div className={clases.icon}><PaidIcon/></div>
              <div className={clases.text}>Item2</div>
            </NavLink>
          </li>
          <li style={{'--bg': '#0000FF'}}
                    className={activeItem=='Item3'?clases.active:""}
                    onClick={()=>handleActiveItemSelect('Item3')}
          >
            <NavLink to={"#"}>
              <div className={clases.icon}><InfoIcon/></div>
              <div className={clases.text}>Item3</div>
            </NavLink>
          </li>
          <li style={{'--bg': '#FFFF00'}} 
                    className={activeItem=='Item4'?clases.active:""}
                    onClick={()=>handleActiveItemSelect('Item4')}
          >
            <NavLink to={"#"}>
              <div className={clases.icon}><NewspaperIcon/></div>
              <div className={clases.text}>Item4</div>
            </NavLink>
          </li>
          

        </div>
        <div className={clases.bottom}>
            <li style={{'--bg': '#FF69B4'}} 
                      className={activeItem=='Item5'?clases.active:""}
                      onClick={()=>handleActiveItemSelect('Item5')}
            >
            <NavLink  onClick={()=>handleLogOuth()}>
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
