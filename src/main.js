import api from './api';

class App {
	constructor() {
		this.repos = [];
		this.formRef = document.getElementById('repo-form');
		this.inputRef = document.querySelector('input[name=repository]')
		this.listRef = document.getElementById('repo-list');
		this.registerHandlers();
	}

	registerHandlers() {
		// OUVIR EVENTOS DO FORM (SUBMIT)
		this.formRef.onsubmit = event => this.addRepo(event)
	}

	async addRepo(event) {
		// PREVENIR QUE A PAGINA RECARREGUE
		event.preventDefault();

		const repoInput = this.inputRef.value;

		if (repoInput.length === 0) return;

		const response = await api.get(`https://api.github.com/repos/tayronetm/${repoInput}`);

		console.log(response)

		this.repos.push({
			name: 'rocketseat.com.br',
			description: 'Tire a sua ideia do papel e dê vida à sua startup',
			avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
			html_url: 'http://github.com/rocketseat/rocketseat.com.br'
		})

		this.render();
	}

	render() {
		// APAGAR ELEMENTOS DA LISTA
		this.listRef.innerHTML = '';
		this.repos.forEach(repo => {
			// <img src="https://avatars0.githubusercontent.com/u/28929274?v=4"/>
			let imgEl = document.createElement('img');
			imgEl.setAttribute('src', repo.avatar_url);
      // <strong>rocketseat.com.br</strong>
			let titleEl = document.createElement('strong');
			titleEl.appendChild(document.createTextNode(repo.name));
      // <p>Tire a sua ideia do papel e dê vida à sua startup.</p>
			let descriptionEl = document.createElement('p');
			descriptionEl.appendChild(document.createTextNode(repo.description));
      // <a rel="noreferrer noopener" target="_blank" href="http://github.com/rocketseat/rocketseat.com.br">Acessar</a>
			let linkEl = document.createElement('a');
			linkEl.setAttribute('href', repo.html_url);
			linkEl.setAttribute('target', '_blank');
			linkEl.setAttribute('rel', 'noreferrer noopener');
			linkEl.appendChild(document.createTextNode('Acessar'));
			/**
			 * <li>
					<img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="" srcset="" />
					<strong>rocketseat.com.br</strong>
					<p>Tire a sua ideia do papel e dê vida à sua startup.</p>
					<a rel="noreferrer noopener" target="_blank" href="http://github.com/rocketseat/rocketseat.com.br">Acessar</a>
				</li>
			 */
			let listItemEl = document.createElement('li');
			listItemEl.appendChild(imgEl);
			listItemEl.appendChild(titleEl);
			listItemEl.appendChild(descriptionEl);
			listItemEl.appendChild(linkEl);
			// ADICONANDO LIS DENTRO DA UL
			this.listRef.appendChild(listItemEl);
		})
	}
}

new App();

