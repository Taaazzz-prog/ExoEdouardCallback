/*
Consigne :
- Crée une fonction prendreCommande(produit, callback).
- Génère un numéro de commande aléatoire à 6 chiffres (nombre entier).
- Affiche la prise de commande du cheese burger.
- Passe ce numéro via callback à la fonction suivante.
*/
function prendreCommande(produit, callback) {
    // Génération d'un numéro de commande aléatoire à 6 chiffres
    const numeroCommande = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    
    // Affichage de la prise de commande
    console.log(`1 - Commande prise : ${produit} (Numéro de commande : ${numeroCommande})`);
    
    // Appel du callback avec null pour l'erreur et le numéro de commande
    callback(null, numeroCommande);
}

module.exports = prendreCommande;