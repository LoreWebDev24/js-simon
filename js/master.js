// MY FUNCTIONS : 


function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) 
}

function getRandomArrayOfInts (minRange, maxRange, number) { 
    const intArray = []

    while (intArray.length < number) {
        const n = getRandomIntInclusive(minRange,maxRange)

        if (!intArray.includes(n)) {
            intArray.push(n)
        }
    }

    return intArray
}

// DOM ELEMENYS : 
let numbersDOMElement = document.getElementById('numbers__p')
console.log(numbersDOMElement)

let intArray = getRandomArrayOfInts (1, 100, 5)
console.log(intArray)


// APP JS: 


// let numeriUtente = []

numbersDOMElement.innerHTML += intArray

let numeriUtente


setTimeout (clearHtml,2800);

function clearHtml () {

numbersDOMElement.innerHTML = 'Tempo Scaduto'
   
   
}

setTimeout (after30Seconds,3000);

function after30Seconds () {
    
    
    
    numeriUtente = []
    

    while (numeriUtente.length <= 4) {
        numeroPrompt = parseInt(prompt('Inserisi uno dei 5 numeri visti'))
        numeriUtente.push(numeroPrompt)
        console.log(numeriUtente) 
    }
    
    return numeriUtente
   
   
}


