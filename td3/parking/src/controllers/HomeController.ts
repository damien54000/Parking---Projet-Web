import { html } from 'hono/html';

export const HomeController = (c: any) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
      <title>Welcome to EuroPark</title>
    </head>
    <body>
      <h1>Welcome to EuroPark</h1>
      <img src="./static/parking.png" alt="Parking">
      <p><br>Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!</p>
      <a href="/cities">Our Cities</a><br>
      <a href="/parkings">Our Car Parks</a>
    </body>
    </html>
  `);
};


