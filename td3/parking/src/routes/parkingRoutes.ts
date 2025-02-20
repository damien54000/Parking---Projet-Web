import { Hono } from 'hono'
import { listeParking, listeVilles } from '../data/staticDatabase'
import { parkings } from '../models/City';
import { toSlug } from '../utils/toSlug';
import { ReadOneParkingView } from '../views/parking/ReadOneParkingView';

const parkingRoutes = new Hono();


//Route pour obtenir la liste de tous les parkings
parkingRoutes.get('/', (c) => {
  return c.json(listeParking)
});

// Route pour obtenir un parking spécifique par son nom
parkingRoutes.get('/:name', (c) => {
  const name = c.req.param('name');
  const parking = listeParking.find((parking) => toSlug(parking.name) === name);

  if(!parking){
    return c.json({message : `${name} n'a pas été trouvé`}, 404);
  }
  const ville = listeVilles.find((v) => v.id === Number(parking.cityId));

  if (!ville) {
    return c.html('<p>Ville associée introuvable</p>', 404);
}
  
  const htmlContent = ReadOneParkingView({ parking, ville });
  return c.html(htmlContent);  // Renvoie le HTML généré
});

export default parkingRoutes;