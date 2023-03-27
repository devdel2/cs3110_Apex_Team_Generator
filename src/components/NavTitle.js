//INSTANCE VARS
const title = "Apex Team Generator";
const legends = "Legends";
const loadouts = "Loadouts";

// COMPONENTS //
//TITLE
function NavTitle() {
  return <nav className="nav-bar bg-red">
    <div className="nav-con-l">
      <a href="/" className="nav-item">{title}</a>
    </div>
    <div className="nav-con-r">
      <a href="/legends" className="nav-item">{legends}</a>
      <div className="h-spacer"></div>
      <a href="/loadouts" className="nav-item">{loadouts}</a>
    </div>
  </nav>
}


export default NavTitle