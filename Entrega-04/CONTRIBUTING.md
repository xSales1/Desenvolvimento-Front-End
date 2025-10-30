# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o projeto ONG ProPet! Este guia explica como contribuir de forma efetiva e seguindo nossos padrões de qualidade.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Workflow GitFlow](#workflow-gitflow)
- [Padrões de Commit](#padrões-de-commit)
- [Testes e Qualidade](#testes-e-qualidade)
- [Documentação](#documentação)

## 📖 Código de Conduta

Este projeto segue o [Contributor Covenant](https://www.contributor-covenant.org/). Ao participar, você deve seguir este código. Reporte comportamentos inaceitáveis para [gabriel@exemplo.com](mailto:gabriel@exemplo.com).

## 🚀 Como Contribuir

### Reportar Bugs

1. **Verifique se já existe** uma issue sobre o problema
2. **Use o template de bug report** ao criar uma nova issue
3. **Inclua informações detalhadas**:
   - Versão do navegador
   - Sistema operacional
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots quando aplicável

### Sugerir Melhorias

1. **Verifique se já existe** uma issue sobre a sugestão
2. **Use o template de feature request**
3. **Explique claramente**:
   - O problema que resolve
   - A solução proposta
   - Alternativas consideradas
   - Impacto na acessibilidade (se aplicável)

### Contribuir com Código

1. **Fork** o repositório
2. **Crie um branch** seguindo nosso padrão
3. **Implemente** suas mudanças
4. **Teste** rigorosamente
5. **Documente** suas alterações
6. **Abra um Pull Request**

## 🛠️ Padrões de Desenvolvimento

### Estrutura de Arquivos

```
src/
├── css/
│   ├── design-system.css    # Variáveis e tokens
│   ├── layout.css           # Grid e estrutura
│   ├── components.css       # Componentes UI
│   ├── main.css             # Estilos específicos
│   └── accessibility.css    # Acessibilidade WCAG
├── js/
│   ├── spa-final.js         # Sistema SPA
│   ├── form-validation.js   # Validações
│   ├── dom-enhancer.js      # Melhorias UX
│   └── accessibility.js     # Funcionalidades A11Y
├── pages/
│   ├── projetos.html
│   └── cadastro.html
└── images/
    └── *.jpg
```

### Padrões CSS

```css
/* ✅ BEM Methodology */
.component__element--modifier { }

/* ✅ Variáveis CSS para tudo */
.component {
  color: var(--color-primary-600);
  padding: var(--space-4);
}

/* ✅ Mobile-first approach */
.component {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

/* ✅ Acessibilidade sempre */
.component:focus {
  outline: 3px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

### Padrões JavaScript

```javascript
// ✅ ES6+ features
const component = {
  init() {
    this.setupEventListeners();
    this.setupAccessibility();
  },

  setupEventListeners() {
    // Event delegation quando possível
    document.addEventListener('click', this.handleClick.bind(this));
  },

  setupAccessibility() {
    // Sempre considerar acessibilidade
    this.element.setAttribute('aria-label', 'Descrição');
  }
};

// ✅ JSDoc para documentação
/**
 * Valida um campo de formulário
 * @param {HTMLElement} field - Campo a ser validado
 * @param {Object} rules - Regras de validação
 * @returns {boolean} True se válido
 */
function validateField(field, rules) {
  // implementação
}
```

### Padrões HTML

```html
<!-- ✅ Semântica adequada -->
<main role="main" id="main-content">
  <section aria-labelledby="section-title">
    <h2 id="section-title">Título da Seção</h2>
  </section>
</main>

<!-- ✅ Acessibilidade sempre -->
<button 
  type="button"
  aria-label="Fechar modal"
  aria-expanded="false"
  tabindex="0">
  ×
</button>

<!-- ✅ Formulários acessíveis -->
<label for="email" class="form-label">
  Email <span aria-label="obrigatório">*</span>
</label>
<input 
  type="email" 
  id="email" 
  name="email"
  aria-describedby="email-help"
  aria-invalid="false"
  required>
<div id="email-help" class="form-helper">
  Digite seu email principal
</div>
```

## 🌊 Workflow GitFlow

### Branches

- **`main`**: Código de produção estável
- **`develop`**: Integração de features
- **`feature/nome-da-feature`**: Desenvolvimento de funcionalidades
- **`release/v1.2.3`**: Preparação de releases
- **`hotfix/nome-do-fix`**: Correções urgentes

### Fluxo de Trabalho

1. **Nova Feature**:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nome-da-feature
   # desenvolver...
   git push origin feature/nome-da-feature
   # abrir PR para develop
   ```

2. **Release**:
   ```bash
   git checkout develop
   git checkout -b release/v1.2.3
   # preparar release...
   git checkout main
   git merge release/v1.2.3
   git tag v1.2.3
   git checkout develop
   git merge release/v1.2.3
   ```

3. **Hotfix**:
   ```bash
   git checkout main
   git checkout -b hotfix/nome-do-fix
   # corrigir...
   git checkout main
   git merge hotfix/nome-do-fix
   git tag v1.2.4
   git checkout develop
   git merge hotfix/nome-do-fix
   ```

## 📝 Padrões de Commit

### Conventional Commits

```
tipo(escopo): descrição curta

Descrição mais longa explicando o que mudou,
por que mudou e qual o impacto.

Resolves: #123
Breaking Change: descreva se aplicável
```

### Tipos de Commit

- **`feat`**: Nova funcionalidade
- **`fix`**: Correção de bug
- **`docs`**: Documentação
- **`style`**: Formatação, espaços em branco
- **`refactor`**: Refatoração de código
- **`perf`**: Melhoria de performance
- **`test`**: Testes
- **`chore`**: Tarefas de build, CI, etc.
- **`a11y`**: Melhorias de acessibilidade

### Exemplos

```bash
feat(form): adicionar validação de CPF em tempo real

Implementa validação de CPF usando algoritmo de dígitos verificadores
com feedback visual imediato para o usuário.

Resolves: #45

fix(a11y): corrigir navegação por teclado no dropdown

O dropdown não estava capturando eventos de teclado corretamente,
impedindo navegação por usuários que dependem apenas do teclado.

Breaking Change: Alterado atributo data-dropdown para aria-expanded

docs(readme): atualizar seção de acessibilidade

Adiciona documentação sobre testes de acessibilidade e ferramentas
recomendadas para validação WCAG.
```

## 🧪 Testes e Qualidade

### Antes de Committar

```bash
# Linting
npm run lint

# Formatação
npm run format

# Build de produção
npm run build:prod

# Testes de acessibilidade
npm run a11y:audit
```

### Testes Obrigatórios

1. **Navegação por Teclado**:
   - Tab para todos os elementos interativos
   - Enter/Space para ativar controles
   - Escape para fechar modais/dropdowns
   - Setas para navegação em menus

2. **Leitores de Tela**:
   - NVDA (Windows) - gratuito
   - JAWS (Windows) - pago
   - VoiceOver (macOS) - nativo
   - TalkBack (Android) - nativo

3. **Contraste**:
   - Mínimo 4.5:1 para texto normal
   - Mínimo 3:1 para texto grande
   - Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

4. **Validação HTML**:
   - [W3C Markup Validator](https://validator.w3.org/)
   - Sem erros críticos

5. **Performance**:
   - Lighthouse score mínimo 90
   - First Contentful Paint < 2s
   - Largest Contentful Paint < 3s

### Ferramentas Recomendadas

- **axe DevTools**: Extensão de acessibilidade
- **WAVE**: Web Accessibility Evaluation Tool
- **Lighthouse**: Auditoria de qualidade
- **Pa11y**: Testes de acessibilidade via CLI
- **Color Oracle**: Simulador de daltonismo

## 📚 Documentação

### Ao Adicionar Features

1. **Atualizar README.md** se necessário
2. **Documentar no CHANGELOG.md**
3. **Adicionar JSDoc** em funções JavaScript
4. **Comentar CSS complexo**
5. **Incluir exemplos de uso**

### Padrões de Documentação

```javascript
/**
 * Gerencia a acessibilidade da aplicação
 * 
 * @class AccessibilityManager
 * @example
 * const a11y = new AccessibilityManager();
 * a11y.init();
 */
class AccessibilityManager {
  /**
   * Inicializa todas as funcionalidades de acessibilidade
   * 
   * @memberof AccessibilityManager
   * @since 1.0.0
   */
  init() {
    // implementação
  }
}
```

## 🚨 Pull Request

### Checklist

- [ ] Testado em múltiplos navegadores
- [ ] Testado com leitor de tela
- [ ] Navegação por teclado funcional
- [ ] Contraste validado
- [ ] Lighthouse score mantido/melhorado
- [ ] Documentação atualizada
- [ ] Testes passando
- [ ] Commits seguem padrão semântico

### Template de PR

```markdown
## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Descrição
Descreva brevemente o que foi alterado e por quê.

## Testes de Acessibilidade
- [ ] Navegação por teclado testada
- [ ] Leitor de tela testado (qual?)
- [ ] Contraste validado
- [ ] Funcional em modo escuro

## Screenshots
Se aplicável, adicione screenshots das mudanças.

## Issues Relacionadas
Fixes #123
Related to #456
```

## 🆘 Precisa de Ajuda?

- **Issues**: Para bugs e sugestões
- **Discussions**: Para perguntas gerais
- **Email**: gabriel@exemplo.com

## 🏆 Reconhecimento

Contribuidores são reconhecidos no README.md e releases notes. Obrigado por ajudar a tornar a web mais acessível! ♿