/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const area = function (l1, l2) {
//   const geometry = (l1 * l2) / 2;
//   console.log(geometry);
//   return geometry;
// };
// // area(5, 7);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const crazySum = function (n1, n2) {
//   let sumOrMult = n1 + n2;
//   if (n1 === n2) {
//     sumOrMult = n1 * 3;
//   }
//   console.log(sumOrMult);
//   return sumOrMult;
// };
// crazySum(5, 5);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const crazyDiff = function (n1, n2) {
//   let subtraction = n1 - n2;
//   if (n2 > 19) {
//     subtraction = (n1 - n2) * 3;
//   }
//   console.log(subtraction);
//   return subtraction;
// };
// crazyDiff(5, 20);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const boundary = function (n) {
//   let numBeet = n;
//   if ((n > 20 && n <= 100) || n === 400) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// boundary(20);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const epify = function (str) {
//   let newStr = str;
//   if (str !== "EPICODE") {
//     console.log("EPICODE " + str);
//   } else {
//     console.log("EPICODE");
//   }
// };

// epify("EPICODE");
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const check3and7 = function (n) {
//   let multiple3And7 = n;
//   if (n > 0 && n % 3 === 0) {
//     console.log("è multiplo di tre");
//   } else if (n > 0 && n % 7 === 0) {
//     console.log("è multiplo di 7");
//   } else if ((n > 0 && n % 3 !== 0) || (n % 7 !== 0 && n > 0)) {
//     console.log("non è un multiplo né di 3 né di 7");
//   } else if (n < 0) {
//     console.log("reinserisci il dato");
//   }
// };
// check3and7();
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const reverseString = function (str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   console.log(newString);
//   return newString;
// };
// reverseString("EPICODE");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// function upperFirst(str) {
//   let separateWord = str.split(" ");
//   for (let i = 0; i < separateWord.length; i++) {
//     separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
//   }
//   return separateWord.join(" ");
// }
// console.log(upperFirst("Ciao a tutti"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const cutString = function (str) {
//   let newString = str.slice(1, -1);
//   console.log(newString);
//   return newString;
// };
// cutString("villaggio");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const giveMeRandom = function (n) {
//   let random = n;
//   const newArray = [];
//   newArray.length = random;
//   for (i = 0; i < newArray.length; i++) {
//     newArray[i] = Math.random() * 11;
//   }
//   console.log(newArray);
//   return newArray;
// };
// giveMeRandom(8);
