export default class Arme {
    #pointsForce= Null;
    #pointsEndurance= Null;
    #prix= Null;
  
    constructor(pointsForce,pointsEndurance,prix) {
      this.#pointsForce = pointsForce;
      this.#pointsEndurance = pointsEndurance;
      this.#prix = prix;
    }
  
  }