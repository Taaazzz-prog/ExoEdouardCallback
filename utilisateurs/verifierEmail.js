const utilisateursExistants = require('./utilisateurs');

// vérification si un email est disponible
function verifierEmail(email, callback) {
    console.log(`1 - Vérification de l'email ${email}`);

    setTimeout(() => {
        let emailExiste = false;
        for (let utilisateur of utilisateursExistants) {
            if (utilisateur === email) {
                emailExiste = true;
            }
        }
        if (emailExiste) {
            callback(`1-1 - L'email ${email} est déjà utilisé.`);
        } else {
            console.log(`1-2 - L'email ${email} est disponible`);
            callback(null);
        }
    }, 1000);
}

module.exports = verifierEmail;
