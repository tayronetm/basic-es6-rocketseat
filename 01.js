/**
 * 1º exercício
Passo 1 - Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".

Passo 2 - A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe.

Passo 3 - A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.

Passo 4 - Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
 */

 class Usuario {
	 // Passo 2
	constructor(email, senha) {
		this.email = email;
		this.senha = senha;
	}

	// Passo 4
	isAdmin() {
		return this.admin === true;
	}
 }
 // Passo 1
 class Admin extends Usuario {
 // Passo 3
	constructor(email, senha){
		super(email, senha);
		this.admin = true;
	}
 }

 const usuario = new Usuario('teste@teste.com', 'senha123');
 const admin = new Admin('teste@teste.com', 'senha123');

 console.log(usuario.isAdmin()) // false
 console.log(admin.isAdmin()) // true