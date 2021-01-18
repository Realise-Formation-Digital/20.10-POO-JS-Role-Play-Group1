//class pour crée des joueurs **

export default class Joueur {

  // Propriété des joueurs **

  #pointsVie = 10;       // ---->   point de départ    <---- //
  #pointsExperience = 0; // ---->   point d'experience <---- //
  #pointsForce = 1;      // ---->   points de force    <---- //
  #pointsEndurance = 1;  // ---->   points d'endurance <---- //
  #Arme = "";      // ---->   une épée avec +1 de force < ---- //
  #pointsSous = 20;
  
  

// Constructor de la class joueurs propriétées **

constructor(pointsVie,pointsArme,pointsExperience,pointsForce,pointsEndurance,pointsSous) {

  this.#pointsVie = pointsVie;
  this.#pointsArme = pointsArme;
  this.#pointsExperience = pointsExperience;
  this.#pointsForce = pointsForce;
  this.#pointsEndurance = pointsEndurance;
  this.#pointsSous = pointsSous;
};
}
