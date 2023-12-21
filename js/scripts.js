/* 
    SNACK 1
    A partire da un array di stringhe, crea un secondo array
    formattando le stringhe del primo array in minuscolo e con
    l’iniziale maiuscola.

*/

const stringhe = ['pippo', 'PLUTO', 'Paperino'];
const stringheDue = [];

for (let i = 0; i < stringhe.length; i++) {
    let parola = '';

    console.log(parola);

    // if (parola[0] è minuscola) {
        parola += stringhe[i].charAt(0).toUpperCase();
        console.log(stringhe[i].charAt(0));
    // }

    for (let j = 1; j < stringhe[i].length; j++) {
        parola += stringhe[i].charAt(j).toLowerCase();
        console.log(stringhe[i].charAt(j));
    }

    console.log(parola);

    stringheDue.push(parola);
}

console.log(stringheDue);

/* 
    --------------------------------------------------------
*/