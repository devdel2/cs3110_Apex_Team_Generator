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

    const [isToggled, setIsToggled] = useState(false);

    function handleClick(){
        setIsToggled(!isToggled);
        console.log("TOGGLE ME BABY")
    }

    //return the JSX component here
    return (
        <>   
            <h1 className="title">All Legends</h1>
            < LegendBioSquare legend={currLegend} isToggled={isToggled}/>
            < LegendIndex getLegend={getLegend} hideMe={handleClick}/>
        </>
    )
}

export default Legends