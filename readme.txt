======================================================
              ZOO ARCADIA WEB APPLICATION
======================================================

Table des matières:
1. Introduction
2. Prérequis
3. Installation
4. Configuration
5. Utilisation
6. Structure du Projet
7. Fonctionnalités
8. Sécurité
9. Développement et Tests
10. Déploiement
11. Support

======================================================
1. INTRODUCTION
======================================================

Bienvenue dans l'application web du Zoo Arcadia ! Cette application permet aux visiteurs de consulter les informations sur les habitats, les animaux et les services du zoo. Elle inclut également des espaces dédiés aux administrateurs, employés et vétérinaires pour gérer les données et les avis.

======================================================
2. PRÉREQUIS
======================================================

Avant d'installer l'application, assurez-vous d'avoir les éléments suivants :
- Visual Studio Code ou tout autre éditeur de code
- XAMPP pour créer un environnement de serveur local
- MySQL pour la gestion de la base de données
- Une connexion internet pour accéder à Airtable (pour les données du zoo)
- PHP 7.0 ou supérieur
- Un navigateur web moderne (Chrome, Firefox, etc.)

======================================================
3. INSTALLATION
======================================================

1. **Cloner le dépôt GitHub :**
   ```sh
   git clone https://github.com/votre-utilisateur/zoo-arcadia.git
Démarrer XAMPP :Ouvrez XAMPP et démarrez Apache et MySQL.
Déplacer le projet dans le répertoire htdocs de XAMPP :
Déplacez le dossier cloné zoo-arcadia dans le répertoire htdocs de votre installation XAMPP.

======================================================
4. CONFIGURATION
======================================================

Configurer la base de données MySQL :
Accédez à http://localhost/phpmyadmin/
Créez une nouvelle base de données nommée zoo_arcadia
Importez le fichier zoo_arcadia.sql situé dans le répertoire du projet pour créer les tables nécessaires.
Configurer les fichiers de connexion à la base de données :
Ouvrez db.php et configurez les paramètres de connexion php
Copier le code$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zoo_arcadia";

Configurer Airtable : 
Ouvrez script.js et db.php
Remplacez your_api_key par votre clé API Airtable
Remplacez your_base_id par l'identifiant de la base Airtable
Lien de la base publique : https://airtable.com/appkPt4EdHQRwMCAt/shrhTYXW94c8xlQ2G
La base de données sera supprimée en décembre 2024 pour des raisons environnementale.

======================================================
5. UTILISATION
======================================================

Accéder à l'application :
Ouvrez votre navigateur et accédez à http://localhost/zoo-arcadia/
Connexion aux espaces dédiés :
Utilisez les identifiants fournis pour vous connecter aux espaces administrateur, employé et vétérinaire.

======================================================
6. STRUCTURE DU PROJET
======================================================

Le projet est structuré comme suit :Copier le codezoo-arcadia/
├── admin.js
├── create_user.php
├── db.php
├── get_users.php
├── healers.html
├── index.html
├── jobers.html
├── login.php
├── logout.php
├── script.js
├── session_start.php
├── style.css
├── styleguide.css
└── README.txt

======================================================
7. FONCTIONNALITÉSPage d'accueil :
======================================================

Présentation du zoo, habitats, services et avis des visiteurs.
Menu de navigation :
Accès facile à toutes les sections du site.
Vues globales des services et habitats :
Affichage des services et des habitats avec détails des animaux.
Espaces dédiés :
Administrateur : Gestion des comptes, services, habitats et animaux.
Employé : Validation des avis et enregistrement de la nourriture.
Vétérinaire : Comptes rendus de santé et avis sur les habitats.

======================================================
8. SÉCURITÉ
======================================================

Validation des formulaires :
Validation côté client avec JavaScript et côté serveur avec PHP.
Protection CSRF :
Utilisation de jetons CSRF pour protéger les formulaires.
Échappement des données :
Utilisation de fonctions d'échappement pour éviter les attaques XSS.
Requêtes préparées :
Utilisation de requêtes préparées pour éviter les injections SQL.
Hachage des mots de passe :
Utilisation de password_hash et password_verify pour sécuriser les mots de passe.

======================================================
9. DÉVELOPPEMENT ET TESTS
======================================================

Environnement de développement :Utilisez Visual Studio Code pour éditer le code.
Utilisez XAMPP pour exécuter le serveur local.Tests :
Testez les fonctionnalités en local en accédant à http://localhost/zoo-arcadia/Vérifiez la validation des formulaires et la sécurité des données.

======================================================
10. DÉPLOIEMENT
======================================================

Actuellement, l'application est conçue pour fonctionner en local avec XAMPP pour minimiser l'impact carbone. 
Si vous souhaitez déployer l'application en ligne, voici quelques étapes :
Choisir un hébergeur web :
Sélectionnez un hébergeur compatible avec PHP et MySQL.
Transférer les fichiers :Utilisez un client FTP pour transférer les fichiers du projet sur le serveur de l'hébergeur.
Configurer la base de données en ligne :
Créez une base de données sur l'hébergeur et importez le fichier zoo_arcadia.sql.
Mettre à jour les configurations :
Mettez à jour les fichiers de connexion (db.php) avec les informations de la base de données en ligne.

======================================================
11. SUPPORT
======================================================
Pour toute question ou assistance, veuillez contacter le support à l'adresse suivante : pro.chedriguet@gmail.com

rMerci d'utiliser l'application web du Zoo Arcadia !