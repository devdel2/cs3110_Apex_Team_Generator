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

//ROULETTE SQUARE
function RSquare({ legend }) {
  return <div className="square">{legend}</div>
}

//ROUTLETTE
function Roulette() {
  const [squares, setSquares] = useState(Array(3).fill(null));
  return (
    <>
      <div className="title">
        <div>Generate Your Team</div>
        <div className="roulette-row">
          <RSquare legend={squares[0]} />
          <RSquare legend={squares[0]} />
          <RSquare legend={squares[0]} />
          <SpinButton />
        </div>
      </div>
    </>
  )
}

//SPIN BUTTON
function SpinButton({ randTeam }) {
  return <button className="centered" onClick={randTeam}>Spin!</button>
}

function Test(){
  return <h1>HELLO</h1>
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
