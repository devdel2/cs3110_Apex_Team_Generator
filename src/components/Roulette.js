//allows state tracking for components
import {useState} from "react";

//component imports
import SpinButton from "./SpinButton";
import LegendSquare from "./LegendSquare";
import TriosCheckDupe from "./js/trios-check-duplicates";

//ROUTLETTE
function Roulette() {
    //controls state of the three legends selected
    const [squares, setSquares] = useState(Array(3).fill(0));

    //function to generate team
    const generateTeam = (squares) => {
      //creates an array of three random integers 1-23
      let a = Array.from({length: 3}, () => Math.floor(Math.random() * 23));
      //sets the random array to the squares state array
      setSquares(squares = a);
      //checks if the team has duplicates
      if(TriosCheckDupe(squares)){
        //if true, new team is created
        a = Array.from({length: 3}, () => Math.floor(Math.random() * 23));
        //set the squares stae array to the new randomly genereated number array
        setSquares(squares = a);
      }

      //return a
      return a
    }
  
    //this is the JSX component rendering the roulette portion of the application
    return (
      <>
        <div className="title v-spacer">
          <div className="title">Generate Your Team</div>
          <div className="roulette-row">
            <LegendSquare legend={squares[0]} />
            <LegendSquare legend={squares[1]} />
            <LegendSquare legend={squares[2]} />
          </div>
        </div>
        <SpinButton genTeam={generateTeam}/>
      </>
    )
  }

export default Roulette;