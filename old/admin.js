function createUser(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    fetch('/create_user.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Compte créé avec succès.');
      } else {
        alert('Erreur lors de la création du compte.');
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
      alert('Erreur lors de la communication avec le serveur.');
    });
  }