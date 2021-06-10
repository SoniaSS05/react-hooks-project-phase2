import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'
import {Dropdown} from './Dropdown';
import './Navbar.css';
import Logo from '../images/Logo.jpg';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons';
import Ingredients from './Ingredients';


function Navbar(){
   
    const[sidebar, setSideBar] = useState(false);
    const itemMenu = Dropdown.map((item,index)=>{
    return( 
        <li key={index} className={item.cName}>
            <Link to ={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
        </li>      
    )})
        console.log('saliendo map')
    console.log(itemMenu[0]);
    function showSidebar(){
        console.log('entre aqui 1')
        setSideBar(!sidebar);
    }

    return (
        <div>
          <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={ sidebar ? 'nav-menu active': 'nav-menu' }>
              <ul className="nav=menu-items" onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className="menu-bars" >
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {itemMenu} 
              </ul>
          </nav>
          </IconContext.Provider>
        </div>
    )
}

export default Navbar;

