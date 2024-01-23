let num1 =  prompt("Informe o 1° valor. ");
let num2 = prompt("Digite 0 2° valor.");
let num3 = 7;
let multi = num1 * num2;
let soma = Number (num1) + Number (num2);
let sub = soma - num3;
let divisao = multi / num2;
let base = num1;
let expoente = num2;
let potencia = base ^ expoente; 

console.log ("Soma: " + soma);
console.log ("Prova Real:" + divisao);

soma = soma -1 ;

console.log("multiliplicação: " + multi);
console.log("subtração:" + sub);
console.log("valores utilizando para as e expressoes:" 
+ num1+  "e" + num2);
// //Utilizando a classe matematica para fazer o calculo de potencia, onde é passado 2 paramentos, sendo eles a base e o expoente... que np caso são os valores de num1 num2
const resultado=Math.pow(base, expoente);
console.log("potencia é :" + resultado);

