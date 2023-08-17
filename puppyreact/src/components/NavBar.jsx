import {Routes, Route, Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/">ALL PLAYERS</Link>
      <Link to="/NewPlayerForm">ADD NEW PLAYER</Link>
      <Link to="/SinglePlayer">SINGLE PLAYER</Link>
    </div>
  );
}
