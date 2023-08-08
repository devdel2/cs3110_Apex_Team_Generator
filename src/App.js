//IMPORTS AND REQUIRES
import './components/fonts/apex-legends-font.otf';
import './App.css';
//component imports
import Home from './components/pages/home';
import Legends from './components/pages/legends';
import Loadouts from './components/pages/loadouts';
import NavTitle from './components/NavTitle';
import Test from './components/pages/test'

//RENDER COMPONENTS IN APP
function App() {
  let component;
  switch(window.location.pathname){
    case "/":
      component = < Home />;
      break;
    case "/legends":
      component = < Legends />;
      break;
    case "/loadouts":
      component = < Loadouts />;
      break;
    case "/test":
      component = < Test />;
      break;
    default:
      component = < Home />;
      break;
  }
  return (
    <>
      < NavTitle />
      <div className="container">
        {component}
      </div>
    </>
  );
}

export default App;