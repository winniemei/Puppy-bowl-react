import {Routes, Route, Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/">HOME</Link>
      <Link to="/NewPlayerForm">ADD NEW PLAYER</Link>
    </div>
  );
}
