/**
 * @class Represent la classe père des classes: Joueur, Pnj, Monstre et Arme.
 */
export default class Etre {
  //#region Propriétés de la class Etre
  #id;
  #nom;
  #pointsExperience;
  #pointsForce;
  #pointsEndurance;
  #arme;
  #pointsSous;
  //#endregion

  /**
   * * Constructeur de la class Etre.
   * @constructor(string)
   * @param {String} nom Paramètre optional nom du type string.
   */
  constructor(nom = String) {
    //#region Initialisation des propriétées de la class Etre
    this.#nom = nom;
    this.#id = 0;
    this.#pointsExperience = 0;
    this.#pointsForce = 1;
    this.#pointsEndurance = 1;
    this.#arme = Object;
    this.#pointsSous = 20;
    //#endregion
  }

  //#region Méthodes GETTERS et SETTERS des propriétés de la class Etre

  /**
   * * Méthode GET qui permet de récupérer la valeur de la propriété privée #id
   * @method GET(accesseur)
   * @return {Number} Valeur de #id: number
   */
  getId() {
    return this.#id;
  }
  /**
   * * Méthode SET qui permet d'affecter une nouvelle valeur dans la propriété privée #id
   * @method SET(mutateur)
   * @param {Number} id
   */
  setId(id) {
    this.#id = id;
  }

  /**
   * * Méthode GET qui permet de récupérer la valeur de la propriété privée #nom
   * @method GET(accesseur)
   * @return {String} Valeur de #nom: String
   */
  getNom() {
    return this.#nom;
  }
  /**
   * * Méthode SET qui permet d'affecter une nouvelle valeur dans la propriété privée #nom
   * @method SET(mutateur)
   * @param {String} nom
   */
  setNom(nom) {
    this.#nom = nom;
  }

  /**
   * * Méthode GET qui permet de récupérer les données de l'objet de la propriété privée #arme
   * @method GET(asseseur)
   * @return {Object} Données de #arme: Objet
   */
  getArme() {
    return this.#arme;
  }
  /**
   * * Méthode SET qui permet d'affecter un nouveau objet dans la propriété privée #arme
   * @method SET(mutateur)
   * @param {Object} arme
   */
  setArme(arme) {
    this.#arme = arme;
  }

  /**
   * * Méthode GET qui permet de récupérer la valeur de la propriété privée #pointsExperience
   * @method GET(accesseur)
   * @return {Number} Valeur de #pointsExperience: number
   */
  getPointsExperience() {
    return this.#pointsExperience;
  }
  /**
   * * Méthode SET qui permet d'affecter une nouvelle valeur dans la propriété privée #pointsExperience
   * @method SET(mutateur)
   * @param {Number} pointsExperience
   */
  setPointsExperience(pointsExperience) {
    this.#pointsExperience = pointsExperience;
  }

  /**
   * * Méthode GET qui permet de récupérer la valeur de la propriété privée #pointsForce
   * @method GET(accesseur)
   * @return {string} Valeur de #pointsForce: string
   */
  getPointsForce() {
    return this.#pointsForce;
  }
  /**
   * * Méthode SET qui permet d'affecter une nouvelle valeur dans la propriété privée #pointsForce
   * @method SET(mutateur)
   * @param {string} pointsForce
   */
  setPointsForce(pointsForce) {
    this.#pointsForce = pointsForce;
  }

  /**
   * * Méthode GET qui permet de récupérer la valeur de la propriété privée #pointsEndurance
   * @method GET(accesseur)
   * @return {Number} Valeur de #pointsEndurance: number
   */
  getPointsEndurance() {
    return this.#pointsEndurance;
  }
  /**
   * * Méthode SET qui permet d'affecter une nouvelle valeur dans la propriété privée #pointsEndurance
   * @method SET(mutateur)
   * @param {Number}pointsEndurance
   */
  setPointsEndurance(pointsEndurance) {
    this.#pointsEndurance = pointsEndurance;
  }

  /**
   * * Méthode GET qui permet de récupérer la valeur de la propriété privée #pointsSous
   * @method GET(accesseur)
   * @return {Number} Valeur de #pointsSous: number
   */
  getPointsSous() {
    return this.#pointsSous;
  }
  /**
   * * Méthode SET qui permet d'affecter une nouvelle valeur dans la propriété privée #pointsSous
   * @method SET(mutateur)
   * @param {Number} pointsSous
   */
  setPointsSous(pointsSous) {
    this.#pointsSous = pointsSous;
  }
  //#endregion

  //#region Méthodes de la class Etre

  // Méthode combattre qui return ei gagner ou perdre l'Etre
  combattre() {
    return "je suis entrain de combattre";
  }

  vendre(arme) {
    return arme;
  }
  // Méthode aleatoire qui return un valeur aleatoire entre les deux valuers d'entre
  aleatoire(valeurMin, valeurMax) {
    let resultat = valeurMin + Math.floor(Math.random() * valeurMax);
    return resultat;
  }
  //#endregion
}
