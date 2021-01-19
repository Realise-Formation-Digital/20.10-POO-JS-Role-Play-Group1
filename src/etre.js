export default class Etre {

// Propriété des Êtres**

#nom ="";              // ---->   nom
#pointsVie = 10;       // ---->   point de départ    
#pointsExperience = 0; // ---->   point d'experience 
#pointsForce = 1;      // ---->   points de force    
#pointsEndurance = 1;  // ---->   points d'endurance 
#arme = "";           // ---->    nom de l'arme     
#pointsSous = 0;      // ---->    Sous possédé 





// Constructor de la class Etre propriétées **

constructor(nom,pointsVie,arme,pointsExperience,pointsForce,pointsEndurance,pointsSous) {

    this.#nom = nom;
    this.#pointsVie = pointsVie;
    this.#arme = random1; //Arme : S'il a 1 arme, il aura des points de force/endurance aléatoire entre 1 et le nombre de pointsExperience sinon pas d'arme
    this.#pointsExperience = random50; //Points d'experience : Cette methode génère un nombre aléatoire entre 1 et 50
    this.#pointsForce = randomXp; //Points de force  : Cette methode génère un nombre aléatoire entre 1 et le nombre de pointsExperience
    this.#pointsEndurance = randomXp; //Points d'endurance : Cette methode génère un nombre aléatoire entre 1 et le nombre de pointsExperience;
    this.#pointsSous = random50; //Sous : Cette methode génère un nombre aléatoire entre 1 et 50
    
    }
  //----> Getters et Setters des propriétées de la classe Etre * 
  //----> getter de la propriétées nom :pour lire *
    get getNom(){
    return this.#nom;
    }
//----> setter de la propriétées nom :pour écrire *
    set setNom(nom){
    this.#nom = nom;
    }
//----> getter de la propriétées points de vie:pour lire *
    get getPointsVie(){
    return this.#pointsVie;
    }
//----> setter de la propriétées points de vie:pour écrire *
    set setPointsVie(pointsVie){
        this.#pointsVie=pointsVie;
    }

//----> getter de la propriétées arme :pour lire *
    get getArme(){
        return this.#arme;
    }
//----> setter de la propriétées arme :pour écrire *
    set setArme(arme){
        this.#arme=arme;
    }

//----> getter de la propriétées experience :pour lire *
    get getPointsExperience(){
        return this.#pointsExperience;
    }
//----> setter de la propriétées experience :pour écrire *
    set setPointsExperience(pointsExperience){
        this.#pointsExperience=pointsExperience;
    }

//----> getter de la propriétées Force :pour lire *
    get getPointsForce(){
        return this.#pointsForce;
    }
//----> setter de la propriétées Force :pour écrire *
    set setPointsForce(pointsForce){
        this.#pointsForce=pointsForce;
    }

//----> getter de la propriétées Endurance :pour lire *
    get getPointsEndurance(){
        return this.#pointsEndurance;
    }
//----> setter de la propriétées Endurance :pour écrire *
    set setPointsEndurance(pointsEndurance){
        this.#pointsEndurance=pointsEndurance;
    }
//----> getter de la propriétées sous :pour lire *
    get getPointsSous(){
        return this.#pointsSous;
    }
//----> setter de la propriétées sous :pour écrire *
    set setPointsSous(pointsSous){
        this.#pointsSous = pointsSous;
    }

    // Methodes de la class Etre * 
    // Méthode de combat **
    
  

    vendre() {

    
    return "Arme vendue avec succèe";
    
  }

    gagner() {

    
    return "La partie est gagnée";
    
    }

};

// Methodes & Fonctions random pour les différentes propriétés
let random50 = 1 + Maths.round(Maths.random() * 51);
let randomXp = Maths.round(Maths.random() * pointsExperience);
let random1 = Maths.random();