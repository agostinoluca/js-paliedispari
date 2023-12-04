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
 -.addEventListener("click", fuction()){}
 -&& ||
 -< >
 -alert
 -parseInt

*/

// richiamo dalla pagina HTML un bottone e gli applico un event listener
document.getElementById("avvio_gioco").addEventListener("click", function(){


    // chiedo all'utente se sceglie pari o dispari
    const pariDispari = prompt('Scegli, pari o dispari?').toLowerCase();

    // se l'input è corretto procedo con il gioco
    if (pariDispari === "pari" || pariDispari === "dispari" ) {

        // con un prompt chiedo all'utente di inserire un numero da 1 a 5
        const numeroUtente = parseInt(prompt('Ora scegli un numero da 1 a 5'));

        // se l'utente ha seguito le istruzioni proseguiamo nel gioco
        if (numeroUtente > 0 && numeroUtente <= 5) {

            // con una funzione generiamo un numero casuale da 1 a 5 per il computer
            function numeroCasuale() {
                return Math.floor(Math.random() * 5) + 1
            }

            // creiamo la variabile let che raccoglie il return della funzione
            let numeroComputer = numeroCasuale();

            // con una funzione sommiamo i numeri e verifichiamo se il numero ottenuto è pari o dispari
            function numeroFinale(numeroUtente, numeroComputer) {
                
                // sommiamo i due numeri
                let somma = numeroUtente + numeroComputer;

                // stabiliamo le condizioni in cui vince l'utente
                if ((somma % 2 === 0 && pariDispari === "pari") || (somma % 2 !== 0 && pariDispari === "dispari")) {
                    // aggiungo una classe con sfondo 'success'
                    document.getElementById('vincitore').classList.add('bg_green');
                    // rimuovo la classe (utile se l'utente gioca più volte senza aggiornare la pagina del browser)
                    document.getElementById('vincitore').classList.remove('bg_red');
                    // restituisco una stringa
                    return "Hai vinto!";

                } else {
                    // se è un'altra condizione, aggiungo una classe con sfondo 'danger'
                    document.getElementById('vincitore').classList.add('bg_red');
                    // restituisco una stringa
                    return "Ha vinto il computer!";
                }
            }
            
            //recuperiamo il risultato della funzione sommatoria
            let vincitore = numeroFinale(numeroUtente, numeroComputer);

            // stampiamo in pagina i numeri scelti
            document.getElementById('numeriScelti').innerHTML = (`Hai scelto "${pariDispari}" ed il numero ${numeroUtente},<br>il computer ha scelto il numero ${numeroComputer}.<strong>Totale: ${numeroComputer + numeroUtente}</strong>`);
            document.getElementById('numeriScelti').style.padding = '1rem';

            // stampiamo il vincitore
            document.getElementById('vincitore').textContent = vincitore;


        // se l'utente inserisce un numero maggiore a 5 o minore a 1
        } else {
            alert("Scelta non valida.\nPer favore, riavvia il gioco e scegli un numero da 1 a 5")
        }

    // se l'utente non scrive 'pari' o 'dispari'
    } else {
        alert("Scelta non valida.\nPer favore, riavvia il gioco e scegli pari o dispari.");
    }
})

