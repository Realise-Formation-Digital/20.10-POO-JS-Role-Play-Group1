import Arme from "./arme.js";
import Etre from "./etre.js";
// class pour instancier des monstres
export default class Monstre extends Etre {
  // Constructor pour initialiser les propriétées de la class
  constructor(nom = "") {
    super(nom);
    this.compteurMonstre = 0;
    //Des points d’expériences (aléatoirement de 1 à 50)
    this.setPointsExperience = this.aleatoire(1, 50);

    //Des points de force (aléatoirement de 1 au nombre de point d’expérience)
    this.setPointsForce = this.aleatoire(1, this.getPointsExperience);

    //Des points d’endurance (aléatoirement de 1 au nombre de point d’expérience)
    this.setPointsEndurance = this.aleatoire(1, this.getPointsExperience);

    /*Le monstre possède 0 ou 1 arme (dont la force et/ou l’endurance est aléatoirement de 1 au 
    nombre de points d’expérience)*/
    //this.setArme = null;
    this.setPointsSous = this.aleatoire(0, 50);
  }
  static getCompteur() {
    return (this.compteurMonstre = 1 + this.compteurMonstre);
  }

  // Si le monstre perd tous ses points de vie, il meurt
  mourir() {}
}
