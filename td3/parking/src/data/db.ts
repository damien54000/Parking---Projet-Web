import { Database } from "bun:sqlite";
import { listeVilles, listeParking } from "./staticDatabase";
import { toSlug } from "../utils/toSlug";

export const db = new Database("src/data/parking.sqlite");

export function generateBDD(){
db.run(
   `CREATE TABLE IF NOT EXISTS "cities" (
    "id"    INTEGER NOT NULL,
    "name"    TEXT NOT NULL UNIQUE,
    "slug"    TEXT NOT NULL UNIQUE,
    "location"    TEXT,
    "country"    TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "parkings" (
    "id"    INTEGER NOT NULL,
    "name"    TEXT NOT NULL UNIQUE,
    "location"    TEXT,
    "numberOfPlaces"    INTEGER NOT NULL,
    "opened"    INTEGER NOT NULL DEFAULT 1,
    "hourlyRate"    REAL NOT NULL,
    "city_id"    INTEGER NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT),
    FOREIGN KEY("city_id") REFERENCES "cities"("id")
);


CREATE TABLE IF NOT EXISTS "parks" (
    "id"    TEXT NOT NULL UNIQUE,
    "startedAt"    TEXT NOT NULL,
    "endedAt"    TEXT,
    "vehicleNumberPlate"    TEXT,
    "spot_id"    INTEGER NOT NULL,
    "price"    REAL NOT NULL DEFAULT 0,
    PRIMARY KEY("id"),
    FOREIGN KEY("spot_id") REFERENCES "spots"("id")
);


CREATE TABLE IF NOT EXISTS "spots" (
    "id"    INTEGER NOT NULL,
    "parking_id"    INTEGER NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT),
    FOREIGN KEY("parking_id") REFERENCES "parkings"("id")
);`
);

listeVilles.forEach(ville => {

    db.run("INSERT INTO cities (name, slug, location, country) VALUES (?, ?, ?, ?)", 
        ville.name, ville.slug, ville.location, ville.country); 
});


// Insertion des données dans parkings
listeParking.forEach(park => {
    // Récupération de l'id de la ville correspondante
    const cityRow = db.query("SELECT id FROM cities WHERE id = ?").get(park.cityId);
  
    if (cityRow) {
      db.run("INSERT INTO parks (name, location, numberOfPlaces, hourlyRate, city_id) VALUES (?, ?, ?, ?, ?)",
             park.name, park.location, park.numberOfSpot, park.hourlyRate, park.cityId);}})
return}