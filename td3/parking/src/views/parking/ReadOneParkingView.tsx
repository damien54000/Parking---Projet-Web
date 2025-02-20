import { Layout } from "../shared/Layout";
import { city } from "../../models/City";
import { parkings } from "../../models/City";
import { toSlug } from "../../utils/toSlug";

type ReadOneParkingViewProps = {
    parking: parkings;
    ville: city
};
    
    const ReadOneParkingView =
    ({ parking, ville }: ReadOneParkingViewProps) => (
        Layout({
            titre1: "Parking",
            titre: "Parking",
            children: <div>{generateParking(parking, ville)}</div>
        })
    );
 

export { ReadOneParkingView };



function generateParking(parking: parkings, ville: city): any {
    return (
        <div>
            <h3>{parking.name}</h3>
            <p>Ville : {ville.name}</p>
            <p>Latitude : {parking.location.latitude}</p>
            <p>Longitude : {parking.location.longitude}</p>
            <p>Capacité : {parking.numberOfSpot}</p>
            <p>Ouvert : {parking.opened ? "Oui" : "Non"}</p>
            <p>Tarif horaire : {parking.hourlyRate}€/heure</p>
        </div>
    );
}