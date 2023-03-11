import React from 'react';
import LegendPhotoData from './LegendPhotoData';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName : 'dyazgbdqc'
  }
})

const legendImg = (value) => {
  return LegendPhotoData[value];
}

//ROULETTE SQUARE
function LegendSquare({ legend }) {
    legendImg(legend)
    return (
      <div className="square v-spacer">
        <AdvancedImage className="legend-pic" cldImg={cld.image(legendImg(legend))}/>
      </div>
    )
  } 

export default LegendSquare