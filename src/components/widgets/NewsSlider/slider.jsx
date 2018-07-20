import React, { Component } from 'react';

import axios from 'axios';

import SliderTemplates from './sliderTemplates';


class NewsSlider extends Component {
  state = { 
    news: []
   }

  componentDidMount(){
    axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
    .then(res=>{
      this.setState({news: res.data})
    })
  }
  render() { 
    return ( 
      <div>
        <SliderTemplates news={this.state.news}/>
      </div>
     );
  }
}
 
export default NewsSlider;