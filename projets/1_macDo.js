function prendreSaCommande(burger_choisi, bip_moi_quand_tu_as_fini) {
    console.log("1 - Je vais prendre une commande de burger : " + burger_choisi);
    console.log("2 - Je vais préparer le burger : " + burger_choisi);
    setTimeout(function() {
        console.log("3 - Le " + burger_choisi + " est prêt !");
        // Appel du callback avec null pour l'erreur et le nom du burger comme résultat
        bip_moi_quand_tu_as_fini(null, burger_choisi);
    }, 3000); // Simule un délai de 3 secondes pour la préparation du burger
}

// Appel de la fonction avec un callback pour gérer le résultat
prendreSaCommande("Cheese Burger", function(erreur, resultat) {
    if (erreur) {
        console.error("Erreur lors de la préparation du burger :", erreur);
    } else {
        console.log("4 - vient chercher ton  : " + resultat);;
        console.log("Bonne gastro à vous et vos enfants !");
    }
});