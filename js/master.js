// MY FUNCTIONS : 


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomArrayOfInts(minRange, maxRange, number) {
    const intArray = []

    while (intArray.length < number) {
        const n = getRandomIntInclusive(minRange, maxRange)

        if (!intArray.includes(n)) {
            intArray.push(n)
        }
    }

    return intArray
}

function chiediNumeri() {
    numeriUtente = [];

    while (numeriUtente.length <= 4) {
        numeroPrompt = parseInt(prompt('Inserisi in ordine i 5 numeri visti'));
        numeriUtente.push(numeroPrompt);
        console.log(numeriUtente);
    }

    return numeriUtente;
}

function after30Seconds() {

    numbersDOMElement.innerHTML = 'Tempo Scaduto';
    setTimeout(function () {

        const numeriUtente = chiediNumeri();
        console.log(numeriUtente);

        for (i=0; i<=4 ; i++){
            currentNumeroUtente = numeriUtente[i]
            console.log(currentNumeroUtente)
            currentNumberArray = intArray[i]
            console.log(currentNumberArray)


            if (currentNumeroUtente === currentNumberArray){
                arrayNumeriRicordati.push(currentNumeroUtente)
                console.log(arrayNumeriRicordati)
                rememberedNumbersDOMElement.innerHTML = "I numeri ricordati sono:" + arrayNumeriRicordati
            }
            
            if (arrayNumeriRicordati.length == 0) {
            rememberedNumbersDOMElement.innerHTML = "Hai Perso!!! Premi F5 per ricaricare"
            }
        }
    }, 300);

}

// function clearHtml() {
//     numbersDOMElement.innerHTML = 'Tempo Scaduto';
//     console.log(numbersDOMElement.innerHTML);
// }

// DOM ELEMENYS : 
let numbersDOMElement = document.getElementById('numbers__p')
console.log(numbersDOMElement)

let intArray = getRandomArrayOfInts(1, 100, 5)
console.log(intArray)

let rememberedNumbersDOMElement = document.getElementById('remembered-numbers')


// APP JS: 


numbersDOMElement.innerHTML += intArray

const delay = 10;


setTimeout(after30Seconds, delay * 1000);

let arrayNumeriRicordati = []





