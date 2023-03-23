import React from 'react';
import LegendPhotoData from './LegendPhotoData';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';
//import the data from the JSON file
import LegendData from './data/legend-data.json';

const cld = new Cloudinary({
  cloud: {
    cloudName : 'dyazgbdqc'
  }
})

const getLegendImg = (value) => {
  return LegendPhotoData[value];
}

const getLegendData = (value) => {
  return LegendData[value];
}


//ROULETTE SQUARE
function LegendSquare({ legend }) {
    //getLegendImg(legend)
    const currLegend = getLegendData(legend)
    return(
      <>
        <div className="column">         
          <div className="square v-spacer">
            <AdvancedImage className="legend-pic" cldImg={cld.image(getLegendImg(legend))}/>
          </div>
          <h1 className="title">
            {currLegend.legendName}
          </h1>
        </div>
      </>
    )
     
    
  } 

export default LegendSquare