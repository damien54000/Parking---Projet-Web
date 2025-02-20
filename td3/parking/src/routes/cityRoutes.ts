import { Hono } from 'hono';
import { listeParking, listeVilles } from '../data/staticDatabase';
import { city } from '../models/City';
import { toSlug } from '../utils/toSlug';
import { ReadOneCityView } from '../views/city/ReadOneCityView';

const cityRoutes = new Hono();

// Afficher toutes les villes
cityRoutes.get('/', (c) => {
  return c.json(listeVilles);

});

//Afficher une ville
cityRoutes.get('/:slug', (c) => {
  const slug = c.req.param('slug');
  const city = listeVilles.find(city => toSlug(city.slug) === slug);

  if(!city){
    return c.json(`Cette ville n'a pas été trouvé`,404);
  }

  const htmlContent = ReadOneCityView({ city: city, allParkings: listeParking });
  return c.html(htmlContent);  // Renvoie le HTML généré
  //return c.json(city);
});


export default cityRoutes;