import Etre from "./etre.js";
// class pour instancier des joueurs
export default class Joueur extends Etre {
  //Propiétées de la class Joueur
  #pointsVie;

  // Constructor de la class Joueur, pour initialiser les propriétées
  constructor(nom) {
    super(nom);
    this.#pointsVie = 10; // ---->  point de vie de départ pour chaque Joueur instancié
  }

  //----> getter pour lire dans la propriétée pointsVie du joueur
  get getPointsVie() {
    return this.#pointsVie;
  }
  //----> setter pour écrire dans la propriétées pointsVie du joueur
  set setPointsVie(pointsVie) {
    this.getPointsVie = pointsVie;
  }

  set setQuantiteArme(quantiteArme) {
    this.getQuantiteArme = quantiteArme;
  }
  //----> getter pour lire dans la propriétée pointsSous du joueur
  // get getPointsSous() {
  //   return this.#pointsSous;
  // }
  // //----> setter pour écrire dans la propriétée pointsSous du joueur
  // set setPointsSous(sous) {
  //   this.#pointsSous = sous;
  // }

  // methode S’il bat un monstre, il récupère les sous et armes du monstre et gagne 1 point d’expérience. S’il perd contre le monstre, il perd un point de vie *
  combattre(pointsExperienceMonstre) {
    if (pointsExperienceMonstre === 0) {
      ++this.setPointsExperience;
      this.setPointsSous += monstre.getPointsSous;
    } else {
      --this.getPointsVie;
      this.getPointsVie() === 0
        ? this.mourir()
        : `Il te reste : ${this.getPointsVie}`;
    }
  }
  get getPointsVie() {
    return this.#pointsVie;
  }
  // S’il perd tous ses points de vie, il meurt et la partie est terminée *
  mourir() {}
  // S’il fuit un monstre, il perd 1 point d’expérience sauf si déjà à 0 *
  fuir() {}
  // La force et/ou l’endurance de l’arme, s’ajoute à la force et/ou l’endurance du joueur tant que l’arme est équipée. Une arme équipée ne peut pas être vendue *
  equiperArme() {}
  // La force et/ou l’endurance de l’arme, s’enlève à la force et/ou l’endurance du joueur une fois l’arme déséquipée. Une arme déséquipée peut être vendue *
  desequiperArme() {}
  // Il est possible d’acheter une arme à un PNJ ​ qui a au moins le même nombre de point d’expérience que le joueur​ et échanger le nombre de sous contre le prix de l’arme *
  acheterArme() {}
  // Il est possible de vendre une arme déséquipée à n’importe quel PNJ et recevoir 50% du prix de l’arme *
  vendreArme() {}
  // Cette action peut se faire n’importe quand *
  echangerSous() {}
  // une fois 50 points d’expérience atteint fini *
  gagnerLaPartie() {
    return "La partie est gagnée";
  }
}
