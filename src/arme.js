export default class Arme {
    #pointsForce= Null;
    #pointsEndurance= Null;
    #prix= Null;
  
    constructor(pointsForce,pointsEndurance,prix) {
      this.#pointsForce = pointsForce;
      this.#pointsEndurance = pointsEndurance;
      this.#prix = prix;
    }

    scanibur = new Arme(10,15,rand(0,50))
    ttt = new Arme(20,35,rand(0,50))
    dfgh = new Arme(62,45,rand(0,50))
    srtthz = new Arme(85,24,rand(0,50))
  
  }