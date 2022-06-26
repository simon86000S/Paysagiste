import React from "react";
import forest from "../img/forest.jpg";
import ciel from "../img/ciel.svg";
import architecte from "../img/architecte.jpg";
import jungle from "../img/jungle.jpg";
import paysagiste from "../img/paysagiste.jpg";
import tree2 from '../img/tree2.svg';
import "./Landing.scss";
import simon from '../img/simon.jpg';
import massif1 from '../img/massif69.jpg';
import massif2 from '../img/colonne.jpg';

const Landing = () => {
  return (
    <div className="Container">
      <div className="background">
        <img style={{ width: "100%" }} src={forest}></img>
        <div className="title-concept">
          <h2>Paysagiste concepteur</h2>
        </div>
      </div>

      <div className="main">
        <div id="Agency">
          <h1 className="title-agency">AGENCE</h1>
          <p>Votre jardin entre nos mains d'expert</p>
        </div>
        <div className="wrapper">
          <div className="left">
            <div class="div1">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div2">
              {" "}
              <img style={{ width: "100%" }} src={jungle}></img>
            </div>
            <div class="div3">
              <img style={{ width: "100%" }} src={paysagiste}></img>{" "}
            </div>
            <div class="div4">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div5">
              <img style={{ width: "100%" }} src={architecte}></img>{" "}
            </div>
            <div class="div6">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div7">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div8">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div9">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div10">
              <img style={{ width: "100%" }} src={architecte}></img>{" "}
            </div>
            <div class="div11">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div12">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
          </div>
          <div className="separate">
          <img style={{ width: "100%",height:"100%" }} src={tree2}></img>
            <span></span>
          </div>

          <div className="right">
            <div class="div1">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div2">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div3">
              <img style={{ width: "100%" }} src={architecte}></img>{" "}
            </div>
            <div class="div4">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div5">
              <img style={{ width: "100%" }} src={architecte}></img>{" "}
            </div>
            <div class="div6">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div7">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div8">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div9">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div10">
              <img style={{ width: "100%" }} src={architecte}></img>{" "}
            </div>
            <div class="div11">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
            <div class="div12">
              {" "}
              <img style={{ width: "100%" }} src={architecte}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
      <p><h1>En 2011, concept Paysage c’est la rencontre de deux amis<br></br> qui voulaient en aider un troisième…</h1>

Aujourd’hui nous sommes toujours deux passionnés qui aimons être surpris par de belles rencontres humaines et par le partage d’expérience. <br></br> A chaque moment de convivialité autour de la création et de la réalisation d’un jardin nous nous enrichissons du savoir-faire de nos entreprises partenaires. <br></br> Nous sommes à l’écoute des souhaits de nos clients pour leur proposer un jardin unique à la hauteur de leurs ambitions et de leurs rêves.
</p>
      </div>
      <div className="personal-presentation ">
<div className="photo">
<img src={simon}></img>
</div>

<div className="text-personal">
   
<div className="title-personal">
    <h2>Audrain Simon CONCEPTEUR – PAYSAGISTE</h2>
    </div>
<p>Ceinture noire du crayon de bois et
de la tablette graphique, conceptrice d’espace à vivre

Diplômée de l’école Nationale supérieure de la nature et du Paysage de Blois après un bac scientifique, Lucie s’oriente dans la conception paysagère d’espaces publics.
Forte d’une expérience de 15 ans dans des grands bureaux d’étude Lyonnais elle franchit le pas en 2013 pour mettre son talent au service des jardins de particuliers, une échelle tout aussi complexe et passionnante.

J’aime le contact humain que l’on peut avoir avec les particuliers, le challenge de les faire rêver et le plaisir de les voir satisfaits à la fin du chantier… C’est totalement différent d’un concours à l’autre bout du monde ou tout semble dématérialisé.

Savoir-faire : le dessin manuel, l’illustration, la conception et l’agencement d’espaces, les harmonies d’ambiances végétales, de couleurs et de matériaux ainsi que la recherche poétique et saisonnière dans un jardin.</p>


</div>
      </div>
      <div className="realization-container">
        <div id="realization">
            <h1>Nos réalisation</h1>
        </div>
        <div className="items-content-img">
        <div class="div1">
              {" "}
              <img style={{ width: "50%" }} src={massif1}></img>
            </div>
            <div class="div2">
              {" "}
              <img style={{ width: "50%" }} src={massif2}></img>
            </div>
            <div class="div3">
              <img style={{ width: "50%" }} src={architecte}></img>{" "}
            </div>
            <div class="div4">
              {" "}
              <img style={{ width: "50%" }} src={architecte}></img>
            </div>
            <div class="div5">
              <img style={{ width: "50%" }} src={architecte}></img>{" "}
            </div>
            <div class="div6">
              {" "}
              <img style={{ width: "50%" }} src={architecte}></img>
            </div>
            <div class="div7">
              {" "}
              <img style={{ width: "50%" }} src={architecte}></img>
            </div>
            <div class="div8">
              {" "}
              <img style={{ width: "50%" }} src={architecte}></img>
            </div>
            <div class="div9">
              {" "}
              <img style={{ width: "50%" }} src={architecte}></img>
            </div>
            <div class="div10">
              <img style={{ width: "50%" }} src={architecte}></img>{" "}
            </div>
            <div class="div11">
              {" "}
              <img style={{ width: "50%" }} src={architecte}></img>
            </div>
            <div class="div12">
              {" "}
              <img style={{ width: "50%" }} src={architecte}></img>
            </div>
            </div>
</div>

</div>
   

  );
};

export default Landing;
