import React , { Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home';
import Layout from './hocs/Layout/Layout';


class Routes extends Component {
  state = {  }
  render() { 
    return ( 
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Layout>
     );
  }
}
 
export default Routes;
