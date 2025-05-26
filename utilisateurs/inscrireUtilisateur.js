const verifierEmail = require('./verifierEmail');
const creerCompte = require('./creerCompte');
const envoyerEmail = require('./envoyerEmail');

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

module.exports = inscrireUtilisateur;
