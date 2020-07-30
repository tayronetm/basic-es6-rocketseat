/**
 * 2º exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
 */

const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

// MAP 2.1
const idadeUsuarios = usuarios.map(usuario => {
	return usuario.idade;
})

console.log(idadeUsuarios)

// FILTER 2.2
const filterRocketseat = usuarios.filter(usuario => {
	return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
})

console.log(filterRocketseat)

// FIND 2.3
const findGoogle = usuarios.find(usuario => {
	return usuario.empresa === 'Google';
})

console.log(findGoogle)

// UNINDO OPERAÇÕES

// ** ...usuario copia as propriedades do objeto
const multiplicarIdade = usuarios
	.map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
	.filter(usuario => usuario.idade <= 50)

console.log(multiplicarIdade)