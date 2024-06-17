// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// variabile per contenitore 
const divContainer = document.querySelector(".container");

// creo array numeri con funzione
const numbersArray = createRandomNumArray(1, 100, 5);
console.log(numbersArray);

// creo ciclo per portare i numeri in pagina
for (i = 0; i < numbersArray.length; i++) {

    // creo elemento con numeri
    let numbers = createElementWClass("div", "display");

    numbers.innerHTML = numbersArray[i];

    //porto elemento in pagina
    divContainer.append(numbers);

    // creo timer 
    setTimeout(function () {

        // rimuovo classe
        numbers.classList.remove("display");

        // aggiungo classe per non mostrare i  numeri
        numbers.classList.add("no-display");

    }, 30000);


    
}





// FUNZIONI

// funzione per creare elemento html
function createElementWClass (tagName, className) {

    // creo elemento
    const element = document.createElement(tagName);
    // creo classe
    element.classList.add(className);

    return element
}


// funzione per array numeri casuali
function createRandomNumArray (min, max, arrayLenght) {
    
    // creo array
    const randomArray = [];

    // creo ciclo per pushare i numeri
    while (randomArray.length < arrayLenght) {

        // creo numero random
        let randomNum = Math.floor(Math.random() * (max - min +1)) + min;

        // inserisco il numero nell'array se non già compreso
        if (!randomArray.includes(randomNum)) {
            randomArray.push(randomNum);
        }
    }

    return randomArray
}

