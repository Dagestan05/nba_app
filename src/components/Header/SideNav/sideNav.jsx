import React from 'react';
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sideNavItems';

const SideNavigation = (props) => {
  return ( 
    <div>
      <SideNav
        showNav={props.showNav} //Trigger when navigation opens
        onHideNav={props.onHideNav} //Trigger when navigation close
        //Style for nav element
        navStyle={{
          background: "#242424",
          maxWidth: '300px'
        }}
      >
        <SideNavItems/>
      </SideNav>
    </div>
   );
}
 
export default SideNavigation;