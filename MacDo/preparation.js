/*
Consigne :
- Crée une fonction preparerCommande(numeroCommande, callback).
- Reçoit le numéro généré précédemment et l'affiche.
- Simule la préparation avec un délai.
- Passe à la fonction suivante via callback une fois la préparation terminée.
*/

function preparerCommande(numeroCommande, callback) {
    // Affichage du numéro de commande
    console.log(`2 - Préparation de la commande numéro : ${numeroCommande}`);

    // Simule la préparation avec un délai de 2 secondes
    setTimeout(() => {
        console.log(`3 - Préparation terminée pour la commande numéro : ${numeroCommande}`);
        callback(); // Appel du callback une fois la préparation terminée
    }, 2000);
}
;

    module.exports = preparerCommande;