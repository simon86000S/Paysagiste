import React,{useState,Fragment, useRef} from "react";
import forest from "../img/forest.jpg";
import circle from "../img/circle.svg";
import architecte from "../img/architecte.jpg";
import jungle from "../img/jungle.jpg";
import paysagiste from "../img/paysagiste.jpg";
import tree2 from "../img/tree2.svg";
import "./Landing.scss";

import simon4 from "../img/simon4.jpg";
import massif1 from "../img/massif69.jpg";
import massif2 from "../img/colonne.jpg";
import { FaChevronCircleUp } from "react-icons/fa";

import jungle1 from "../img/jungle1.jpg";
import jungle3 from "../img/jungle3.jpg";
import jungle4 from "../img/jungle4.jpg";
import jungle5 from "../img/jungle5.jpg";
import jungle6 from "../img/jungle6.jpg";
import jungle7 from "../img/jungle7.jpg";
import jungle8 from "../img/jungle8.jpg";
import jungle9 from "../img/jungle9.jpg";
import jungle10 from "../img/jungle10.jpg";
import jungle11 from "../img/jungle11.jpg";
import simon1 from "../img/simon1.jpg";
import simon3 from "../img/simon3.jpg";
import paysage1 from "../img/paysage1.jpg";
import paysage2 from "../img/paysage2.jpg";
import paysage3 from "../img/paysage3.jpg";
import paysage4 from "../img/paysage4.jpg";
import paysage5 from "../img/paysage5.jpeg";
import paysage6 from "../img/paysage6.jpg";
import paysage7 from "../img/paysage7.jpg";
import { cpanel } from "fontawesome";

const Landing = () => {
 
  





  return (
    <div className="Container">
  
      <a href="/">
        {" "}
        <div style={{ position: "relative" }} className="cursor">
          <span>
            <FaChevronCircleUp
              style={{
                color: "green",
                position: "absolute",
                top: "10%",
                width: "100px",
                left: "-50%",
                height: "50px",
              }}
            />
          </span>
        </div>
      </a>
      <div className="background">
        <img style={{ width: "100%", position: "relative" }} src={forest}></img>
        <div></div>
        <div className="title-concept">
          <h2>Paysagiste concepteur</h2>
        </div>
      </div>

      <div className="main">
        <div  id="Agency">
          <h1 className="title-agency">AGENCE</h1>
          <p>Votre jardin entre nos mains d'expert</p>
        </div>
      
      
       
      <div className="img-background-tree">
       <div className="circle-page">
<img src={circle}></img>
<img src={circle}></img>

       </div>
        <img src={tree2}/></div> 

         
        </div>
       
        
  
    
        <div className="text">
        <p style={{ marginTop: "92px" }}>
          <h1>
            En 2011, concept Paysage c’est la rencontre de deux amis<br></br>{" "}
            qui voulaient en aider un troisième…
          </h1>
          Aujourd’hui nous sommes toujours deux passionnés qui aimons être
          surpris par de belles rencontres humaines et par le partage
          d’expérience. <br></br> A chaque moment de convivialité autour de la
          création et de la réalisation d’un jardin nous nous enrichissons du
          savoir-faire de nos entreprises partenaires. <br></br> Nous sommes à
          l’écoute des souhaits de nos clients pour leur proposer un jardin
          unique à la hauteur de leurs ambitions et de leurs rêves.
        </p>
      </div>
      <div className="personal-presentation ">
        <div className="photo">
          <img src={simon4}></img>
        </div>

        <div className="text-personal">
          <div className="title-personal">
            <h2>Audrain Simon CONCEPTEUR – PAYSAGISTE</h2>
          </div>
          <p>
            Ceinture noire du crayon de bois et de la tablette graphique,
            conceptrice d’espace à vivre Diplômée de l’école Nationale
            supérieure de la nature et du Paysage de Blois après un bac
            scientifique, Lucie s’oriente dans la conception paysagère d’espaces
            publics. Forte d’une expérience de 15 ans dans des grands bureaux
            d’étude Lyonnais elle franchit le pas en 2013 pour mettre son talent
            au service des jardins de particuliers, une échelle tout aussi
            complexe et passionnante. J’aime le contact humain que l’on peut
            avoir avec les particuliers, le challenge de les faire rêver et le
            plaisir de les voir satisfaits à la fin du chantier… C’est
            totalement différent d’un concours à l’autre bout du monde ou tout
            semble dématérialisé. Savoir-faire : le dessin manuel,
            l’illustration, la conception et l’agencement d’espaces, les
            harmonies d’ambiances végétales, de couleurs et de matériaux ainsi
            que la recherche poétique et saisonnière dans un jardin.
          </p>
        </div>
      </div>
      <div className="realization-container">
        <div id="realization">
          <h1>Nos réalisations</h1>
         
        </div>
        <div className="background-side">
      
        <div  className="items-content-img">
        <img src={paysage2}></img>
        <img src={paysage3}></img>
        <img src={paysage4}></img>
        <img src={paysage5}></img>
        <img src={paysage6}></img>
        <img src={paysage7}></img>
        </div>
      
       </div>
           
          </div>
        </div>
    
  
  );
};

export default Landing;
