import React from 'react';
import style from './header.css'
import {Link} from 'react-router-dom'

import FontAwsome from "react-fontawesome";
import SideNav from './SideNav/sideNav';
const Header = (props) => {

  const logo = () =>{
    return(
      <Link to="/" className={style.logo}>
        <img src="/images/nba_logo.png" alt="nba logo"/>
      </Link>
    )
  }

  const navBars = ()=>(
    <div className={style.bars}>
      <FontAwsome name="bars" onClick={props.onOpenNav}/>
    </div>
  )

  return ( 
    <header className={style.header}>
      <SideNav {...props}/>
      <div className={style.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
   );
}
 
export default Header;