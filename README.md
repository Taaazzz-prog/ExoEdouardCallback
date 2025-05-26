# 🌟 **Projet Exo7** 🌟

Ce projet contient plusieurs exercices et projets en **JavaScript**, principalement axés sur la gestion des **callbacks**, la manipulation de fichiers et la simulation de processus asynchrones. Voici une description détaillée des fichiers et dossiers présents.

---

## 🗂️ **Structure du projet**

### 1. 📂 **Dossier `MacDo`**
Ce dossier contient une simulation d'un processus de commande dans un restaurant (type fast-food). Les fichiers sont organisés pour représenter les différentes étapes de la commande : **prise**, **préparation** et **livraison**.

#### 📄 **Fichiers :**
- **`commande.js`** :
  - 🛠️ **Fonction** : `prendreCommande(produit, callback)`
  - 📋 Génère un numéro de commande aléatoire et passe ce numéro au callback.
  - ✨ **Exemple de sortie** :
    ```
    1 - Commande prise : Cheese Burger (Numéro de commande : 123456)
    ```

- **`preparation.js`** :
  - 🛠️ **Fonction** : `preparerCommande(numeroCommande, callback)`
  - ⏳ Simule la préparation d'une commande avec un délai de **2 secondes**.
  - ✨ **Exemple de sortie** :
    ```
    2 - Préparation de la commande numéro : 123456
    3 - Préparation terminée pour la commande numéro : 123456
    ```

- **`livraison.js`** :
  - 🛠️ **Fonction** : `livrerCommande(numeroCommande, adresseLivraison, callback)`
  - 🚚 Simule la livraison d'une commande avec un délai de **3 secondes**.
  - ✨ **Exemple de sortie** :
    ```
    4 - Livraison de la commande numéro : 123456 à l'adresse : Cours Louis Leprince-Ringuet, Montbéliard, France
    5 - Livraison réussie pour la commande numéro : 123456 à l'adresse : Cours Louis Leprince-Ringuet, Montbéliard, France
    ```

- **`index.js`** :
  - 🧩 **Fichier principal** qui orchestre les étapes de commande en cascade avec des **callbacks imbriqués**.
  - ⚠️ Gère les erreurs à chaque étape.
  - ✨ **Exemple de sortie attendue** :
    ```
    1 - Commande prise : Cheese Burger (Numéro de commande : 123456)
    2 - Préparation de la commande numéro : 123456
    3 - Préparation terminée pour la commande numéro : 123456
    4 - Livraison de la commande numéro : 123456 à l'adresse : Cours Louis Leprince-Ringuet, Montbéliard, France
    5 - Livraison réussie pour la commande numéro : 123456 à l'adresse : Cours Louis Leprince-Ringuet, Montbéliard, France
    ```

- **`exo de merde.txt`** :
  - 📜 Fichier texte décrivant les consignes pour la simulation de commandes en cascade.

---

### 2. 📂 **Dossier `projets`**
Ce dossier contient des exercices pratiques sur la gestion des fichiers avec des **callbacks**.

#### 📄 **Fichiers :**
- **`0_intituler_exercices.txt`** :
  - 📝 Contient les consignes des exercices sur la gestion des fichiers avec des callbacks.

- **`1_lireFichiers.js`** :
  - 🛠️ **Fonction** : `lireFichier(nomFichier, callback)`
  - 📖 Lit un fichier texte et renvoie son contenu via un callback.
  - ✨ **Exemple d'utilisation** :
    ```javascript
    lireFichier('test2.txt', function(err, data) {
        if (err) {
            console.error('❌ Erreur lors de la lecture du fichier:', err);
        } else {
            console.log('📄 Contenu du fichier:', data);
        }
    });
    ```

- **`2_ecrireFichiers.js`** :
  - 🛠️ **Fonction** : `ecrireFichier(nomFichier, contenu, callback)`
  - ✍️ Écrit du contenu dans un fichier texte.
  - ✨ **Exemple d'utilisation** :
    ```javascript
    ecrireFichier('test2.txt', 'Ceci est un test', function(err) {
        if (err) {
            console.error('❌ Erreur lors de l\'écriture du fichier:', err);
        } else {
            console.log('✅ Le fichier a été écrit avec succès.');
        }
    });
    ```

