import Joueur from "./joueur.js";
//import Pnj from "./pnj.js";
import Monstre from "./montre.js";
import Arme from "./arme.js";
//import myData from "./BDD/database.js";

//Instanciation des joueurs
const dani = new Joueur("Daniel");
const rub = new Joueur("Rubén");
const gab = new Joueur("Gaby");
const fab = new Joueur("Fabian");
//console.log((dani.setId = 1));

//Instanciation des monstres
const marco = new Monstre("Marco");
const fred = new Monstre("Fred");

//Instanciation des armes
const armeDaniel = new Arme("épée de feu");
armeDaniel.setPointsForce = 20;

//Affichages
const $id = (id) => document.getElementById(id); //Prendre les id du index.html
const $el = (el) => document.querySelector(el); //Prendre les elements du index.html

/**
 *
 * @param {Joueur} joueur
 */
let voirJoueur = (joueur = new Joueur()) => {
  return `
id = ${joueur.getIdJoueur()}<br>
Je suis ${joueur.getNom()}<br>
Points de vie: ${joueur.getPointsVie()}<br>
Points d'experience: ${joueur.getPointsExperience()}<br>
Points de Force: ${joueur.getPointsForce()}<br>
Points d'endurance: ${joueur.getPointsEndurance()}<br>
Sous: ${joueur.getPointsSous()}.-
`;
};

let voirBDD = (data) => {
  return `
${data.id}
<br>
<h3 >Joueur: ${data.nom} </h3>
Point de vie: ${data.pointsVie}<br>
Point d'Expérience: ${data.pointsExperience}<br>
Point de Force: ${data.pointsForce}<br>
Point d'Endurance : ${data.pointsEndurance}<br>
Quantité de sous: ${data.sous}
`;
};

const renderData = (data) => ($id("iam").innerHTML = data);

fetch(`http://localhost:3001/joueurs/1`)
  .then((response) => response.json())
  .then((data) => {
    renderData(voirBDD(data));
  });

/**********************Voir data Joueur*****************************/

console.log(voirJoueur(gab));
let $aff = $id("dataJoueur");
$aff.innerHTML = voirJoueur(fab);

/***************************************************/

const renderImage = (image) => $el("#image").setAttribute("src", image);

fetch("https:pokeapi.co/api/v2/pokemon/26/")
  .then((response) => response.json())
  .then((data) => {
    renderImage(data.sprites.front_default);
  });
