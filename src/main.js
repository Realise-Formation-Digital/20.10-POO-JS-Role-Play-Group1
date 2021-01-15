import Joueur from "./joueur.js";
import Arme from "./arme.js";
import Monstre from "./monstre.js";

//Creation d'un monstre

const Marco = new Monstre("Marco","resr");

console.log(Marco.getNomMonstre());

let affiche=document.getElementById("Affichage");

affiche.innerText(Marco.getNomMonstre());