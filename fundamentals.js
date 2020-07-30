var testeInstance = new StaticTodoPresets();

class List {
	constructor() {
		this.data = [];
	}

	add(data) {
		this.data.push(data);
		console.log(this.data);
	}

	teste() {
		console.log('inherit')
	}
}


class TodoList extends List{
	constructor() {
		super();

		this.usuario = 'Jsman'
	}

	showUser(user) {
		console.log('User', user, this.usuario)
	}
}

const myList = new TodoList();

document.getElementById('newTask').onclick = function () {
	myList.add('New Task');
}

myList.showUser('JSMAN');

myList.teste();

const array = [1,2,4,6,8,4,2]

const newArr = array.map(a => {
	return a + 5
})

console.log(newArr);

const sum = array.reduce((total, next) => {
	return total + next;
})

console.log(sum)


const filter = array.filter(item => {
	return item > 3;
})

console.log(filter);

const find = array.find(item => {
	return item === 9;
})

console.log(find) // undefined

// syntax suggar map
const newArr2 = array.map(item => item * 2);


const teste = () => ({ nome: 'Teste'})

//destructuring

const usuario = {
	nome: 'Rubens',
	idade: 45,
	endereco: {
		cidade: 'Pelotas',
		estado: 'PE',
		rua: {
			nome: 'Nome Rua',
			id: 2,
			tipo: {
				categoria: 'asfaltada',
				array: ['1','2','3']
			}
		}
	}
}

// DESTRUCTURING
var userOBj = {
  nome: 'Rubens',
  idade: 45,
  endereco: {
    cidade: 'Pelotas',
    estado: 'PE',
    rua: {
      nomeRua: 'Nome Rua',
      id: 2,
      tipo: {
        categoria: 'asfaltada',
        arrayTipo: ['1', '2', '3']
      }
    }
  }
};

const { nome, endereco: { rua: { nomeRua } } } = userOBj;
const { endereco: { rua: { tipo: { arrayTipo } }}} = userOBj;

console.log(arrayTipo);

// REST

const arr = [1,4,5,7,8];
const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// RECUPERAR PARAMETROS
function soma(...params) {
	console.log(params);
}

soma(1,4,6)

// SPREAD 

const usuarioSpread = {
	nome: 'Spread',
	idade: '33',
	empresa: 'Telemar'
}

const uuarioSpread2 = { ...usuarioSpread, nome: { mudanca: 'eita' }}
const usarioWithoutSpread = { usuarioSpread, nome: { mudanca: 'eita' }}

console.log("uuarioSpread2", uuarioSpread2)
console.log("usarioWithoutSpread", usarioWithoutSpread)
