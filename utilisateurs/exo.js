// Liste des utilisateurs existants
const utilisateursExistants = ["alice@example.com", "bob@example.com", "charlie@example.com"];

// vérification si un email est disponible
// Cette fonction vérifie si un email est déjà utilisé
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

// créer un compte utilisateur
function creerCompte(email, callback) {
    console.log(`2 - Création du compte ${email}`);
    setTimeout(() => {
        const idUnique = Math.floor(Math.random() * 1000000000);
        console.log(`3 - Compte créé pour ${email} avec ID unique ${idUnique}`);
        callback(null, idUnique);
    }, 2000);
}

// envoyer un email de confirmation
function envoyerEmail(email, callback) {
    console.log(`4 - Envoi du mail de confirmation à ${email}`);
    setTimeout(() => {
        console.log(`5 - Email envoyé à ${email}`);
        callback(null);
    }, 1500);
}

// Simulation de l'inscription 
function inscrireUtilisateur(email) {
    verifierEmail(email, (err) => {
        if (err) {
            console.error(`❌ ${err}`);
            return;
        }
        creerCompte(email, (err, id) => {
            if (err) {
                console.error(`❌ Erreur lors de la création du compte : ${err}`);
                return;
            }
            envoyerEmail(email, (err) => {
                if (err) {
                    console.error(`❌ Erreur lors de l'envoi de l'email : ${err}`);
                    return;
                }
                console.log(`✅ Inscription terminée pour ${email}`);
            });
        });
    });
}

// Exemple d'utilisation
inscrireUtilisateur("jhon.doe@exemple.com");
