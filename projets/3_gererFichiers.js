//cree une fonction pour gerer un fichier avec un callback
const fs = require('fs');
const lireFichier = require('./1_lireFichiers');
const ecrireFichier = require('./2_ecrireFichiers');

lireFichier('1_lireFichiers.js', function(err, data) {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
    } else {
        console.log('Contenu du fichier:', data);
    }
});