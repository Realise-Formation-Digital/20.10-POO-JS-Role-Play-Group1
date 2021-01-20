import Etre from "./etre.js";
export default class Pnj extends Etre {
  // Propiétées de la class Joueur
  #pointsExperience;
  #pointsForce;
  #pointsEndurance;
  #quantiteArme;

  // Constructor de la class Pnj
  constructor(nom) {
    super(nom);
    this.pointsExperience = Etre.aleatoire(1);
    this.pointsForce = this.pointsExperience;
    this.pointsEndurance = this.pointsExperience;
  }

  get getNom() {
    return this.nom;
  }
  set setNom(nom) {
    this.getNom = nom;
  }
}
