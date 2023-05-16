export interface AfficherSeance {
id : number;
date : any;
heure : any;
nbPlacesReservees : any;
film : {
    id: number,
    nom: string,
    duree: string,
};
salle : number;

}