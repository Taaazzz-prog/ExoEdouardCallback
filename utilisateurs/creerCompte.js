// créer un compte utilisateur
function creerCompte(email, callback) {
    console.log(`2 - Création du compte ${email}`);
    setTimeout(() => {
        const idUnique = Math.floor(Math.random() * 1000000000);
        console.log(`3 - Compte créé pour ${email} avec ID unique ${idUnique}`);
        callback(null, idUnique);
    }, 2000);
}

module.exports = creerCompte;
