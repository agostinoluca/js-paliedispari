/* 

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

##Tools
 -const
 -prompt
 -fuction
 -return
 -document.GetElementById/querySelector
 -.innerHtml .innerText .textContent

*/ 

// con un prompt chiedo all'utente di inserire una parola
const parola = prompt('Ciao, inserisci qui una parola, ti dirò se è palindroma!');

// con una fuction chiedo a javascript di verificare se la parola inserita è palindroma
function isPalindrome(parola) {

    // trasformo l'input in una stringa, uso il reverse e resituisco il risultato in stringa con join
    const parolaInvertita = parola.split('').reverse().join('');

    // verifico se il precedente passaggio ha restituito una parola identica all'input
    return parola === parolaInvertita;
}

// collego un div del mio html per stampare un messaggio in pagina
const writeResult = document.querySelector('.palindrome');


// con una funzione stabilisco se la parola è palindroma (trascurando maiuscole/minuscole)
if (isPalindrome(parola.toLowerCase())) {
    writeResult.innerHTML = `La parola "<span class="color">${parola}</span>" è palindroma!`;
} else {
    writeResult.innerHTML = `La parola "<span class="color">${parola}</span>" non è palindroma.`;
}






/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

##Tools
 -const
 -prompt
 -fuction
 -math.random
 -return
 -document.GetElementById/querySelector
 -.innerHtml .innerText .textContent

*/

// chiedo all'utente se sceglie pari o dispari

// con un prompt chiedo all'utente di inserire un numero da 1 a 5

// con una funzione generiamo un numero casuale da 1 a 5 per il computer

// con una funzione sommiamo i numeri e verifichiamo se il numero ottenuto è pari o dispari

// stampo in pagina il vincitore


