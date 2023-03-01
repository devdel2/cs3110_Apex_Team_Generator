//INSTANCE VARS
const title = "Apex Team Generator";
const legends = "Legends";
const loadouts = "Loadouts";

// COMPONENTS //
//TITLE
function NavTitle() {
  return <div className="nav-bar bg-red">
    <div className="nav-con-l">
      {title}
    </div>
    <div className="nav-con-r">
      {legends}
      <div className="h-spacer"></div>
      {loadouts}
    </div>
  </div>
}


export default NavTitle