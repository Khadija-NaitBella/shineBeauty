let commandes = []; // Tableau pour stocker les commandes

// Validation du code postal
document.getElementById('codePostal').addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 5); // Retirer tout sauf les chiffres et limiter à 5 caractères
});

// Validation du numéro de téléphone
document.getElementById('tele').addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10); // Retirer tout sauf les chiffres et limiter à 10 caractères
});

// Calcul du total en fonction de la quantité
document.getElementById("quantite").addEventListener("input", function () {
    const quantite = parseInt(this.value) || 0; // Par défaut 0 si aucune quantité
    const prixUnitaire = 150; // Prix unitaire fixe
    const total = quantite > 0 ? quantite * prixUnitaire : 0; // Calculer le total uniquement si la quantité > 0

    // Afficher uniquement le montant avec une seule unité "DH"
    document.getElementById("totaldisplay").textContent = `${total} DH`;
});

// Validation de la commande
document.getElementById("commandeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêcher le rechargement de la page

    // Récupération des valeurs du formulaire
    const nom = document.getElementById("Nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("Email").value.trim();
    const adresse = document.getElementById("Adress").value.trim();
    const telephone = document.getElementById("tele").value.trim();
    const quantite = parseInt(document.getElementById("quantite").value) || 0; // Par défaut 0 si aucune quantité
    const prixUnitaire = 150; // Prix unitaire fixe
    const total = quantite * prixUnitaire;

    // Validation des champs obligatoires
    if (!nom || !prenom || !email || !adresse || !telephone || quantite <= 0) {
        alert("Veuillez remplir tous les champs obligatoires et entrer une quantité valide.");
        return;
    }

    // Ajout de la commande au tableau des commandes
    commandes.push({ nom, prenom, email, adresse, telephone, quantite, total });

    // Ajout d'une nouvelle ligne dans le tableau HTML
    const ordersTable = document.getElementById("ordersTable").querySelector("tbody");
    const newRow = ordersTable.insertRow();
    newRow.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${email}</td>
        <td>${adresse}</td>
        <td>${telephone}</td>
        <td>${quantite}</td>
        <td>${total} DH</td>
    `;

    // Réinitialisation du formulaire
    document.getElementById("commandeForm").reset(); // Réinitialiser le formulaire
    document.getElementById("totaldisplay").textContent = "0 DH"; // Réinitialiser l'affichage du total
});
