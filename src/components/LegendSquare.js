import React from 'react';
import LegendPhotoData from './LegendPhotoData';
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';

//import the data from the JSON file
import LegendData from './data/legend-data.json';

//creating a new cloudinary instance object, and connecting to my cloudName
const cld = new Cloudinary({
  cloud: {
    cloudName : 'dyazgbdqc'
  }
})

//returns the legend photo associated with the value integer
const getLegendImg = (value) => {
  return LegendPhotoData[value];
}

//gets legend data from the legend-data.JSON file
const getLegendData = (value) => {
  return LegendData[value];
}

const getLegendDetails = (value) => {
  const sqs = document.getElementsByClassName("square");
  const parentClasses = sqs[0].parentNode.className.split(' ');
  if(parentClasses.find(hover => hover === "hover-me")){
    console.log(sqs[value].childNodes[1].innerText);
    
  }
  else{
    console.log("On the Home Page.");
  }
}

//ROULETTE SQUARE
function LegendSquare({ legend }) {
    //getLegendImg(legend)
    const currLegend = getLegendData(legend)
    return(
      <>
        <div className="square" onClick={() => getLegendDetails(legend)}>
            <AdvancedImage className="legend-pic" cldImg={cld.image(getLegendImg(legend))}/>
            <h1 className="title">
              {currLegend.legendName}
            </h1>
        </div>
      </>
    )    
  } 

export default LegendSquare