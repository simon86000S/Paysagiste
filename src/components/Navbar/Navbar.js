import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faLinkedin,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import rosace from "../img/rosace.svg";
import React, { useRef } from "react";
import "./Navbar.scss";

import tree from "../img/tree.svg";

const Navbar = () => {
  const menu = useRef();
  const span = useRef();
  const closeMenu=()=>{
    menu.current.style.transform = "translate3d(1000%,-20px,0)";
    span.current.style.display = "flex";
    menu.current.style.transition ="2s ease"
  

  }
  const showMenu = () => {
    menu.current.style.transform = "translate3d(10%,-20px,0)";
    span.current.style.display = "none";
    menu.current.style.transition ="1s ease"
  };

  return (
    <div className="container">
      <div style={{ position: "relative" }} className="Header">
        <div className="header-title">
          <img
            className="rosace"
            style={{
              position: "absolute",
              top: "75px",
              left: "150px",

              width: "80%",
              height: "80%",
            }}
            src={rosace}
          ></img>
          <h1 className="title-first">Paysagiste</h1>

          <img
            className="rosace"
            style={{
              position: "absolute",
              top: "75px",
              left: "-20px",

              width: "80%",
              height: "80%",
            }}
            src={rosace}
          ></img>
          <h1 className="title">Paysagiste concepteur</h1>
        </div>
      </div>
      <div className="Menu">
        <div ref={span} onClick={showMenu} className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="Menu-list">
          <ul ref={menu}>
            <div  onClick={closeMenu} className="burger-close">
            <span></span>
            <span></span>
            </div>

            <a href="#/">
              <li className="active">Accueil</li>
            </a>
            <a href="#Agency">
              <li>Agence</li>
            </a>
            <a href="#realization">
              <li>Nos réalisations</li>
            </a>
            <li>Nos prestations</li>
            <li>Notre actualités</li>
            <li>Nos Partenaires</li>
            <li>Nos Contacts</li>
          </ul>
        </div>

        <div className="items">
          <div className="list-items">
            <div className="facebook">
              <FontAwesomeIcon
                style={{ height: "30px", width: "30px" }}
                icon={faFacebookF}
              />
            </div>
            <div className="LinkeIn">
              <FontAwesomeIcon
                style={{ height: "30px", width: "30px" }}
                icon={faLinkedin}
              />
            </div>
            <div className="twitter">
              <FontAwesomeIcon
                style={{ height: "30px", width: "30px" }}
                icon={faTwitterSquare}
              />
            </div>
            <div className="instagram">
              <FontAwesomeIcon
                style={{ height: "30px", width: "30px" }}
                icon={faInstagram}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
