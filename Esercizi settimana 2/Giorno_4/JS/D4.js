/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 1-------");

function area(l1, l2) {
  return l1 * l2;
}

console.log("area rettangolo = " + area(3, 5)); // area rettangolo = 15

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 2-------");

function crazySum(par1, par2) {
  if (par1 === par2) {
    return (par1 + par2) * 3;
  } else {
    return par1 + par2;
  }
}

console.log(crazySum(3, 3)); // 18
console.log(crazySum(3, 7)); // 10

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 3-------");

function crazyDiff(number) {
  let diff = Math.abs(number - 19);

  if (number > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}

console.log(crazyDiff(25)); // 18
console.log(crazyDiff(15)); // 4
console.log(crazyDiff(19)); // 0

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 4-------");

function boundary(n) {
  let i = 20;
  while (i <= 100) {
    if (n === i || n === 400) {
      return true;
    }
    i++;
  }
  return false;
}

console.log(boundary(25)); // true
console.log(boundary(150)); // false
console.log(boundary(400)); // true

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 5-------");

function epify(str) {
  if (str.indexOf("EPICODE") === 0) {
    return str;
  } else {
    return "EPICODE " + str;
  }
}

console.log(epify("Ciao")); // EPICODE Ciao
console.log(epify("EPICODE Sito")); // EPICODE Sito
console.log(epify("EPICODE Sfida")); // EPICODE Sfida

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 6-------");

function check3and7(check) {
    if (check % 3 === 0 || check % 7 === 0) {
      return "Il numero " + check + " è un multiplo di 3 o di 7.";
    } else {
      return "Il numero " + check + " non è un multiplo né di 3 né di 7.";
    }
  }
  
  console.log(check3and7(10)); // Il numero 9 è un multiplo di 3.
  console.log(check3and7(14)); // Il numero 14 è un multiplo di 7.
  console.log(check3and7(21)); // Il numero 21 è un multiplo di 3 o di 7.
  console.log(check3and7(5)); // Il numero 5 non è un multiplo né di 3 né di 7.

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 7-------");

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

console.log(reverseString("EPICODE")); // EDOCIEP

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 8-------");

function upperFirst(string) {
  string = string.toLowerCase();
  let words = string.split(' ');
  console.log(words);
  let final = [];
  for (let i = 0; i < words.length; i++) {
      let first = words[i].charAt(0);
      first = first.toUpperCase();
      let cut = words[i].substring(1);
      let newWord = first + cut;
      final.push(newWord);
  }
  console.log(final.join(' '));
}

upperFirst('è stato un esercizio troppo difficile per una persona alle prime armi');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 9-------");

function cutString(str) {
  if (str.length <= 2) {
    return "";
  } else {
    return str.slice(1, -1);
  }
}

console.log(cutString("EPICODE")); // PICOD

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("------esercizio 10-------");

function giveMeRandom(n) {
  let randomArray = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    randomArray.push(randomNumber);
  }
  return randomArray;
}

console.log(giveMeRandom(5));

