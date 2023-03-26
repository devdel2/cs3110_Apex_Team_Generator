//allows state tracking for components
import {useState} from "react";

//component imports
import SpinButton from "./SpinButton";
import LegendSquare from "./LegendSquare";

//ROUTLETTE
function Roulette() {
    //controls state of the three legends selected
    const [squares, setSquares] = useState(Array(3).fill(0));

    //function to generate team
    const generateTeam = (squares) => {
      let a = Array.from({length: 3}, () => Math.floor(Math.random() * 23));
      setSquares(squares = a);
      return a
    }
  
    return (
      <>
        <div className="title v-spacer">
          <div>Generate Your Team</div>
          <div className="roulette-row row">
            <LegendSquare legend={squares[0]} />
            <LegendSquare legend={squares[1]} />
            <LegendSquare legend={squares[2]} />
          </div>
          <SpinButton genTeam={generateTeam}/>
        </div>
      </>
    )
  }

export default Roulette;