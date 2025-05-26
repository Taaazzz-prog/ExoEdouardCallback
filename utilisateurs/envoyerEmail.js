// envoyer un email de confirmation
function envoyerEmail(email, callback) {
    console.log(`4 - Envoi du mail de confirmation à ${email}`);
    setTimeout(() => {
        console.log(`5 - Email envoyé à ${email}`);
        callback(null);
    }, 1500);
}

module.exports = envoyerEmail;
