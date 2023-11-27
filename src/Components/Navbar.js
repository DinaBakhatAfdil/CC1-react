import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";

function NavigationBar () {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

    return (
      <header>
        <nav ref={navRef}>
          <a href="/Calc"> CALCULATRICE </a>
          <a href="/Slider"> SLIDER </a>
          <a href="/ToDoList"> TO DO LIST </a>
          <a href="/API"> PAGINATION </a>
          <a href="/context/Langcontext"> MULTILANGUAGE </a>
          <a href="*"> AUTRE </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
    );
}
export default NavigationBar;