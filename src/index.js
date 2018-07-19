import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes';


const App = () => {
  return ( 
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
   );
}
 
export default App;


ReactDOM.render(<App />, document.getElementById('root'));
