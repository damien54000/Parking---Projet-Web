import { generateRandomNumberId } from "../utils/generateRandomNumberId";

export class Spot {
   
    id: number;
    parkingId: number;

    constructor(id: number) {
        this.id = id;
        this.parkingId = generateRandomNumberId(); //genere l'id aleatoirement
    }
}