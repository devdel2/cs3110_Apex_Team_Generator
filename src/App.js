//IMPORTS AND REQUIRES
import { useState } from 'react';
import './App.css';

//INSTANCE VARS
const title = "Apex Team Generator";
const numLegends = 23;
const [solo, duo, trio] = [1,2,3];
let randTeam = [];

// COMPONENTS //
//TITLE
function Title() {
  return <div className="title bg-red">{title}</div>
}



//ROUTLETTE
function Roulette() {
  const [squares, setSquares] = useState(Array(3).fill(null));

  const generateTeam = (squares) => {
    let a = Array.from({length: 3}, () => Math.floor(Math.random() * 23));
    setSquares(squares = a);
    return a
  }

  //ROULETTE SQUARE
  function RSquare({ legend }) {
    return <div className="square v-spacerx">{legend}</div>
  }

  //SPIN BUTTON
  function SpinButton({ genTeam }) {
    return <button className="centered v-spacer" onClick={genTeam}>Spin!</button>
  }

  return (
    <>
      <div className="title v-spacer">
        <div>Generate Your Team</div>
        <div className="roulette-row">
          <RSquare legend={squares[0]} />
          <RSquare legend={squares[1]} />
          <RSquare legend={squares[2]} />
          <SpinButton genTeam={generateTeam}/>
        </div>
      </div>
    </>
  )
}



//RENDER COMPONENTS IN APP
function App() {
  return (
    <>
      <Title />
      <Roulette />
    </>
  );
}

export default App;
