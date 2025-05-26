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
Le projet met en pratique des concepts fondamentaux de **JavaScript**, notamment les **callbacks** et la gestion des erreurs, tout en simulant des scénarios réels comme la gestion de commandes ou la manipulation de fichiers.
