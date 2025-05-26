// Création d'une fonction avec un callback pour lire un fichier
const fs = require('fs');

let lireFichier = function(nomFichier, callback) {
    fs.readFile(nomFichier, 'utf8', function(err, data) {
        if (err) {
            return callback(err); 
        }
        callback(null, data); 
    });
};

// Utilisation de la fonction pour lire un fichier
lireFichier('test2.txt', function(err, data) {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
    } else {
        console.log('Contenu du fichier:', data);
    }
});

module.exports = lireFichier; // Exportation de la fonction pour une utilisation ultérieure