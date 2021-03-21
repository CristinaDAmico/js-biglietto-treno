// PREZZO BIGLIETTO TRENO

// 1-inserire i km da percorrere
// 2-inserire l'età del passeggero

// INFO GENERAL 

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
// output del prezzo finale 


//1-inserire i km da percorrere
var kilometri = parseInt( prompt("Quanti km devi percorrere?"));
console.log("km da percorrere: ", kilometri);

// prezzo intero: (0.21 € al km)
var prezzoIntero = kilometri * 0.21;
console.log("prezzo biglietto: ", prezzoIntero);

//2-inserire l'età del passeggero
var età = parseInt( prompt("Qual'è la tua età?"));
console.log("anni: ", età);

// Calcolare il prezzo del biglietto secondo 2 condizioni:
// 1- minorenne sconto del 20%
// 2- over 65 sconto del 40%

if (età < 18) {
    var discountYoung = prezzoIntero * (20 / 100); // sconto del 20% 
    var prezzoFinale = prezzoIntero - discountYoung;
    console.log("Il costo del biglietto è: ", prezzoFinale.toFixed(2), " €");
} else if (età > 65) {
    var discountOld = prezzoIntero * (40 / 100); // sconto del 40%
    var prezzoFinale = prezzoIntero - discountOld;
    console.log("Il costo del biglietto è: ", prezzoFinale.toFixed(2), " €");
} else {
    console.log("Il costo del biglietto è: ", prezzoIntero.toFixed(2), " €");
}

// output del prezzo finale
document.getElementById("cost").innerHTML = ("Il costo del biglietto è: ") + prezzoIntero.toFixed(2) + " €"; 
document.getElementById("cost").innerHTML = ("Il costo del biglietto è: ") + prezzoFinale.toFixed(2) + " €";

