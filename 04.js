/**
 * 4º exercício
4.1 Desestruturação simples

 */

const empresa = {
	nome: 'Rocketseat',
	endereco: {
		cidade: 'Rio do Sul',
		estado: 'SC',
	}
 };

 const { nome } = empresa;
 const { endereco: { cidade } } = empresa;
 const { endereco: { estado } } = empresa;

 console.log(nome);
 console.log(cidade);
 console.log(estado);
 
 // 4.2 Desestruturação em parâmetros

 function mostraInfo( { nome ,idade } ) {
	return `${nome} tem ${idade} anos.`;
 }
 console.log(mostraInfo({ nome: 'Diego', idade: 23 }))