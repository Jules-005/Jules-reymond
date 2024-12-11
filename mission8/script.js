//J'ai laissé les détails de Chat gpt pour si jamais je reprend le code je comprend mieux se que chaque ligne signifie(merci à lui)
//Tout les textes de chaques exercices, ainsi que le code du coup
const exercices = [
    {
        titre: "Somme de deux nombres",
        description: "Créer une fonction qui retourne la somme de deux nombres.",
        demo: "Entrez deux nombres séparés par une virgule (ex: 5, 3).",
        inputCount: 2,
        solution: `
            function somme(a, b) {
                return a + b;
            }
        `
    },
    {
        titre: "Factorielle d'un nombre",
        description: "Créer une fonction qui calcule la factorielle d'un nombre.",
        demo: "Entrez un nombre pour calculer sa factorielle.",
        inputCount: 1,
        solution: `
            function factorielle(n) {
                if (n === 0) return 1;
                return n * factorielle(n - 1);
            }
        `
    },
    {
        titre: "Inverser une chaîne de caractères",
        description: "Créer une fonction qui inverse une chaîne de caractères.",
        demo: "Entrez une chaîne de caractères à inverser.",
        inputCount: 1,
        solution: `
            function inverserChaine(str) {
                return str.split('').reverse().join('');
            }
        `
    },
    {
        titre: "Deviner le nombre",
        description: "Devinez un nombre généré aléatoirement entre 1 et 100.",
        demo: "Entrez un nombre entre 1 et 100 pour tester votre chance.",
        inputCount: 1,
        solution: `
            let nombreSecret = Math.floor(Math.random() * 100) + 1;
            function devinerNombre(nombre) {
                if (nombre < nombreSecret) {
                    return 'Trop bas !';
                } else if (nombre > nombreSecret) {
                    return 'Trop élevé !';
                } else {
                    return 'Bravo, vous avez deviné le bon nombre !';
                }
            }
        `
    },
    {
        titre: "Lancer de dés avec probabilité",
        description: "Prédisez si le prochain lancer de dé sera plus grand ou plus petit que le précédent.",
        demo: "Entrez 'plus grand' ou 'plus petit' pour prédire le prochain lancer.",
        inputCount: 1,
        solution: `
            function lancerDe() {
                let dernierLancer = Math.floor(Math.random() * 6) + 1;
                let prediction = prompt("Entrez 'plus grand' ou 'plus petit' :").toLowerCase();
    
                let nouveauLancer = Math.floor(Math.random() * 6) + 1;
                let resultat = "";
    
                if ((prediction === "plus grand" && nouveauLancer > dernierLancer) ||
                    (prediction === "plus petit" && nouveauLancer < dernierLancer)) {
                    resultat = "Bravo ! Vous avez deviné correctement.";
                } else {
                    resultat = "Désolé, votre prédiction était incorrecte.";
                }
    
                console.log("Dernier lancer : " + dernierLancer);
                console.log("Nouveau lancer : " + nouveauLancer);
                console.log(resultat);
            }
        `
    },
    {
        titre: "Calcul de la puissance",
        description: "Créer une fonction qui calcule la puissance d'un nombre.",
        demo: "Entrez un nombre et une puissance (ex: 2, 3) pour calculer la puissance.",
        inputCount: 2,
        solution: `
            function puissance(base, exposant) {
                return Math.pow(base, exposant);
            }
        `
    },
    {
        titre: "Racine carrée",
        description: "Créer une fonction qui calcule la racine carrée d'un nombre.",
        demo: "Entrez un nombre pour calculer sa racine carrée.",
        inputCount: 1,
        solution: `
            function racineCarree(n) {
                if (n < 0) {
                    return "Erreur : racine carrée d'un nombre négatif non définie.";
                }
                return Math.sqrt(n);
            }
        `
    },
    {
        titre: "Moyenne de deux nombres",
        description: "Créer une fonction qui calcule la moyenne de deux nombres.",
        demo: "Entrez deux nombres séparés par une virgule (ex: 5, 3).",
        inputCount: 2,
        solution: `
            function moyenne(a, b) {
                return (a + b) / 2;
            }
        `
    },
    {
        titre: "Multiplication de deux nombres",
        description: "Créer une fonction qui retourne le produit de deux nombres.",
        demo: "Entrez deux nombres séparés par une virgule (ex: 5, 3).",
        inputCount: 2,
        solution: `
            function multiplication(a, b) {
                return a * b;
            }
        `
    },
    {
        titre: "Division de deux nombres",
        description: "Créer une fonction qui effectue la division de deux nombres.",
        demo: "Entrez deux nombres séparés par une virgule (ex: 10, 2).",
        inputCount: 2,
        solution: `
            function division(a, b) {
                if (b === 0) {
                    return "Erreur : division par zéro.";
                }
                return a / b;
            }
        `
    },
    {
        titre: "Conversion d'une durée en secondes",
        description: "Créer une fonction qui convertit une durée donnée en heures, minutes et secondes en nombre total de secondes.",
        demo: "Entrez la durée en heures, minutes et secondes (ex: 2h 15m 30s).",
        inputCount: 3,
        solution: `
            function convertirEnSecondes(heures, minutes, secondes) {
                return heures * 3600 + minutes * 60 + secondes;
            }
        `
    },
    {
        titre: "Calcul de la promotion",
        description: "Créer une fonction qui calcule le prix final après application d'une réduction en pourcentage.",
        demo: "Entrez le prix initial et le pourcentage de réduction pour obtenir le prix final.",
        inputCount: 2,
        solution: `
            function appliquerPromotion(prixInitial, pourcentage) {
                const reduction = prixInitial * (pourcentage / 100); // Calcul de la réduction
                const prixFinal = prixInitial - reduction; // Prix après réduction
                return prixFinal;
            }
        `
    },
    
    {
        titre: "Vérifier si un nombre est pair ou impair",
        description: "Créer une fonction qui vérifie si un nombre est pair ou impair.",
        demo: "Entrez un nombre pour vérifier s'il est pair ou impair.",
        inputCount: 1,
        solution: `
            function verifierPairImpair(nombre) {
                return nombre % 2 === 0 ? "Pair" : "Impair";
            }
        `
    },
    {
        titre: "Conversion en kilogrammes",
        description: "Créer une fonction qui convertit une masse donnée en grammes en kilogrammes.",
        demo: "Entrez la masse en grammes pour obtenir la conversion en kilogrammes.",
        inputCount: 1, 
        solution: `
            function convertirEnKilogrammes(grammes) {
                const kilogrammes = grammes / 1000; // Conversion en kilogrammes
                return kilogrammes;
            }
        `
    },
    {
        titre: "Différences de deux nombres",
        description: "Créer une fonction qui calcule la différence entre deux nombres.",
        demo: "Entrez deux nombres pour obtenir leur différence.",
        inputCount: 2, 
        solution: `
            function soustraction(nombre1, nombre2) {
                const resultat = nombre1 - nombre2; // Calcul de la différence
                return resultat;
            }
        `
    }    

];



