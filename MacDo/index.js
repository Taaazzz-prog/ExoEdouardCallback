/*
Consigne :

- Appelle les fonctions précédentes en cascade avec des callbacks imbriqués.
- Fournis un produit et une adresse en paramètre initial.
- Gère correctement les erreurs à chaque étape.
*/
const prendreCommande = require('./commande');
const preparerCommande = require('./preparation');
const livrerCommande = require('./livraison');
const produit = "Cheese Burger";
const adresseLivraison = "Cours Louis Leprince-Ringuet, Montbéliard, France";
// Fonction principale pour gérer la commande
function gererCommande(produit, adresseLivraison) {
    prendreCommande(produit, (erreurCommande, numeroCommande) => {
       
        if (erreurCommande) {
            console.error("Erreur lors de la prise de commande :", erreurCommande);
            return;
        }
        
        preparerCommande(numeroCommande, (erreurPreparation) => {
            if (erreurPreparation) {
                console.error("Erreur lors de la préparation de la commande :", erreurPreparation);
                return;
            }
            
            livrerCommande(numeroCommande, adresseLivraison, (erreurLivraison, message) => {
                if (erreurLivraison) {
                    console.error("Erreur lors de la livraison :", erreurLivraison);
                } else {
                    console.log(message);
                }
            });
        });
    });
}
// Appel de la fonction principale pour démarrer le processus de commande
gererCommande(produit, adresseLivraison);