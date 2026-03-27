import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faListCheck,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

function MobileNav() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bottom-nav">
      <ul>
        <li>
          <button onClick={() => scrollToSection("home")}>
            <FontAwesomeIcon icon={faHouse} />
          </button>
        </li>

        <li>
          <button onClick={() => scrollToSection("about")}>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </li>

        <li>
          <button onClick={() => scrollToSection("projects")}>
            <FontAwesomeIcon icon={faListCheck} />
          </button>
        </li>

        <li>
          <button onClick={() => scrollToSection("contact")}>
            <FontAwesomeIcon icon={faAddressBook} />
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default MobileNav;