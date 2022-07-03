import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF,faLinkedin,faTwitterSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTree} from '@fortawesome/free-solid-svg-icons'
import rosace from "../img/rosace.svg";
import React from 'react';
import "./Navbar.scss";

import tree from '../img/tree.svg';






const Navbar = () => {
  return (
    <div className='container'>
<div style={{position:"relative"}}  className='Header'>
<div  className='header-title'>
<img
            className="rosace"
            style={{
              position:"absolute",
             top:'75px',
             left:"140px",
             zIndex:"-2",

              width: "80%",
              height: "80%",
        
             
            }}
            src={rosace}
          ></img>
<h1 className='title-first'>Paysagiste</h1>

          <img
            className="rosace"
            style={{
              position:"absolute",
             top:'75px',
             left:"-50px",
             zIndex:"-2",

              width: "80%",
              height: "80%",
        
             
            }}
            src={rosace}
          ></img>
    <h1 className='title'>Paysagiste concepteur</h1>
    
    </div>
</div>
<div className='Menu'>
    <div className='Menu-list'>
       <ul>
        <a href="#/"><li className='active'>Accueil</li></a>
        <a href="#Agency"><li>Agence</li></a>
        <a href="#realization"><li>Nos réalisation</li></a>
        <li>Nos prestations</li>
        <li>Notre actualités</li>
        <li>Nos Partenaires</li>
        <li>Nos Contact</li>
        
        </ul> 
    </div>
    <div className='items'>
 <div className='list-items'>
       <div className='facebook'><FontAwesomeIcon style={{height:"30px",width:"30px"}}  icon={faFacebookF }/></div> 
       <div className='LinkeIn'><FontAwesomeIcon style={{height:"30px",width:"30px"}}  icon={faLinkedin }/></div> 
       <div className='twitter'><FontAwesomeIcon style={{height:"30px",width:"30px"}} icon={faTwitterSquare} /></div> 
       <div className='instagram'><FontAwesomeIcon style={{height:"30px",width:"30px"}} icon={faInstagram} /></div> 
       </div> 
       </div>
    </div>


    </div>
  )
}

export default Navbar