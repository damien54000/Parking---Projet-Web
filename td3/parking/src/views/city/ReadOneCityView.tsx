import { Layout } from "../shared/Layout";
import { city } from "../../models/City";
import { parkings } from "../../models/City";
import { toSlug } from "../../utils/toSlug";

type ReadOneCityViewProps = {
    city: city;
    allParkings: parkings[];
};
    
    const ReadOneCityView = ({ city, allParkings }: ReadOneCityViewProps) => {
        const cityParkings = city.getParkings(allParkings);
    
        return Layout({
            titre1: city.name,
            titre: city.name,
            children: <div>{generateParkingsCity(cityParkings)}</div>
        });
    };
 

export { ReadOneCityView };


function generateParkingsCity(parkings: parkings[]): any {
    return (
        <ul>
            {parkings.length > 0 ? (
                parkings.map((parking) => (
                    <li key={parking.id}>
                        <h3>{parking.name}</h3>
                        <p>Latitude : {parking.location.latitude}</p>
                        <p>Longétude : {parking.location.longitude}</p>
                        <p>Capacité : {parking.numberOfSpot}</p>
                        <p>Ouvert : {parking.opened? "Oui" : "Non"}</p>
                        <p>Tarif horaire : {parking.hourlyRate}€/heure</p>

                    </li>
                ))
            ) : (
                <p>Aucun parking disponible pour cette ville.</p>
            )}
        </ul>
    );
}
