// Fonction permettant de générer un nombre aléatoire entier et positif de 6 chiffres
// Fonction emplyée pour obtenir un id numérique pour les classes disposant de cet type de valeur

export function generateRandomNumberId(): number {
    return Math.floor(Math.random() * 900000) + 100000;  // Génération d'un nombre aléatoire entre 100000 et 999999
};