- **`3_gererFichiers.js`** :
  - 🛠️ Combine les fonctions de lecture et d'écriture pour gérer un fichier avec des callbacks.
  - ✨ **Exemple d'utilisation** :
    ```javascript
    lireFichier('1_lireFichiers.js', function(err, data) {
        if (err) {
            console.error('❌ Erreur lors de la lecture du fichier:', err);
        } else {
            console.log('📄 Contenu du fichier:', data);
        }
    });
    ```

- **`1_macDo.js` et `2_macDo.js`** :
  - 🍔 Exercices supplémentaires simulant des commandes avec des callbacks.

- **Fichiers de test (`test.txt`, `test2.txt`, `test3.txt`)** :
  - 📂 Contiennent des données de test pour les fonctions de lecture et d'écriture.

---

### 3. 📂 **Fichiers à la racine**
- **`fs.js`** :
  - 🛠️ Contient des exemples d'utilisation des fonctions `fs.readFile` et `fs.readFileSync` pour lire des fichiers en Node.js.

- **`callback.js`** :
  - 🕒 Exemple simple d'utilisation d'un callback avec un délai simulé.

---

### 4. 📂 **Dossier `utilisateurs`**
Ce dossier contient une simulation du processus d'inscription d'un utilisateur en utilisant des **callbacks imbriqués**.

#### 📄 **Fichiers :**
- **`utilisateurs.js`** :
  - 📋 Contient la liste des utilisateurs existants.
  - ✨ Exemple :
    ```javascript
    const utilisateursExistants = ["alice@example.com", "bob@example.com", "charlie@example.com"];
    ```

- **`verifierEmail.js`** :
  - 🛠️ **Fonction** : `verifierEmail(email, callback)`
  - 🔍 Vérifie si un email est déjà utilisé.
  - ✨ Exemple de sortie :
    ```
    1 - Vérification de l'email jhon.doe@exemple.com
    1-2 - L'email jhon.doe@exemple.com est disponible
    ```

- **`creerCompte.js`** :
  - 🛠️ **Fonction** : `creerCompte(email, callback)`
  - 🆔 Crée un compte utilisateur avec un identifiant unique.
  - ✨ Exemple de sortie :
    ```
    2 - Création du compte jhon.doe@exemple.com
    3 - Compte créé pour jhon.doe@exemple.com avec ID unique 123456789
    ```

- **`envoyerEmail.js`** :
  - 🛠️ **Fonction** : `envoyerEmail(email, callback)`
  - 📧 Simule l'envoi d'un email de confirmation.
  - ✨ Exemple de sortie :
    ```
    4 - Envoi du mail de confirmation à jhon.doe@exemple.com
    5 - Email envoyé à jhon.doe@exemple.com
    ```

- **`inscrireUtilisateur.js`** :
  - 🛠️ Coordonne le processus d'inscription en appelant les fonctions précédentes.
  - ✨ Exemple de sortie complète :
    ```
    ✅ Inscription terminée pour jhon.doe@exemple.com
    ```

- **`index.js`** :
  - 🧩 Fichier principal pour exécuter le processus d'inscription.
  - ✨ Exemple d'utilisation :
    ```javascript
    const inscrireUtilisateur = require('./inscrireUtilisateur');
    inscrireUtilisateur("jhon.doe@exemple.com");
    ```

---

## 🎯 **Objectifs pédagogiques**
- ✅ Comprendre et utiliser les **callbacks** en JavaScript.
- ✅ Gérer des opérations **asynchrones** en cascade.
- ✅ Manipuler des fichiers avec **Node.js** (`fs`).
- ✅ Gérer correctement les **erreurs** dans des fonctions asynchrones.

---

## 🛠️ **Instructions pour exécuter les fichiers**
1. Assurez-vous d'avoir **Node.js** installé sur votre machine.
2. Naviguez dans le dossier contenant le fichier que vous souhaitez exécuter.
3. Lancez le fichier avec la commande :
   ```bash
   node <nom_du_fichier>.js
   ```

---

## 🏆 **Résultat attendu**
Le projet met en pratique des concepts fondamentaux de **JavaScript**, notamment les **callbacks** et la gestion des erreurs, tout en simulant des scénarios réels comme la gestion de commandes ou la simulation d'un processus d'inscription.

---

# Simulation d'inscription utilisateurs

