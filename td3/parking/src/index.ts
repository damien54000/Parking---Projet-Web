import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import { serveStatic } from 'hono/bun';
import {listeVilles,listeParking} from'./data/staticDatabase';
import { ReadAllCitiesView } from './views/city/ReadAllCitiesView';
import { ReadOneCityView } from './views/city/ReadOneCityView';
import { ReadAllParkingsView } from './views/parking/ReadAllParkingsView';
import parkingRoutes from './routes/parkingRoutes';
import cityRoutes from './routes/cityRoutes';
import { generateBDD } from './data/db';

//generateBDD();
const app = new Hono()



app.get('/parkings', (c) => {
  const htmlContent = ReadAllParkingsView({ parkings: listeParking });
  return c.html(htmlContent);  // Renvoie le HTML généré
});

app.route('/parkings', parkingRoutes);


app.get('/cities', (c) => {
  const htmlContent = ReadAllCitiesView({ cities: listeVilles });
  return c.html(htmlContent);  // Renvoie le HTML généré
});

app.route('/cities', cityRoutes);


app.get('/', HomeController);

// Serve static files (like the image)
app.use('/static/*', serveStatic({ root: './' }));

export default app