import Etre from "./etre.js";
export default class Pnj extends Etre {
  // Constructor de la class Pnj
  constructor(nom) {
    super(nom);
    this.pointsExperience = Etre.aleatoire(1);
    this.pointsForce = this.pointsExperience;
    this.pointsEndurance = this.pointsExperience;
  }
}
