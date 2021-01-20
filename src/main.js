//import Etre from "./etre.js";
import Joueur from "./joueur.js";
//import Pnj from "./pnj.js";

let daniel = new Joueur("Daniel");

let voir = `Je suis ${daniel.getNom} avec points de vie: ${daniel.getPointsVie}
 
point de experience: ${daniel.getPointsExperience}`;

console.log(voir);

let affiche = document.getElementById("afficher");
affiche.innerHTML = voir;
