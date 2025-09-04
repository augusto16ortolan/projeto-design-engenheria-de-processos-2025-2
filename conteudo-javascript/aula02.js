const axios = require("axios");

//Maneiras de declarar as variaveis
//var, let e const

/*const nome = "Augusto Ortolan";

//var nao respeita escopo
//let respeita escopo
let x = 10;
if (x == 10) {
  let x = 20;
  console.log(x);
}
console.log(x);
*/

function mostraInter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Internacional");
    }, 2000);
  });
}

function mostraGremio() {
  return new Promise((resolve, reject) => {
    resolve("Gremio");
  });
}

/*mostraInter()
  .then((valor) => console.log(valor))
  .catch((error) => console.log("Ocorreu um erro: ", error))
  .finally(() => console.log("Finalizou o processo"));
mostraGremio();*/

//async await

/*async function mostrarTimes() {
  let inter = await mostraInter();
  console.log(inter);
  let gremio = await mostraGremio();
  console.log(gremio);
}

mostrarTimes();
*/

/*async function getEndereco(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (response !== 200) {
      throw new Error("CEP nao encontrado");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getEndereco(99445);

fetch(`https://viacep.com.br/ws/${9956}/json/`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

console.log("Ola");*/
let loading = false;
async function getEndereco(cep) {
  try {
    loading = true;
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    loading = false;
  }
}

//getEndereco(99560000);

//map => manipula a lista original, retornando uma nova lista
async function getProdutos() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const listaOriginal = response.data;
  const listaAlterada = listaOriginal.map((produto) => {
    return {
      id: produto.id,
      title: produto.title,
      price: produto.price,
      image: produto.image,
    };
  });
  console.log(listaAlterada);

  //filter => filtrar a lista de acordo com a condicao q passarmos
  const listaFiltrada = listaAlterada.filter((produto) => produto.price > 50.0);
  console.log(listaFiltrada);

  //reduce => reduzir a lista em um unico valor
  const valorTotalProdutos = listaOriginal
    .filter((produto) => produto.price > 50.0)
    .reduce((acumulador, produto) => {
      return acumulador + produto.price;
    }, 0);

  console.log(valorTotalProdutos);

  //desestruturacao ou destruturaca
  const { title, price, image } = listaOriginal.find(
    (produto) => produto.id == 15
  );
  console.log(title, price, image);

  //listaOriginal.forEach((produto) => console.log(produto.image));
}

getProdutos();
