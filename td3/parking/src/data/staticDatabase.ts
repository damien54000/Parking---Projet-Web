import { city, parkings } from "../models/City";
import { GPS } from "../models/gps";
import { db } from "./db";

// villes

const aixEnProv : city = new city("Aix-en-Provence", "France",{longitude :43.533329,latitude :5.43333})
const LaSpezia : city = new city("La Spezia", "Italie",{longitude :44.238366,latitude :9.6912326})
const aixLaChap : city = new city("Aix-la-Chapelle", "Allemagne",{longitude :50.776351,latitude :6.083862})
const SanCristo: city = new city("San Cristóbal de La Laguna", "Espagne",{longitude :28.487180709838867,latitude :-16.313879013061523})
const NewCastke: city = new city("Newcastle", "Angleterre",{longitude :54.9738474,latitude :-1.6131572})

export const listeVilles : city[] =[]
listeVilles.push(aixEnProv,LaSpezia,aixLaChap,SanCristo,NewCastke); 

// parking des villes
const A :parkings = new parkings("A",aixEnProv,100,true,4.5)

const B :parkings = new parkings("B",LaSpezia,50,true,3)
const C :parkings = new parkings("C",LaSpezia,80,true,2.5)

const D :parkings = new parkings("D",aixLaChap,40,true,2.8)

const E :parkings = new parkings("E",SanCristo,70,true,3.1)

const F :parkings = new parkings("F",NewCastke,60,true,2.4)
const G :parkings = new parkings("G",NewCastke,90,true,3.2)

export const listeParking : parkings[] =[]
listeParking.push(A,B,C,D,E,F,G); 

// permet a la ville de prendre en compte les parkings qui y sont "construit" 
aixEnProv.addpark(A) 

LaSpezia.addpark(B)
LaSpezia.addpark(C)

aixLaChap.addpark(D)

SanCristo.addpark(E)

NewCastke.addpark(F)
NewCastke.addpark(G);

