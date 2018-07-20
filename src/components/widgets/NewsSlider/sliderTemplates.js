import React from 'react';

import Slick from 'react-slick';

import styles from "./slider.css"
import { Link } from 'react-router-dom';

const SliderTemplates = (props) => {
  let template = null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
  };

  switch (props.type) {
    case "featured":
      template = props.news.map((newsI, i)=>{
        return (
          <div key={newsI.id}>
            <div className={styles.featured_item}>
              <div className={styles.featured_image}
                    style={{background: `url(../images/articles/${newsI.image})`}}>

              </div>
              <Link to={`/articles/${newsI.id}`}>
                <div className={styles.featured_title}>
                  {newsI.title}
                </div>
              </Link>
            </div>
          </div>
        )
      })
      break;
    case "other":
      break;
  
    default:
      template= null;
  }
    return ( 
    <Slick {...sliderSettings} >
       {template}
    </Slick>
   );
}
 
export default SliderTemplates;