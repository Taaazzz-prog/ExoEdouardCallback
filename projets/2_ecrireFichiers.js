//creation d'une foncttion pour ecrire dans un fichier avec un callback
const fs = require('fs');   
let ecrireFichier = function(nomFichier, contenu, callback) {
    fs.writeFile(nomFichier, contenu, function(err) {
        if (err) {
            return callback(err);
        }
        callback(null);
    });
};
// Utilisation de la fonction pour écrire dans un fichier
ecrireFichier('test2.txt', 'Ceci est un test', function(err) {
    if (err) {
        console.error('Erreur lors de l\'ecriture du fichier:', err);
    } else {
        console.log('Le fichier a été écrit avec succès.');
    }
}
);

module.exports = ecrireFichier; // Exportation de la fonction pour une utilisation ultérieure