document.addEventListener('DOMContentLoaded', function () {
    console.log("Le script est chargé !");

    const phrases = [
        "Le savais tu ? L'homme Génial est génial !",
        "La nuit fait attention au fecondeur d'homme...",
        "Certaines histoires d'horreur font peur...",
        "Le savais tu ? Tu peux me contacter dans la partie plus d'informations",
    ];

    let currentPhraseIndex = 0;
    const phraseElement = document.getElementById('phrases');

    function changePhrase() {
        if (phraseElement) {
            phraseElement.textContent = phrases[currentPhraseIndex];
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        } else {
            console.error("L'élément avec l'ID 'phrases' n'a pas été trouvé.");
        }
    }

    if (phraseElement) {
        setInterval(changePhrase, 5000); // Change de phrase toutes les 3 secondes
    } else {
        console.error("Impossible de démarrer l'intervale : l'élément 'phrases' est manquant.");
    }
});