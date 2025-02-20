import { toSlug } from "../utils/toSlug";
import { GPS } from "./gps";
import {v4 as uuidv4} from 'uuid';
import { Spot } from "./Spot";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";

export class city {

    id : number;
    name : string;
    slug : string;
    parkingsIds : string [] = [];
    country : string;
    location : GPS;

    constructor(nom : string, pays :string, coordonnee : GPS) {
        
        this.id = generateRandomNumberId();
        this.name = nom;
        this.slug = toSlug(nom);
        this.country = pays;
        this.location = coordonnee;
        
    }

    
    public addpark(parking: parkings) { // permet d'enregistrer l'id d'un parking a une ville
        this.parkingsIds.push(parking.id);
    }

    public getParkings(listeParkings: parkings[]): parkings[]{
        return listeParkings.filter(parking => this.parkingsIds.includes(parking.id));
    }

}

export class parkings{

    id : string;
    name : string;
    cityId : string;
    location : GPS;
    numberOfSpot : number;
    opened : boolean;
    hourlyRate : number;
    parksIds: number[]= []; //liste id des places de stationnement.
    
    constructor(nom : string, ville : city, nombreDeSpot : number, ouvert : boolean, tarifHoraire:number){

        this.id = uuidv4();
        this.name =  nom;
        this.cityId = ville.id.toString(); //recupere l'id de la ville a laquelle il est ajouté
        this.location = ville.location;
        this.numberOfSpot = nombreDeSpot;
        this. opened = ouvert;
        this.hourlyRate = tarifHoraire;

        for (let index = 0; index < this.numberOfSpot; index++) { //loop qui pour le nombre d'emplacement possible sur me parking, genere les spots.
            let spot = new Spot(index); 
            this.parksIds[index] = spot.parkingId; // enrigistre les id des places de parking 
        }
    }
}
