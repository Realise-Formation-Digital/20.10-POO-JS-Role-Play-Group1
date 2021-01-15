
// Classe pour creer un monstre
export default class Monstre {
    #nomMonstre="";
    #pointsExperience= 0;
    #pointsForce= 0;
    #pointsEndurance= 0;
    #arme= "";
    #sous= 0;
  
    constructor(nomMonstre,arme) {
        this.#nomMonstre = nomMonstre;
        this.#pointsExperience = Math.floor(Math.random() * 51);
        this.#pointsForce = Math.floor(Math.random() * this.#pointsExperience);
        this.#pointsEndurance = Math.floor(Math.random() * this.#pointsExperience);
        this.#arme = arme;
        this.#sous = Math.floor(Math.random() * 51);
    }
  
    getNomMonstre() {
        return this.#nomMonstre;
    }
  }