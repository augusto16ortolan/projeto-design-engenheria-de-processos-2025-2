//Serve para "debugar" o código, visualizar as informacoes no terminal
/*console.log("Olá, mundo!");
console.warn("atencao");
console.error("ocorreu um erro");

array = [
  { nome: "augusto", idade: 24 },
  { nome: "joao", idade: 24 },
  { nome: "maria", idade: 24 },
  { nome: "lucas", idade: 24 },
];

console.table(array);*/

/*
//Tipagens no javascript
nome = "Augusto"; //string
idade = 24; //inteiro -> number
altura = 1.68; //float -> number
condicao = true; //boolean
lista = ["Augusto", "Maria"]; //arrays, lists
objeto = {
  nome: "Augusto",
  idade: 24,
  genero: "M",
}; //object

console.log(typeof nome);
console.log(Array.isArray(objeto));

nome = 21212;
console.log(typeof nome);*/

//Estruturas de condicao
// IF, ELSE IF e ELSE
// SWITCH CASE

/*idade = 12;
nome = "Joao";

numero = 5;

if (numero === 5) {
  console.log("é 5");
}

if ((idade > 18 || idade == 18) && nome == "Joao") {
  console.log("Adulto");
} else if (idade >= 14) {
  console.log("Adolescente");
} else {
  console.log("Crianca");
}

maioridade = idade >= 18 ? "É maior de idade" : "É menor de idade";
console.log(maioridade);

statusPedido = "cxfgfdg";

switch (statusPedido) {
  case "PENDENTE":
    console.log("Pedido pendente");
    break;
  case "APROVADO":
    console.log("Pedido pendente 2");
    break;
  case "EM_SEPARACAO":
    console.log("Pedido pendente 3");
    break;
  case "ENTREGUE":
    console.log("Pedido pendente 4");
    break;
  default:
    console.log("Status nao encontrado");
    break;
}
*/

//Estruturas de repeticao
//FOR for loop | for in | for of
//WHILE

/*lista = ["Augusto", "Maria", "Joao", "Lucas"];

//For loop
for (i = 0; lista.length > i; i++) {
  console.log(lista[i]);
}

//for in
objeto = {
  nome: "Augusto",
  idade: 24,
  genero: "M",
};

for (atributo in objeto) {
  console.log(objeto[atributo]);
}

console.log("========");
//for of
for (valor of lista) {
  console.log(valor);
}

//while

contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}
*/

//Funcoes

//Maneira tradicional
function digaOla() {
  console.log("Ola");
}

digaOla();

function soma(numero1, numero2) {
  return numero1 + numero2;
}

somatorio = soma(10, 20);
console.log(somatorio);

function mostrarNickname(nome, nickname) {
  console.log(`My name is ${nickname}, ${nome}`);
}

mostrarNickname("James Bond", "Bond");

//Arrow function
const subtrai = (numero1, numero2) => {};

console.log(subtrai(20, 10));

lista = [1];

lista.map(function teste(valor) {
  console.log(valor);
});

lista.map((valor) => console.log(valor));
