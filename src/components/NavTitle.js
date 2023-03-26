//INSTANCE VARS
const title = "Apex Team Generator";
const legends = "Legends";
const loadouts = "Loadouts";

// COMPONENTS //
//TITLE
function NavTitle() {
  return <div className="nav-bar bg-red">
    <div className="nav-con-l">
      <p className="nav-item">{title}</p>
    </div>
    <div className="nav-con-r">
      <p className="nav-item">{legends}</p>
      <div className="h-spacer"></div>
      <p className="nav-item">{loadouts}</p>
    </div>
  </div>
}


export default NavTitle