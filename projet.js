// Code Postal 
document.getElementById('codePostal').addEventListener('input', function () {
    let codePostal = this.value;
    this.value = codePostal.replace(/\D/g, '');

    if (this.value.length > 5) {
        this.value = this.value.slice(0, 5);
    }

    if (this.value.length === 5 && !/^\d+$/.test(this.value)) {
        alert('You must enter only numbers.');
    }
});
// num de Télé :
document.getElementById('tel').addEventListener('input', function () {
    let tele = this.value;
    this.value = tele.replace(/\D/g, '');

    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }

    if (this.value.length === 10 && !/^\d+$/.test(this.value)) {
        alert('You must enter only numbers.');
    }
});
// pour le message 
let confirmOrder = document.getElementById('commander')
        confirmOrder.addEventListener('click', function () {
            let messageElement = document.getElementById("message");
            let nom = document.getElementById("nom").value;
            let prenom = document.getElementById("prenom").value;
            let codePostal = document.getElementById("codePostal").value;
            let tele = document.getElementById("tele").value;
            let quantite = document.getElementById("quantite").value;

            if (nom === ""  prenom === ""  CodePostal === ""  tele === ""  quantite === "") {
                return messageElement.textContent = "Commande non valide. Veuillez remplir tous les champs.";

            } else {
                messageElement.textContent = "Commande validée. Merci pour votre achat !";
                messageElement.style.color = "green";
                return true;
            }
        })
