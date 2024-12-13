
function calculer() {
//la boucle qui va permettre pour toute les ligne de n'avoir que 3 name donc on peux creer autant de ligne que l'on veux
    var quantities = document.getElementsByName("t1");
    var prices = document.getElementsByName("t2");
    var totals = document.getElementsByName("t3");
    
    var subtotal = 0;

    for (var i = 0; i < quantities.length; i++) {
        var quantity = Number(quantities[i].value);
        var price = Number(prices[i].value);

        if (!isNaN(quantity) && !isNaN(price)) {
            var total = quantity * price;
            totals[i].value = total;
            subtotal += total;
        }
    }
// chaque calcul qui du coup a ses id pour renvoyersu chaque calcul du coup. 
// Puis son calcul plutot simple 
    document.getElementById("t13").value = subtotal;

// une remise de **** tout les 100 de valeur
var remisePourcentage = parseFloat(document.getElementById("t14").value) || 0;
var remiseMontant = (subtotal * remisePourcentage) / 100;
document.getElementById("t14").value = remisePourcentage;

var subtotalAfterDiscount = subtotal - remiseMontant;
document.getElementById("t15").value = subtotalAfterDiscount;

// Récupérer et calculer la taxe
var taxePourcentage = parseFloat(document.getElementById("t16").value) || 0; 
var taxeTotale = (subtotalAfterDiscount * taxePourcentage) / 100;
document.getElementById("t17").value = taxeTotale;
 

// Récupérer les frais d'expédition
var fraisExpedition = parseFloat(document.getElementById("t18").value) || 0; 
document.getElementById("t18").value = fraisExpedition;

var soldeTotal = subtotalAfterDiscount + taxeTotale + fraisExpedition;
document.getElementById("t19").value = soldeTotal;
}

// Annule tout les textes de la page avec input donc tout les calculs
function annuler() {
    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = "";
    });
}

//donc il clonne la ligne model, puis prend les input et les mets à 0
function ajout() {
    var newLi = document.getElementById("modeleLigne").cloneNode(true);
    var inputs = newLi.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    //récupere la derniere ligne pour mettre la nouvel ligne après
    var lastRow = document.getElementById("lastLigne");
    lastRow.parentNode.insertBefore(newLi, lastRow.nextSibling);
    //la nouvel ligne devient la derniere ligne
    newLi.setAttribute('id', 'lastLigne');
}






//trop dur pour moi  je refuse de tout faire par chat gpt sans comprendre


function remplir() {
    const descriptions = [
        'Produit A', 'Produit B', 'Produit C', 'Produit D', 'Produit E', 
        'Produit F', 'Produit G', 'Produit H', 'Produit I', 'Produit J'
    ];

    // Sélectionner les éléments d'entrée correspondant aux descriptions, quantités et prix
    const listeDesc = document.querySelectorAll('.desc');  // Éléments de description
    const listeQte = document.querySelectorAll('.qte');    // Éléments de quantité
    const listePrix = document.querySelectorAll('.prix');  // Éléments de prix

    // Parcourir toutes les lignes et remplir les champs
    for (let i = 0; i < listeDesc.length; i++) {
        // Remplir la description aléatoirement
        const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
        listeDesc[i].value = randomDescription;

        // Générer une quantité aléatoire entre 1 et 10
        const randomQuantity = Math.floor(Math.random() * 10) + 1;
        listeQte[i].value = randomQuantity;

        // Générer un prix aléatoire entre 1 et 100
        const randomPrice = (Math.random() * 100).toFixed(2);  // Deux chiffres après la virgule
        listePrix[i].value = randomPrice;

        // Calculer automatiquement le total pour cette ligne (Quantité * Prix)
        const quantity = Number(listeQte[i].value);
        const price = Number(listePrix[i].value);

        // Calculer et afficher le total pour cette ligne
        if (!isNaN(quantity) && !isNaN(price)) {
            const total = (quantity * price).toFixed(2);  // Total de la ligne
            document.getElementsByName("t3")[i].value = total;  // Mettre à jour le total dans le champ correspondant
        }
    }

    // Appeler la fonction de calcul pour mettre à jour le sous-total, la remise, la taxe, etc.
    calculer();
}
