import LegendIndex from "../LegendsIndex";
import LegendBioSquare from "../LegendBioSquare";
//import the data from the JSON file
import LegendData from '../data/legend-data.json';
//allows state tracking for components
import {useState} from "react";

function Legends() {

    const [currLegend, setCurrLegendState] = useState({});

    const getLegend = (legend) => {
        let l = LegendData[legend]
        setCurrLegendState(l)
        console.log(`The legend is at index: ${legend} and thier name is: ${l.realName}`)
    }

    //return the JSX component here
    return (
        <>   
            <h1 className="title">All Legends</h1>
            < LegendBioSquare legend={currLegend}/>
            < LegendIndex getLegend={getLegend} />
        </>
    )
}

export default Legends