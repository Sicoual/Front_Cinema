export interface Film {

    id : number,
	nom : string,
	realisateur : string,
	acteur_1 : string,
	acteur_2 : string,
	duree : string,
	dateSortie : Date,
	synopsis : string,
	categorie : string,
	langue : string,
	bandeAnnonce : string
	// listeSeances[] : Seance,
	enEdition?: boolean; // pour modifier les films à l'intérieur du tableau
}
