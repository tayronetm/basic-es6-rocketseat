/**
 * 5º Exercício
Utilizando o operador de rest/spread (...) realize as seguintes operações:
 */

// 5.1 Rest

const arr = [1, 2, 3, 4, 5, 6];
// RESTO DO ARRAY ARMAZENADO NA VARIAVEL Y
const [x, ...y] = arr;

function somaGeral(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(somaGeral(1, 2, 3, 4, 5, 6)); // 21
console.log(somaGeral(1, 2)); // 3

// 5.2 Spread

const usuario = {
		nome: 'Diego',
		idade: 23,
		endereco: {
			cidade: 'Rio do Sul',
			uf: 'SC',
			pais: 'Brasil',
	}
 };
 // TROCAR VALOR DA PROPRIEDADE DO OBJETO UTILZIZANDO O SPREAD
const usuario2 = { ...usuario , nome: 'Gabriel', idade: 22};
console.log(usuario2)

// TROCAR VALOR DA PROPRIEDADE DO OBJETO ANINHADO UTILZIZANDO O SPREAD
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras'}}
console.log(usuario3)