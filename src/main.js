// CRIANDO PROMISE MANUAL

const minhaPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => { resolve('OK')}, 2000);
});

// UTILIZANDO O ASYNC AWAIT
// ADICIONADO O ASYNC AUTOMATICAMENTE A FUNÇÃO VIRA UMA PROMISE
// O AWAIT SO PODE SER UTILIZADO NUMA FUNÇÃO COM ASYNC
async function executaPromise() {
	console.log(await minhaPromise());
	// SEGUNDA LINHA SO EXECUTA DEPOIS DA PRIMEIRA
	console.log(await minhaPromise());
	console.log(await minhaPromise());
	console.log(response)

	// UTILIZANDO SINTAXE COM .THEN:
	// myPromise().then((response) => {
	// 	console.log(response);
	// 	myPromise().then((response) => {
	// 		console.log(response);
	// 		myPromise().then((response) => {
	// 			console.log(response);
	// 		})
	// 	})
	// })
}

executaPromise();

// ASYNC AWAIT COM ARROW function
const executaPromiseArrow = async () => {
	console.log(await myPromise());
	console.log(await myPromise());
	console.log(await myPromise());
}

executaPromiseArrow();