//Afficher la liste des exercices
function afficherListeExercices() {
    const exercicesList = document.getElementById('exercices');
    exercices.forEach((exercice, index) => {
        const li = document.createElement('li');
        li.textContent = exercice.titre;
        li.addEventListener('click', () => afficherExercice(index));
        exercicesList.appendChild(li);
    });
}
//Faire en sorte que chaque exo renvoie a leur fonction et fonctionnent
function afficherExercice(index) {
    const exercice = exercices[index];
    document.getElementById('titre-exercice').textContent = exercice.titre;
    document.getElementById('description-exercice').textContent = exercice.description;
    document.getElementById('solution-code').textContent = exercice.solution;

    // Réinitialisation et affichage de la zone de saisie dynamique
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = ''; // Efface les anciens champs

    // Cacher la zone de saisie des exercices standards
    document.getElementById('demo-container').style.display = 'none';

    // Afficher la zone spécifique pour le "Lancer de dés"
    const jeuDesContainer = document.getElementById('jeu-des');
    if (exercice.titre === "Lancer de dés avec probabilité") {
        jeuDesContainer.style.display = 'block';
    } else {
        jeuDesContainer.style.display = 'none';
    }

    // Crée les champs de saisie en fonction du nombre d'inputs nécessaires pour les autres exercices
    if (exercice.titre !== "Lancer de dés avec probabilité") {
        for (let i = 0; i < exercice.inputCount; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `Entrez la valeur ${i + 1}`;
            input.id = `input${i + 1}`;
            inputContainer.appendChild(input);
            inputContainer.appendChild(document.createElement('br'));
        }

        // Affichage de la zone de saisie et du bouton "Tester" pour les autres exercices
        document.getElementById('demo-container').style.display = 'block';
    }

    // Gérer la logique du bouton "Tester" pour les exercices standards
    const resultField = document.getElementById('resultat');
    document.getElementById('run-demo').onclick = () => {
        let result;
        try {
            const inputs = [];
            // Récupérer les valeurs des champs de saisie
            for (let i = 0; i < exercice.inputCount; i++) {
                let value = document.getElementById(`input${i + 1}`).value;
                if (!value) throw new Error('Tous les champs doivent être remplis');
                inputs.push(parseFloat(value)); // Conversion explicite en nombre
            }
    
            // Vérification si les entrées sont valides
            if (inputs.some(isNaN)) {
                throw new Error("Veuillez entrer des nombres valides.");
            }
            if (exercice.titre === "Conversion en kilogrammes") {
                const grammes = inputs[0]; // Masse en grammes saisie
                if (grammes < 0) {
                    result = "La masse ne peut pas être négative.";
                } else {
                    result = convertirEnKilogrammes(grammes); // Appel de la fonction
                    result = `${grammes} grammes équivalent à ${result.toFixed(2)} kilogrammes.`;
                }
            }
            if (exercice.titre === "Soustraction de deux nombres") {
                const nombre1 = inputs[0];
                const nombre2 = inputs[1];
                result = soustraction(nombre1, nombre2); // Appel de la fonction
                result = `La différence entre ${nombre1} et ${nombre2} est ${result}.`;
            }
                        
            // Exécution du code en fonction de l'exercice
            if (exercice.titre === "Calcul de la promotion") {
                const prixInitial = inputs[0]; // Prix initial saisi
                const pourcentage = inputs[1]; // Pourcentage de réduction
    
                if (pourcentage < 0 || pourcentage > 100) {
                    result = "Le pourcentage de réduction doit être compris entre 0 et 100.";
                } else {
                    result = appliquerPromotion(prixInitial, pourcentage); // Appel de la fonction appliquerPromotion
                    result = `Prix initial : ${prixInitial}€, Réduction : ${pourcentage}%, Prix final : ${result.toFixed(2)}€`;
                }
            } else if (exercice.titre === "Deviner le nombre") {
                const nombre = inputs[0]; // On récupère le nombre saisi
                if (nombre < 1 || nombre > 100) {
                    result = "Veuillez entrer un nombre entre 1 et 100.";
                } else {
                    result = devinerNombre(nombre); // Appel à la fonction devinerNombre
                }
            } else if (exercice.titre === "Somme de deux nombres") {
                result = somme(inputs[0], inputs[1]);
            } else if (exercice.titre === "Factorielle d'un nombre") {
                result = factorielle(inputs[0]);
            } else if (exercice.titre === "Inverser une chaîne de caractères") {
                result = inverserChaine(inputs[0].toString());
            } else if (exercice.titre === "Calcul de la puissance") {
                result = puissance(inputs[0], inputs[1]);
            } else if (exercice.titre === "Racine carrée") {
                result = racineCarree(inputs[0]);
            } else if (exercice.titre === "Moyenne de deux nombres") {
                result = moyenne(inputs[0], inputs[1]);
            } else if (exercice.titre === "Multiplication de deux nombres") {
                result = multiplication(inputs[0], inputs[1]);
            } else if (exercice.titre === "Division de deux nombres") {
                result = division(inputs[0], inputs[1]);
            } else if (exercice.titre === "Conversion en kilogrammes") {
                if (inputs[0] < 0) {
                    result = "La masse ne peut pas être négative.";
                } else {
                    result = convertirEnKilogrammes(inputs[0]);
                    result = `${inputs[0]} grammes équivalent à ${result.toFixed(2)} kilogrammes.`;
                }
            } else if (exercice.titre === "Soustraction de deux nombres") {
                result = soustraction(inputs[0], inputs[1]);
                result = `La différence entre ${inputs[0]} et ${inputs[1]} est ${result}.`;
            }
            
    
            // Afficher le résultat
            const resultField = document.getElementById('resultat');
            resultField.textContent = result;
        } catch (e) {
            const resultField = document.getElementById('resultat');
            resultField.textContent = 'Erreur : ' + e.message;
        }
    };
    

    // Affichage de la solution cachée
    document.getElementById('solution-btn').onclick = () => {
        const solutionCode = document.getElementById('solution-code');
        solutionCode.style.display = (solutionCode.style.display === 'none' || solutionCode.style.display === '') ? 'block' : 'none';
    };
}




// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    afficherListeExercices();
});

// Fonctions de chaque exercices 
function somme(a, b) {
    return a + b;
}

function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}

function inverserChaine(str) {
    return str.split('').reverse().join('');
}

let nombreSecret = Math.floor(Math.random() * 100) + 1; // Nombre secret généré aléatoirement

function devinerNombre(nombre) {
    if (nombre < nombreSecret) {
        return "Trop bas ! Essayez encore.";
    } else if (nombre > nombreSecret) {
        return "Trop élevé ! Essayez encore.";
    } else {
        nombreSecret = Math.floor(Math.random() * 100) + 1; // Génère un nouveau nombre pour la prochaine partie
        return "Bravo, vous avez deviné le bon nombre !";
    }
}



let dernierLancer = null; // Variable pour stocker le premier lancer
let nouveauLancer = null; // Variable pour stocker le second lancer

function lancerDe() {
    const resultatElem = document.getElementById('resultat-jeu-des'); // Cible le champ spécifique au jeu de dés

    // Premier lancer
    if (dernierLancer === null) {
        dernierLancer = Math.floor(Math.random() * 6) + 1;
        resultatElem.textContent = `Premier lancer : ${dernierLancer}. Faites votre prédiction ! (plus grand ou plus petit)`;
        return;
    }

    // Deuxième lancer
    const prediction = document.getElementById('prediction').value.trim().toLowerCase();

    // Validation de l'entrée
    if (prediction !== "plus grand" && prediction !== "plus petit") {
        resultatElem.textContent = "Veuillez entrer 'plus grand' ou 'plus petit'.";
        return;
    }

    nouveauLancer = Math.floor(Math.random() * 6) + 1;

    // Déterminer le résultat
    let resultat = "";
    if ((prediction === "plus grand" && nouveauLancer > dernierLancer) ||
        (prediction === "plus petit" && nouveauLancer < dernierLancer)) {
        resultat = "Bravo ! Vous avez deviné correctement.";
    } else {
        resultat = "Désolé, votre prédiction était incorrecte.";
    }

    // Afficher le résultat
    resultatElem.textContent = `Premier lancer : ${dernierLancer}, Nouveau lancer : ${nouveauLancer}. ${resultat}`;

    // Réinitialiser
    dernierLancer = null;
    nouveauLancer = null;
}

