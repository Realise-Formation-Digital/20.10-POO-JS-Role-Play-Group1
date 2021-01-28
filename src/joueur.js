import Etre from "./etre.js";
import Monstre from "./montre.js";
import Arme from "./arme.js";
// class pour instancier des joueurs
export default class Joueur extends Etre {
  // Propriété de la class Joueur
  #id;
  #pointsVie;
  static #compteur = 0;

  // Constructor pour initialiser les propriétés de la class Joueur
  constructor(nom = "") {
    super(nom);
    this.#id = Joueur.compteur();
    this.#pointsVie = 10;
  }

  getIdJoueur() {
    return this.#id;
  }

  //----> getter pour lire dans la propriété pointsVie du joueur
  getPointsVie() {
    return this.#pointsVie;
  }
  //----> setter pour écrire dans la propriétés pointsVie du joueur
  /**
   * @param {number} pointsVie
   */
  setPointsVie(pointsVie) {
    this.#pointsVie = pointsVie;
  }

  /**
   * * Méthode qui permet compter le numéro des instances de une classe
   * @method static
   * @returns {Number} La valeur affecté de #id
   */
  static compteur() {
    return this.#compteur++;
  }

  /**
   * Méthode combattre(). Si le joueur bat un monstre, il récupère les sous et les armes du monstre
   * et gagne 1 point d’expérience. S’il perd le combattre, il perd un point de vie
   * @param {Monstre} monstre
   */
  combattre(monstre) {
    if (monstre.getPointsExperience === 0) {
      this.setPointsExperience++;
      this.setPointsSous += monstre.getPointsSous;
    } else {
      this.getPointsVie--;
      this.getPointsVie() === 0
        ? this.mourir()
        : `Il te reste : ${this.getPointsVie}`;
    }
  }

  // Si le joueur perd tous ses points de vie, il meurt et la partie est terminée
  mourir() {}

  // Si le joueur fuit un monstre, il perd 1 point d’expérience sauf si déjà à 0
  fuir() {}

  /* La force et/ou l’endurance de l’arme, s’ajoute à la force et/ou l’endurance du joueur
   tant que l’arme est équipée. Une arme équipée ne peut pas être vendue */
  equiperArme() {}

  /* La force et/ou l’endurance de l’arme, s’enlève à la force et/ou l’endurance du joueur 
   une fois l’arme déséquipée. Une arme déséquipée peut être vendue */
  desequiperArme() {}

  /* Il est possible d’acheter une arme à un PNJ ​ qui a au moins le même nombre de point 
  d’expérience que le joueur​ et échanger le nombre de sous contre le prix de l’arme */
  acheterArme() {}

  // Il est possible de vendre une arme déséquipée à n’importe quel PNJ et recevoir 50% du prix de l’arme *
  vendreArme() {}

  // Cette action peut se faire n’importe quand
  echangerSous() {}

  // Une fois 50 points d’expérience atteint, la partie est gagner et terminée
  gagnerLaPartie() {
    return "La partie est gagnée";
  }
}
