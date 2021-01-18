//class pour crée des joueurs **

export default class Joueur {

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

  fuir() {
    pointExp = pointExp - 1;
    else if (pointExp = 0 ) {
      pointExp = 0;
    }
     return "vous êtes un froussard"; 
  }

  mourir() {
    if (pointsVie == 0) {
      return "Game Over";
    }
  }

  equiper() {
    var ArmeEquipe = true;
    if (ArmeEquipe = true) {
      pointFor = pointFor + pointsForce;
    }
  }

  desequiper() {
    //une variable est créée pour dire si arme est equipée ou pas
     var ArmeEquipe = false; 
    if (ArmeEquipe = false) {
      pointFor = pointsForce - pointFor;
  }

  acheterArm() { //pointExperience est le nom de la propriété exp du PNJ
    if (pointExperience <= pointExp) {
      var ArmeAchetee = true;
      pointSou = //Mettre la proprieté PNJ sous
      //pointSou va diminuer     //   il n'on pas de sous les pnj 
    }
  }

  vendreArm() {
    var ArmeAchetee = false;
    //pointSou va augmenter 
  };

  echanger() {
//cette Action peut se faire n'imoorte quand
    if (pointsSou => 100) {
    result = pointEnd ; pointFor ++;
    } else echanger() = null;
  };

  gagner() {

    if (pointsExp == 50) {
      return "La partie est gagnée";
       else return "Vous pouvez continuer votre quête";
    }
  };

}
