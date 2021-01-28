import Etre from "./etre.js";
/**
 *@class class pour instancier des armes
 */
export default class Arme extends Etre {
  /**
   * Propieté privé de la class Arme
   */
  #prix;
  /**
   * * Constructeur de la class Arme.
   * @constructor(string)
   * @param {String} nom Optional
   */
  constructor(nom = String) {
    super(nom);
    super.setPointsForce(0);
    super.setPointsEndurance(0);
    this.#prix = 0;
  }
}
