const nodemailer = require('nodemailer');

function envoyerEmail(email, callback) {
    // Configurer le transporteur SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Vous pouvez utiliser un autre service (ex: Outlook, Yahoo)
        auth: {
            user: 'votre email', // Remplacez par votre email
            pass: 'votre mot de passe appli'     // Remplacez par votre mot de passe ou un mot de passe d'application
        }
    });

    // Définir les options de l'email
    const mailOptions = {
        from: 'wazzzzzzaaaa@popeye.fr', // L'expéditeur
        to: email,                     // Le destinataire
        subject: 'Confirmation d’inscription',
        text: `Bonjour,

Merci de vous être inscrit ! Votre compte a été créé avec succès.

Cordialement,
L'équipe`
    };

    // Envoyer l'email
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(`Erreur lors de l'envoi de l'email : ${err}`);
            callback(err);
        } else {
            console.log(`Email envoyé : ${info.response}`);
            callback(null);
        }
    });
}

module.exports = envoyerEmail;