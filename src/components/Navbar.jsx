import logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to={"/"}>
      <div className="header">
        <img src={logo} alt="" className="logo" />
      </div>
    </Link>
  );
}

export default Navbar;