Ce projet simule le processus d'inscription d'un utilisateur en utilisant une série de fonctions avec des callbacks imbriqués. L'objectif est de vérifier si un email est disponible, de créer un compte utilisateur, puis d'envoyer un email de confirmation.

## Fonctionnalités

1. **Vérification de l'existence d'un utilisateur**  
   Vérifie si l'email fourni est déjà utilisé.

2. **Création du compte utilisateur**  
   Génère un identifiant unique pour l'utilisateur.

3. **Envoi d'un email de confirmation**  
   Simule l'envoi d'un email de confirmation (sans réellement envoyer de mail).

## Structure du projet

Voici la structure des fichiers du projet :

```
/home/formation/Cours Edouard/Exo7/utilisateurs/
├── utilisateurs.js          # Contient la liste des utilisateurs existants
├── verifierEmail.js         # Vérifie si un email est disponible
├── creerCompte.js           # Crée un compte utilisateur
├── envoyerEmail.js          # Simule l'envoi d'un email de confirmation
├── inscrireUtilisateur.js   # Coordonne le processus d'inscription
└── index.js                 # Point d'entrée pour exécuter l'inscription
```

## Exemple de sortie attendue

Voici un exemple de sortie pour l'inscription de l'utilisateur `jhon.doe@exemple.com` :

```
- vérification de l'email jhon.doe@exemple.com
- l'email jhon.doe@exemple.com est disponible
- création du compte jhon.doe@exemple.com
- compte créé pour jhon.doe@exemple.com avec ID unique 123456789
- envoi du mail de confirmation à jhon.doe@exemple.com
- email envoyé à jhon.doe@exemple.com
- inscription terminée pour jhon.doe@exemple.com
```

## Explication avec diagramme

Voici un diagramme illustrant le processus d'inscription :

![Diagramme du processus d'inscription](https://via.placeholder.com/800x400?text=Diagramme+du+processus+d%27inscription)

1. **Vérification de l'email**  
   Si l'email existe déjà, le processus s'arrête ici.

2. **Création du compte**  
   Si l'email est disponible, un compte est créé avec un identifiant unique.

3. **Envoi de l'email de confirmation**  
   Une fois le compte créé, un email de confirmation est envoyé.

## Comment exécuter le projet

1. Clonez le dépôt ou copiez les fichiers dans votre environnement local.
2. Assurez-vous que Node.js est installé.
3. Exécutez le fichier `index.js` avec la commande suivante :

   ```bash
   node index.js
   ```

4. Modifiez l'email dans `index.js` pour tester différents cas.

## Aperçu du code

### Exemple de fonction `inscrireUtilisateur`

```javascript
const inscrireUtilisateur = require('./inscrireUtilisateur');

inscrireUtilisateur("jhon.doe@exemple.com");
```

## Auteur

Projet créé pour illustrer l'utilisation des callbacks en JavaScript.

---

# Exo7 - Gestion des utilisateurs

## Fonctionnalité : Envoi d'email de confirmation

Ce projet inclut une fonctionnalité permettant d'envoyer un email de confirmation d'inscription à un utilisateur.

### Fichier concerné

- `/utilisateurs/envoyerEmail.js`

### Description

La fonction `envoyerEmail` utilise le module `nodemailer` pour envoyer un email de confirmation d'inscription. Voici les étapes principales :

1. Configuration d'un transporteur SMTP avec un service comme Gmail.
2. Définition des options de l'email (expéditeur, destinataire, sujet, contenu).
3. Envoi de l'email et gestion des erreurs éventuelles.

### Exemple d'utilisation

```javascript
const envoyerEmail = require('./utilisateurs/envoyerEmail');

envoyerEmail('utilisateur@example.com', (err) => {
    if (err) {
        console.error('Erreur lors de l\'envoi de l\'email :', err);
    } else {
        console.log('Email envoyé avec succès !');
    }
});
```

### Remarques importantes

- **Sécurité** : Les informations sensibles comme l'email et le mot de passe doivent être stockées dans des variables d'environnement pour éviter de les exposer dans le code source.
- **Configuration** : Assurez-vous que le service SMTP utilisé est correctement configuré et que les autorisations nécessaires sont activées (par exemple, les mots de passe d'application pour Gmail).

### Dépendances

- [nodemailer](https://www.npmjs.com/package/nodemailer)
