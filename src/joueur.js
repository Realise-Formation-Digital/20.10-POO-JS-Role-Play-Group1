// class pour crées des joueurs *

import Etre from "./etre";

export default class Joueur extends Etre {

// Constructor de la class joueurs *

  constructor(nom,pointsVie,pointsExperience,pointsForce,pointsEndurance,arme,pointsSous) {

    super(nom,pointsVie,pointsExperience,pointsForce,pointsEndurance,arme,pointsSous);
  }
// methode S’il bat un monstre, il récupère les sous et armes du monstre et gagne 1 point d’expérience. S’il perd contre le monstre, il perd un point de vie * 
  combattre(){

  }
// S’il perd tous ses points de vie, il meurt et la partie est terminée *
  mourir(){
    
  }
// S’il fuit un monstre, il perd 1 point d’expérience sauf si déjà à 0 *
  fuir(){
    
  }
// La force et/ou l’endurance de l’arme, s’ajoute à la force et/ou l’endurance du joueur tant que l’arme est équipée. Une arme équipée ne peut pas être vendue *
  equiperArme(){
    
  }
// La force et/ou l’endurance de l’arme, s’enlève à la force et/ou l’endurance du joueur une fois l’arme déséquipée. Une arme déséquipée peut être vendue *
  desequiperArme(){
    
  }
// Il est possible d’acheter une arme à un PNJ ​ qui a au moins le même nombre de point d’expérience que le joueur​ et échanger le nombre de sous contre le prix de l’arme * 
  acheterArme(){
    
  }
// Il est possible de vendre une arme déséquipée à n’importe quel PNJ et recevoir 50% du prix de l’arme *
  vendreArme(){
    
  }
// Cette action peut se faire n’importe quand *
  echangerSous(){
    
  }
// une fois 50 points d’expérience atteint fini *
  gagner(){
    
  }
};
