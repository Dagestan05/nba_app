import React, { Component } from 'react';

import axios from 'axios';

import SliderTemplates from './sliderTemplates';


class NewsSlider extends Component {
  state = { 
    news: []
   }

  
  componentDidMount(){
    const {start, amount} = this.props
    axios.get(`http://localhost:3004/articles?_start=${start}&_end=${amount}`)
    .then(res=>{
      this.setState({news: res.data})
    })
  }
  render() { 
    const {type, settings} = this.props
    return ( 
      <div>
        <SliderTemplates 
              news={this.state.news} 
              type={type}
              settings = {settings}
              />
      </div>
     );
  }
}
 
export default NewsSlider;