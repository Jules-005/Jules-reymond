function calculateScore() {
    //le score de base mis a 0
    let score = 0;

    // select les bonne reponses
    const correctAnswers = {
        q1: "Arnold Schwarzenegger",
        q2: "4",
        q3: "otto",
        q4: "Allemand",
        q5: "2ans",
        q6: "9",
        q7: "pute",
        q8: "Polak",
        q9: "Jersey Drill",
        q10: "Star Wars"
    };
    
    // si la reponse est bonne rajoute 1
    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    //score mit par une alert le $ appele le score obtenue dans la boucle pour le calculer
    alert(`Vous avez obtenu ${score} sur 10.`);
}

// reinitialise toute les cases de la page avec input donc tout les calculs
function annuler() {
    var inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.checked = false;
    });
}

// ouvrir la correction
function openCorrectionWindow() {
    correctionWindow = window.open('correction.html', '_blank', 'width=700,height=500');
}
//la fermé
function closeWindow() {
    window.close();
}