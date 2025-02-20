import { JSX } from "hono/jsx";
import { city } from "../../models/City";
import {Layout} from "../shared/Layout"


//définition du type de paramètre
type ReadAllCitiesViewProps = {
    cities: Array<city>;
};

    const ReadAllCitiesView =
    ({ cities }: ReadAllCitiesViewProps) => (
        Layout({
            titre1: "Liste des villes:\n",
            titre: "TD_Parking",
            children: <div>{generateListeVilles(cities)}</div>
        })
    );      

export { ReadAllCitiesView };


function generateListeVilles(villes: city[]): any {
    return (
        <ul>
            {villes.map((ville) => (
                <li key={ville.slug}>
                    <a href={`/cities/${ville.slug}`}>{ville.name}</a>
                </li>
            ))}
        </ul>
    );
}


/*function generateListeVilles(villes :city[]): HTMLUListElement{
    const listeHtml = document.createElement('ul');
    villes.forEach(ville => {
        const elementHtml = document.createElement('li')
        listeHtml.textContent = ville.name
        listeHtml.appendChild(elementHtml)
    })
    return listeHtml
}
*/