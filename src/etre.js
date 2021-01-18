export default class Etre {

// Propriété des joueurs **

  #pointsVie = Null;
  #pointsArm = Null;
  #pointsExp = Null;
  #pointsFor = Null;
  #pointsEnd = Null;
  #pointsSou = Null;

// Constructor de la class joueurs propriétées **

  constructor(pointsVie,pointsArm,poinstExp,pointsFor,pointsEnd,pointsSou) {

    this.#pointsVie = pointVie;
    this.#pointsArm = pointArm;
    this.#pointsExp = pointExp;
    this.#pointsFor = pointFor;
    this.#pointsEnd = pointEnd;
    this.#pointsSou = pointSou;
  }
  // Méthode de combat **

combattre() {
    if (Monstre(pointsVie) = 0) {
      Joueur(pointExp) =+1;
      Joueur(pointSou) =  Joueur(pointSou) + Monstre(pointSou);
      Monstre(pointSou) = 0;
    }
    return "vous avez vaincu le méchant monstre"; 
  }


  gagner() {

    if (pointsExp == 50) {
      return "La partie est gagnée";
       else return "Vous pouvez continuer votre quête";
    }

}
