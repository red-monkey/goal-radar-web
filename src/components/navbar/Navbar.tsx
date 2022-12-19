import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuSidebar, setMenuSidebar] = React.useState(false);
  const showMenuSidebar = () => setMenuSidebar(!menuSidebar);

  return (
    <div className="navbar-container">
      <div className="navbar-classic">
        <Link to="home" className="navbar-title">
          GOAL RADAR
        </Link>
        <div className="navbar-items">
          <ul>
            <NavLink to="home" className="navbar-link">
              <li>Anasayfa</li>
            </NavLink>
            <NavLink to="aboutus" className="navbar-link">
              <li>Hakkımızda</li>
            </NavLink>
            <NavLink to="mobileapp" className="navbar-link">
              <li>Mobil Uygulama</li>
            </NavLink>
            <NavLink to="news" className="navbar-link">
              <li>Haberler</li>
            </NavLink>
            <NavLink to="contact" className="navbar-link">
              <li>İletişim</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="menu-overlay">
          <FaBars className="menu-bars" onClick={showMenuSidebar} />
          <Link to="home" className="navbar-title">
            GOAL RADAR
          </Link>
          <div className={menuSidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <NavLink to="home" onClick={showMenuSidebar}>
                <li className="nav-text">Anasayfa</li>
              </NavLink>
              <NavLink to="aboutus" onClick={showMenuSidebar}>
                <li className="nav-text">Hakkımızda</li>
              </NavLink>
              <NavLink to="mobileapp" onClick={showMenuSidebar}>
                <li className="nav-text">Mobil Uygulama</li>
              </NavLink>
              <NavLink to="news" onClick={showMenuSidebar}>
                <li className="nav-text">Haberler</li>
              </NavLink>
              <NavLink to="contact" onClick={showMenuSidebar}>
                <li className="nav-text">İletişim</li>
              </NavLink>
              <IoMdClose className="navbar-toggle" onClick={showMenuSidebar} />
            </ul>
          </div>
          <div
            className={
              menuSidebar ? "menu-overlay-effect active" : "menu-overlay-effect"
            }
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
