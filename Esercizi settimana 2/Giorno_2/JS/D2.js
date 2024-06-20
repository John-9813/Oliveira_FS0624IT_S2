/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 3;
let num2 = 5;

if (num1 > num2) {
  console.log(num1 + " è il più grande numero.");
} else if (num2 > num1) {
  console.log(num2 + " è il più grande numero.");
} else {
  console.log("I numeri sono uguali.");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num1 !== 5) {
  console.log(num1 + " " + "not equal");
} else {
  console.log(num1 + " " + "equal to 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num2 % 5 == 0) {
  console.log(num2 + " " + "è divisibile per 5");
} else {
  console.log(num2 + " " + "non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//primo tentativo errato ma lascio per i posteri

/*

if (num1 || num2 === 8) {
  console.log("uno dei numeri è uguale a 8")
} else if (num1 + num2 === 8 || num1 - num2 === 8) {
 console.log("la loro addizione/sottrazione è uguale a 8") 
} else {
  console.log("non uguale a 8")
} 

*/

if (num1 === 8 || num2 === 8) {
  console.log("Uno dei numeri è uguale a 8.");
} else if (num1 + num2 === 8 || num1 - num2 === 8) {
  console.log("La loro addizione/sottrazione è uguale a 8.");
} else {
  console.log("Non uguale a 8.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 40;

if (totalShoppingCart >= 50) {
  console.log("spedizione gratuita");
} else {
  console.log("costo spedizione 10$");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shippingCost;
let discount = 0.2; // 20% di sconto

if (totalShoppingCart >= 50) {
  shippingCost = 0; // Spedizione gratuita
} else {
  shippingCost = 10; // Costo fisso della spedizione
}

let discountedAmount = totalShoppingCart - totalShoppingCart * discount; // Applicare lo sconto del 20%
let totalAmount = discountedAmount + shippingCost;

console.log("Ammontare totale da addebitare: " + totalAmount);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// errato //
// let a = 9;
// let b = 10;
// let c = 7;
// let temp;

// if (a < b) {
//   temp = a;
//   a = b;
//   b = temp;
// }

// if (a < c) {
//   temp = a;
//   a = c;
//   c = temp;
// }

// if (b < c) {
//   temp = b;
//   b = c;
//   c = temp;
// }

// console.log("Ordine decrescente: " + a + ", " + b + ", " + c);

let a = 6;
let b = 14;
let c = 10;

if (a >= b) {
  if (c >= a) {
    console.log(c, a, b);
  } else {
    if (c >= b) {
      console.log(a, c, b);
    } else {
      console.log(a, b, c);
    }
  }
} else {
  if (c >= b) {
    console.log(c, b, a);
  } else {
    if (c >= a) {
      console.log(b, c, a);
    } else {
      console.log(b, a, c);
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let test = 5;

if (typeof test === "number") {
  console.log("è un numero!");
} else {
  console.log("non è un numero!");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let test2 = 31;

if (test2 % 2 === 0) {
  console.log("è un numero pari!");
} else {
  console.log("è un numero dispari!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
myArray.push(6)
myArray.push(7)
myArray.push(8)
myArray.push(9)
myArray.push(10)
console.log(myArray)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myArray[9] = 100
console.log(myArray)

