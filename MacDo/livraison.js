/*
Consigne :
- Crée une fonction livrerCommande(numeroCommande, adresseLivraison, callback).
- Affiche le numéro de commande reçu et l'adresse fournie.
- Simule la livraison avec un délai.
- Appelle le callback à la fin avec un message de succès.
*/
function livrerCommande(numeroCommande, adresseLivraison, callback) {
    // Affichage du numéro de commande et de l'adresse de livraison
    console.log(`4 - Livraison de la commande numéro : ${numeroCommande} à l'adresse : ${adresseLivraison}`);
    // Simule la livraison avec un délai de 3 secondes
    setTimeout(() => {
        const message = `5 - Livraison réussie pour la commande numéro : ${numeroCommande} à l'adresse : ${adresseLivraison}`;
        callback(null, message); // Appel du callback avec null pour l'erreur et le message de succès
    }, 3000);
}


module.exports = livrerCommande;