document.getElementById('lancer-btn').addEventListener('click', lancerDe);
function puissance(base, exposant) {
    return Math.pow(base, exposant);
}
function racineCarree(n) {
    if (n < 0) {
        return "Erreur : racine carrée d'un nombre négatif non définie.";
    }
    return Math.sqrt(n);
}
function moyenne(a, b) {
    return (a + b) / 2;
}
function division(a, b) {
    if (b === 0) {
        return "Erreur : division par zéro.";
    }
    return a / b;
}
function multiplication(a, b) {
    return a * b;
}
function convertirEnSecondes(heures, minutes, secondes) {
    return heures * 3600 + minutes * 60 + secondes;
}
function appliquerPromotion(prixInitial, pourcentage) {
    const reduction = prixInitial * (pourcentage / 100); // Calcul de la réduction
    const prixFinal = prixInitial - reduction; // Prix après réduction
    return prixFinal;
}

function verifierPairImpair(nombre) {
    return nombre % 2 === 0 ? "Pair" : "Impair";
}
function convertirEnKilogrammes(grammes) {
    const kilogrammes = grammes / 1000; // Conversion en kilogrammes
    return kilogrammes;
}

function soustraction(nombre1, nombre2) {
    const resultat = nombre1 - nombre2; // Calcul de la différence
    return resultat;
}
//et voila merci pour votre temps