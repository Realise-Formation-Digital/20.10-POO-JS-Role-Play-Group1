export default class Etre {
  // Propriété des Êtres**

  #nom = "Etre"; // ---->   nom
  #pointsExperience; // ---->   point d'experience
  #pointsForce; // ---->   points de force
  #pointsEndurance; // ---->   points d'endurance
  #quantiteArme; // ---->    nombre des armes possedées
  #pointsSous; // ---->    Sous possédé

  // Constructor de la class Etre
  constructor(nom) {
    // Initialisation des propriétées de la class Etre
    this.#nom = nom; // ---->   nom de l'etre
    this.#pointsExperience = 0; // ---->   point d'experience
    this.#pointsForce = 1; // ---->   points de force
    this.#pointsEndurance = 1; // ---->   points d'endurance
    this.#quantiteArme = 1; // ---->   quantité des armes. Depart avec 1
    this.#pointsSous = 20; // ---->   Sous possédé l'Etre
  }
  //----> Getters et Setters des propriétées de la classe Etre *
  //----> getter pour lire la propriétée nom
  get getNom() {
    return this.#nom;
  }
  //----> setter pour écrire la propriétée nom
  set setNom(nom) {
    this.getNom = nom;
  }

  //----> getter de la propriétées arme :pour lire *
  get getQuantiteArme() {
    return this.#quantiteArme;
  }

  //----> getter de la propriétées experience :pour lire *
  get getPointsExperience() {
    return this.#pointsExperience;
  }
  //----> setter de la propriétées experience :pour écrire *
  set setPointsExperience(pointsExperience) {
    this.#pointsExperience = pointsExperience;
  }

  //----> getter de la propriétées Force :pour lire *
  get getPointsForce() {
    return this.#pointsForce;
  }
  //----> setter de la propriétées Force :pour écrire *
  set setPointsForce(pointsForce) {
    this.#pointsForce = pointsForce;
  }

  //----> getter de la propriétées Endurance :pour lire *
  get getPointsEndurance() {
    return this.#pointsEndurance;
  }
  //----> setter de la propriétées Endurance :pour écrire *
  set setPointsEndurance(pointsEndurance) {
    this.#pointsEndurance = pointsEndurance;
  }
  //----> getter de la propriétées sous :pour lire *
  get getPointsSous() {
    return this.#pointsSous;
  }
  //----> setter de la propriétées sous :pour écrire *
  set setPointsSous(pointsSous) {
    this.#pointsSous = pointsSous;
  }

  // Methodes de la class Etre *
  // Méthode de combat **
  combattre() {
    return "je suis entrain de combattre";
  }

  vendre() {
    return "Arme vendue avec succèe";
  }

  static aleatoire(valueDepart) {
    let random = Math.floor(Math.random() * 50);
    let resultat = valueDepart + random;
    return resultat;
  }
}
