let income = prompt("De cuanto es tu ingreso?");
let costs = prompt("cuanto es el costo?");
let taxtPercent = prompt("cuantos es el (%) de impuestos?");

//ganacia bruta
let grossProfit = income-costs;

//obetener ccantidad
let taxt = grossProfit*taxtPercent/100;

// ganancia neta 
let netIncome = grossProfit-taxt;

// mostrando ganacia neta 
document.write("tu ganancia neta es $" + netIncome);
