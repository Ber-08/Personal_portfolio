import { useState } from "react";

export default function Nav_Bar({ handleToggle }) {
  const [fix, setFix] = useState(false);

  function setFixed() {
    window.scrollY >= 100 ? setFix(true) : setFix(false);
  }
  window.addEventListener("scroll", setFixed);

  return (
    <div>
      <nav id="navbar" className={fix ? "navbar active" : "navbar"}>
        <a href="#home" className="logo">
          BT
        </a>
        <div className="nav_pages">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li onClick={handleToggle}>
              <i class="fa-solid fa-moon fa-fade"></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
