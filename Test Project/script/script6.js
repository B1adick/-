const choices = [
    { name: "камінь", image: "image/камінь.jpg" },
    { name: "ножиці", image: "image/ножниці.jpg" },
    { name: "папір", image: "image/бумага.jpg" }
];

let leftScore = 0;
let rightScore = 0;
let round = 0;

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(leftChoice, rightChoice) {
    if (leftChoice.name === rightChoice.name) return "Нічия";
    if (
        (leftChoice.name === "камінь" && rightChoice.name === "ножиці") ||
        (leftChoice.name === "ножиці" && rightChoice.name === "папір") ||
        (leftChoice.name === "папір" && rightChoice.name === "камінь")
    ) {
        leftScore++;
        return "Зліва виграв!";
    } else {
        rightScore++;
        return "Справа виграв!";
    }
}

function playRound() {
    if (round >= 10) {
        alert("Гра завершена! Остаточний рахунок: Зліва " + leftScore + " - Справа " + rightScore);
        return;
    }

    const leftChoice = getRandomChoice();
    const rightChoice = getRandomChoice();

    document.getElementById("left-image").src = leftChoice.image;
    document.getElementById("right-image").src = rightChoice.image;

    const result = determineWinner(leftChoice, rightChoice);
    round++;

    document.getElementById("round-result").textContent = `Раунд: ${round}`;
    document.getElementById("score").textContent = `Рахунок - Зліва: ${leftScore} | Справа: ${rightScore}`;
    alert(result);

    if (round === 10) {
        alert("Гра завершена! Остаточний рахунок: Зліва " + leftScore + " - Справа " + rightScore);
    }
}
