// Quand le document est chargé, initialiser les pop-ups et récupérer les données d'Airtable
document.addEventListener('DOMContentLoaded', function() {
  setupPopups();
  // Remplacez 'your_base_id' et 'your_table_name' par vos identifiants Airtable réels
  fetchDataFromAirtable('your_base_id', 'your_table_name', displayData);
});

// Fonction pour récupérer un élément par sélecteur
function getElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn(`Element not found: ${selector}`);
  }
  return element;
}

// Fonction pour initialiser les pop-ups
function setupPopups() {
  setupPopup('#popup', '.close-btn', '.open-popup-btn');
  setupPopup('#legal-popup', '.close-legal-btn', '.open-legal-popup-btn');
}

// Fonction pour configurer un pop-up
function setupPopup(popupSelector, closeBtnSelector, openBtnSelector) {
  const popup = getElement(popupSelector);
  const closeBtn = popup ? popup.querySelector(closeBtnSelector) : null;
  const openBtn = getElement(openBtnSelector);

  if (popup && closeBtn && openBtn) {
    openBtn.addEventListener('click', () => {
      popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    window.addEventListener('click', event => {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  }
}

// Importer le module Airtable
var Airtable = require('airtable');

// Configurer Airtable avec l'URL de l'API et la clé API stockée dans un autre fichier
const config = require('../old/config'); // Assurez-vous d'avoir un fichier config.js qui exporte votre clé API
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: config.AIRTABLE_API_KEY
});

// Définir la base Airtable
var base = Airtable.base('appkPt4EdHQRwMCAt');

// Fonction pour afficher les enregistrements d'une table donnée
function displayRecords(tableName) {
    base(tableName).select({
        // Aucun filtre ou tri spécifié, récupère tous les enregistrements
        maxRecords: 100 // Limite le nombre d'enregistrements pour éviter la surcharge, ajustable selon les besoins
    }).eachPage(function page(records, fetchNextPage) {
        // Cette fonction sera appelée pour chaque page d'enregistrements

        records.forEach(function(record) {
            console.log(`Table: ${tableName}`);
            console.log('Enregistrement ID:', record.id);
            console.log('Champs:', record.fields);
            console.log('---');
        });

        // Pour récupérer la page suivante d'enregistrements
        fetchNextPage();

    }, function done(err) {
        if (err) { 
            console.error(`Erreur lors de la récupération des enregistrements pour la table ${tableName}:`, err); 
            return; 
        }
    });
}

// Liste des tables à afficher
const tables = ['Table animaux', 'Table habitats', 'Table Services', 'Commentaires'];

// Afficher les enregistrements pour chaque table
tables.forEach(displayRecords);

function fetchDataFromAirtable(baseId, tableName, callback, params = {}) {
  const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
  const headers = {
    Authorization: `Bearer ${config.AIRTABLE_API_KEY}` // Remplacez 'your_api_key' par votre clé API réelle
  };

  axios.get(url, { headers, params })
    .then(response => callback(response.data.records))
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Failed to load data. Please try again later.');
    });
}

function displayData(records) {
  const container = getElement('#your-container-id'); // Remplacez par l'ID de votre conteneur où vous souhaitez afficher les données
  if (!container) {
    console.error('Container ID not found in the document.');
    return;
  }

  container.innerHTML = ''; // Clear the container before adding new elements
  records.forEach(record => {
    const div = document.createElement('div');
    div.innerHTML = `Nom: ${record.fields.Nom} <br> Description: ${record.fields.Description}`; // Adapt this according to your table fields
    container.appendChild(div);
  });
}

// Fonction pour basculer l'affichage des détails
function toggleDetails(element) {
  const infoDiv = element.querySelector('.additional-info');
  if (!infoDiv.style.display || infoDiv.style.display === 'none') {
    infoDiv.style.display = 'block';
  } else {
    infoDiv.style.display = 'none';
  }
}

// Gérer la soumission du formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch('server/login.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.redirected) {
      window.location.href = response.url;
    } else {
      return response.text();
    }
  })
  .then(data => {
    if (data) {
      document.getElementById('loginError').style.display = 'block';
    }
  })
  .catch(error => console.error('Error:', error));
});
