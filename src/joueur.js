//class pour crée des joueurs **

import Etre from "./etre";

export default class Joueur extends Etre {

#nom =""; 

// Constructor de la class joueurs propriétées **

constructor(nom,pointsVie,pointsExperience,pointsForce,pointsEndurance,arme,pointsSous) {

  super(pointsVie,pointsExperience,pointsForce,pointsEndurance,arme,pointsSous);
  this.#nom = nom;
};





















}