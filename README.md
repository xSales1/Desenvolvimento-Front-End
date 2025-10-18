# Projeto01

Repositório com páginas HTML estáticas usadas como exemplo/sandbox.

Visão geral

- `index.html` — Página principal
- `Cadastro.html` — Página de cadastro
- `Projetos.html` — Página de projetos

Objetivo

Este repositório serve como ponto de partida para experimentar layouts, formulários e navegação entre páginas estáticas. É ideal para testes locais rápidos e demonstrações.

Como executar localmente

Opção rápida (abrir no navegador):

1. Abra `index.html` diretamente no navegador (arrastar/soltar ou Arquivo → Abrir).

Opção recomendada (servidor local):

- Com Python 3 (na raiz do projeto):

```powershell
python -m http.server 8000
```

Abra: http://localhost:8000

- Com Node.js usando http-server (se preferir):

```powershell
npm install -g http-server
http-server -p 8000
```

Estrutura de desenvolvimento

- Faça alterações na branch `main` ou crie uma branch para suas alterações:

```powershell
git checkout -b feat/minha-alteracao
```

- Comandos úteis:

```powershell
git status
git add .
git commit -m "Descrição da mudança"
git push origin <sua-branch>
```

Contribuição

1. Fork do repositório
2. Clone para sua máquina
3. Crie uma branch, faça alterações e envie (push)
4. Abra um Pull Request

Sugestões de melhorias

- Adicionar CSS externo / framework (Bootstrap, Tailwind)
- Adicionar validação de formulários com JavaScript
- Separar scripts e estilos em arquivos próprios (`js/`, `css/`)

Licença

Se deseja tornar o projeto permissivo, recomendo a licença MIT. Para adicionar:

1. Crie um arquivo `LICENSE` com o texto da MIT License.

Contato

- Gabriel Sales — gabriel_salessilva@hotmail.com

Pronto — este README foi atualizado para conter instruções de uso e contribuição. Se quiser que eu adicione `.gitignore` e `LICENSE` e faça o push, me diga e eu prosseguo.
