//allows state tracking for components
import {useState} from "react";

//component imports
import SpinButton from "./SpinButton";
import LegendSquare from "./LegendSquare";
import TriosCheckDupe from "./js/trios-check-duplicates";

//ROUTLETTE
function Roulette() {

    const [teamSize, setTeamSize] = useState(3);

    //controls state of the three legends selected
    const [squares, setSquares] = useState(Array(teamSize).fill(0));

    //function to generate team
    const generateTeam = (sq) => {
      //creates an array of three random integers 1-23
      let a = Array.from({length: teamSize}, () => Math.floor(Math.random() * 24));
      //sets the random array to the squares state array
      setSquares(sq = a);
      //checks if the team has duplicates
      if(TriosCheckDupe(sq)){
        //if true, new team is created
        a = Array.from({length: teamSize}, () => Math.floor(Math.random() * 24));
        //set the squares stae array to the new randomly genereated number array
        setSquares(sq = a);
      }
      //return a
      return a
    }
    let numTimes = Math.floor(Math.random() * (50 - 30) + 30);
    const wait = () => {
      setTimeout(() => {
        generateTeam();
        numTimes--;
        if(numTimes > 0){
          wait();
        }
      }, 50);
    }

    const changeTeamSize = (num) => {
      setTeamSize(num);
      setSquares(Array(num).fill(0));
    }
  
    //this is the JSX component rendering the roulette portion of the application
    return (
      <>
        <div className="title v-spacer">
          <div>
          </div>
          <div className="title">Generate Your Team</div>
          <div className="roulette-row">
            {Array(teamSize).fill().map((_, index) => <LegendSquare key={index} legend={squares[index]} />)}
          </div>
          <div>
            <button className="bg-red spin-btn" onClick={() => changeTeamSize(1)}>Solo</button>
            <button className="bg-red spin-btn spread" onClick={() => changeTeamSize(2)}>Duos</button>
            <button className="bg-red spin-btn" onClick={() => changeTeamSize(3)}>Trios</button>
          </div>
        </div>
        <SpinButton genTeam={wait}/>
      </>
    )
  }

export default Roulette;