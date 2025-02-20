import { JSX } from "hono/jsx";
import { parkings } from "../../models/City";
import {Layout} from "../shared/Layout";
import { toSlug } from "../../utils/toSlug";


//définition du type de paramètre
type ReadAllParkingsViewProps = {
    parkings: Array<parkings>;
};

    const ReadAllParkingsView =
    ({ parkings }: ReadAllParkingsViewProps) => (
        Layout({
            titre1: "Liste des Parkings:\n",
            titre: "TD_Parking",
            children: <div>{generateListeParkings(parkings)}</div>
        })
    );
    

export { ReadAllParkingsView };



function generateListeParkings(parkings: parkings[]): any {
    return (
        <ul>
            {parkings.map((parkings) => (
                <li key={parkings.name}>
                    <a href={`/parkings/${toSlug(parkings.name)}`}>{toSlug(parkings.name)}</a>
                </li>
            ))}
        </ul>
    );
}
