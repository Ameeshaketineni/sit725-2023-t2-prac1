function changeText() {
    let potentialText = ["Hello", "Hi", "Hey", "What's Up", "Yoo"];
    let randomNumber = getRandomNumberBetween(0, potentialText.length - 1);
    let textToChange = potentialText[randomNumber];
    document.getElementById('header').innerHTML = textToChange;
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
