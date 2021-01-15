class Pnj {
  #nomPnj = "";
  #pointsExperience = 0;
  #arme = "";

  constructor(nomPnj) {
    this.#pointsExperience = Math.floor(Math.random() * 51);
    this.#nomPnj = nomPnj;
  }
}
