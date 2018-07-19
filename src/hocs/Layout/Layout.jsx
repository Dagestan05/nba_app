import React, {Component} from 'react';

import "./Layout.css"

class Layout extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <p>Header</p>
        {this.props.children}
        <p>Footer</p>
      </div>
     );
  }
}
 
export default Layout;