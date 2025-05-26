const fs = require('fs');

// Lire un fichier avec readFileSync
let file = fs.readFileSync('callback.js', 'utf8');

if(file){
    //console.log(file);
}
else{
    console.log('File not found');
}

//---------------------------------------------------------------

//lire un fichier avec readFile
let file2 = fs.readFile('callbacks.js', 'utf8', function(err, data) {
    if (err) {
        //console.error('Erreur de" lecture du fichier:', err);
    } else {
        console.log(data);
    }
}
);


//6----------------------------------------------------------------


//declarer la fonction erreur dans une variable
let error_callback = function(err){
    if(err){
       // console.log("impossible d'afficher le fichier", err);
    }
}


// Lire un fichier avec readFile et une fonction de rappel
let error_callback_arrow = (filename) => (err, data) => {
    if (err) {
        console.log("impossible d'afficher le fichier test", filename);
    } else {
        console.log(data); // Ajout pour afficher le contenu du fichier si aucune erreur
    }
};

fs.readFile('callback.js', 'utf8', error_callback_arrow('callback.js'));