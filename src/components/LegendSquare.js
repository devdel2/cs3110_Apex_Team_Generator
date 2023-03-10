import React from 'react';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName : 'dyazgbdqc'
  }
})

const ash = cld.image('Legends/Ash/ash');

//ROULETTE SQUARE
function LegendSquare({ legend }) {
    return (
      <div className="square v-spacer">
        <AdvancedImage className="legend-pic" cldImg={ash}/>
      </div>
    )
  } 

export default LegendSquare