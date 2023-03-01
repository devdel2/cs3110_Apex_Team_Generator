//IMPORTS AND REQUIRES
import './App.css';
//component imports
import NavTitle from './components/NavTitle'
import Roulette from './components/Roulette';
import MoreRow from './components/MoreRow';

//RENDER COMPONENTS IN APP
function App() {
  return (
    <>
      <NavTitle />
      <Roulette />
      <MoreRow />
    </>
  );
}

export default App;