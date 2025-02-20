import { Hono } from 'hono';
import { listeVilles } from '../../data/staticDatabase';
import { city } from '../../models/City';
import { toSlug } from '../../utils/toSlug';
import { Context } from "hono";
import { db } from "../../data/db";
import City from "../models/City";



const RdAllCities = new Hono()
RdAllCities.get('/:AllCities', (c) => {
    return c.json(listeVilles);
  });



  export const ReadAllCitiesController = async (c: Context) => {
    try {
      // Récupération des villes depuis SQLite
      const rows = db.query("SELECT id, name, slug, country, location FROM cities").all();
      
      // Mappez chaque row en instance de City en vérifiant les propriétés de chaque ligne
      const cities = rows.map(row => 
        new City(row['id'], row['name'], row['slug'], row['country'], row['location'])
      );
  
      return c.json(cities);
    } catch (error) {
      console.error("Erreur lors de la récupération des villes : ", error);
      return c.text("Erreur de serveur", 500);
    }
  };
};
