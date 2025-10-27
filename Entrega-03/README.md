# 🐾 ONG ProPet - Site Completo HTML/CSS/JavaScript

## 📄 Sobre o Projeto

Site completo para **ONG ProPet** desenvolvido com **HTML5, CSS3 e JavaScript** para fins educacionais. Esta é a **terceira entrega** do projeto acadêmico, evoluindo das versões anteriores:

- **Entrega 01**: HTML puro (estrutura básica)
- **Entrega 02**: HTML + CSS (design system e responsividade)
- **Entrega 03**: HTML + CSS + JavaScript (interatividade e funcionalidades avançadas)

### ✨ Destaques:
- ✅ **Sistema SPA** (Single Page Application)
- ✅ **Validação avançada de formulários** com JavaScript
- ✅ **Manipulação dinâmica do DOM**
- ✅ **Integração com APIs** (ViaCEP)
- ✅ **Experiência de usuário aprimorada**
- ✅ **Estrutura organizada** em pastas

**👨‍💻 Autor**: Gabriel Sales da Silva  
**📚 Contexto**: Projeto acadêmico - Entrega 03 - Desenvolvimento Front-End para Web  
**📅 Data**: 2024/2025

---

## 📁 Estrutura do Projeto

```
Entrega-03/
├── 📄 index.html              # Página principal (SPA)
├── 📁 pages/                  # Páginas secundárias
│   ├── projetos.html          # Voluntariado + Doações
│   └── cadastro.html          # Formulário avançado
├── 📁 css/                    # Folhas de estilo
│   ├── design-system.css      # Variáveis CSS
│   ├── layout.css             # Grid + responsividade
│   ├── components.css         # Componentes UI
│   └── main.css               # Estilos principais
├── 📁 js/                     # Scripts JavaScript
│   ├── spa-final.js          # Sistema SPA principal
│   ├── form-validation.js    # Validação de formulários
│   └── dom-enhancer.js       # Melhorias de UX
├── 📁 images/                 # Imagens do projeto
│   ├── prop1.jpg             # Logo principal
│   ├── prop2.jpg             # Imagem voluntários
│   └── ...
└── 📄 README-JAVASCRIPT.md    # Este arquivo
```

---

## 📋 Especificações Técnicas Implementadas

### ✅ Manipulação do DOM
- **Sistema SPA (Single Page Application)**: Navegação sem recarregamento de página
- **Templates JavaScript**: Sistema de templates dinâmicos para diferentes páginas
- **Manipulação dinâmica de elementos**: Criação, modificação e remoção de elementos DOM
- **Event listeners**: Gerenciamento de eventos de clique, input, submit, scroll

### ✅ Sistema de Verificação de Consistência de Dados

#### Validações Implementadas:
1. **Campos Obrigatórios**: Verificação de preenchimento
2. **Formato de Email**: Validação de padrão de email válido
3. **CPF**: Validação completa com algoritmo de dígitos verificadores
4. **Telefone**: Formatação automática e validação de padrão
5. **Idade**: Validação de range (18-100 anos)
6. **CEP**: Formatação automática e integração com API ViaCEP
7. **Campos de texto**: Validação de comprimento mínimo
8. **Checkboxes**: Validação de seleção obrigatória de áreas de interesse

#### Funcionalidades de Validação:
- ✅ **Validação em tempo real**: Feedback imediato durante digitação
- ✅ **Formatação automática**: CPF, telefone e CEP formatados automaticamente
- ✅ **Mensagens de erro personalizadas**: Avisos específicos para cada tipo de erro
- ✅ **Indicadores visuais**: Campos com bordas vermelhas para erro e verdes para sucesso
- ✅ **Notificações toast**: Alertas no canto da tela para status de envio
- ✅ **Auto-complete de endereço**: Preenchimento automático via CEP
- ✅ **Scroll para erro**: Navegação automática para o primeiro campo com erro

## 🗂️ Estrutura de Arquivos JavaScript

```
js/
├── spa-system.js          # Sistema SPA e templates
├── form-validation.js     # Validação de formulários
└── dom-enhancer.js       # Funcionalidades extras
```

## 🎯 Funcionalidades do Sistema SPA

### Navegação
- **Hash-based routing**: URLs amigáveis com hash (#home, #projetos, #cadastro)
- **History API**: Suporte ao botão voltar do navegador
- **Active states**: Indicação visual da página atual na navegação
- **Loading states**: Transições suaves entre páginas

### Templates
- **Template Home**: Página inicial com hero, história e informações
- **Template Projetos**: Página de projetos e áreas de atuação
- **Template Cadastro**: Carregamento dinâmico do formulário de cadastro
- **Scroll automático**: Navegação para seções específicas

## 🛡️ Sistema de Validação

### Regras de Validação

```javascript
nome: {
    required: true,
    minLength: 3,
    pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
    message: 'Nome deve conter apenas letras e ter pelo menos 3 caracteres'
}

email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Por favor, insira um email válido'
}

cpf: {
    required: true,
    pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    validator: validateCPF(), // Algoritmo completo de validação
    message: 'CPF deve estar no formato 000.000.000-00 e ser válido'
}
```

### Estados de Validação
- **Campo válido**: Borda verde, ícone de sucesso
- **Campo inválido**: Borda vermelha, mensagem de erro específica
- **Campo obrigatório**: Indicação visual e validação
- **Formatação automática**: Aplicada durante a digitação

## 🚀 Funcionalidades Extras

### Melhorias de UX
- **Animações suaves**: Transições entre elementos
- **Efeitos de scroll**: Animações ao aparecer na tela
- **Hover effects**: Interações visuais nos cards
- **Loading states**: Indicadores de carregamento em botões
- **Tooltips dinâmicos**: Informações contextuais
- **Paralaxe suave**: Efeito no hero da página

### Acessibilidade
- **Navegação por teclado**: Suporte completo ao teclado
- **ARIA labels**: Atributos para leitores de tela
- **Focus indicators**: Indicação visual de foco
- **Live regions**: Anúncios de mudanças para leitores de tela

### Integração com APIs
- **ViaCEP API**: Auto-preenchimento de endereço por CEP
- **Error handling**: Tratamento de erros de API
- **Feedback visual**: Notificações de sucesso/erro

## 📱 Responsividade JavaScript
- **Event listeners responsivos**: Adaptação a diferentes dispositivos
- **Touch events**: Suporte a dispositivos móveis
- **Media query detection**: Comportamentos específicos por tamanho de tela

## 🎨 Estilos Dinâmicos
- **CSS-in-JS**: Estilos aplicados via JavaScript
- **Classes dinâmicas**: Adição/remoção baseada em estado
- **Animações CSS**: Definidas e controladas via JavaScript
- **Responsive adjustments**: Alterações de estilo baseadas em viewport

## 📊 Métricas e Analytics
- **Form completion**: Rastreamento de preenchimento de formulário
- **Error tracking**: Log de erros de validação
- **User interactions**: Monitoramento de cliques e navegação
- **Performance monitoring**: Tempo de carregamento de templates

## 🔒 Segurança
- **Input sanitization**: Limpeza de dados de entrada
- **XSS prevention**: Prevenção de scripts maliciosos
- **Form validation**: Validação client-side e preparação para server-side
- **Error boundaries**: Tratamento de erros JavaScript

---

## 💡 Demonstração das Funcionalidades

1. **Navegue pelas páginas** usando os links do menu (SPA em ação)
2. **Acesse a página de cadastro** e teste as validações
3. **Digite um CPF inválido** para ver a validação em tempo real
4. **Preencha um CEP válido** para ver o auto-complete de endereço
5. **Tente enviar o formulário incompleto** para ver as mensagens de erro
6. **Use Tab e Enter** para testar a navegação por teclado

### 🔧 Referência Técnica para Desenvolvedores

#### Navegação SPA:
```javascript
// Navegar para uma página
navigateTo('home');
navigateTo('projetos', 'voluntariado'); // Com seção específica
```

#### Validação Manual:
```javascript
// Instanciar validador
const validator = new FormValidator();
validator.validateField(document.querySelector('#email'));
```

#### Eventos Personalizados:
```javascript
// Escutar mudanças de página SPA
window.addEventListener('popstate', function(event) {
    console.log('Página alterada:', event.state);
});
```

Este sistema demonstra um uso avançado de JavaScript vanilla para criar uma experiência de usuário moderna e interativa, com foco em usabilidade, acessibilidade e validação robusta de dados.

---

## 🚀 Como Usar

### 1. Visualizar
```bash
# Clique 2x no arquivo principal:
index.html          # Página principal (SPA)

# Ou navegue diretamente para:
pages/projetos.html # Página de projetos
pages/cadastro.html # Formulário com validação
```

### 2. Testar Funcionalidades JavaScript
- **Sistema SPA**: Use os links de navegação no menu
- **Validação**: Preencha o formulário de cadastro
- **API Integration**: Digite um CEP válido (ex: 01310-100)
- **Animações**: Scroll pela página para ver efeitos

### 3. Testar Responsividade
```
1. Abra DevTools (F12)
2. Modo responsivo (Ctrl+Shift+M)
3. Teste: 375px, 768px, 1024px, 1440px
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Design system completo e responsividade
- **JavaScript ES6+**: Interatividade e funcionalidades avançadas
- **APIs**: Integração com ViaCEP para busca de endereços

---

## 🎯 Evolução do Projeto

### Entrega 01 (HTML) → Entrega 02 (CSS) → Entrega 03 (JavaScript)

| Recurso | Entrega 01 | Entrega 02 | Entrega 03 |
|---------|------------|------------|------------|
| **Páginas** | 3 páginas HTML | 3 páginas + CSS | SPA + páginas estáticas |
| **Design** | ❌ Sem estilo | ✅ Design system | ✅ Design + animações |
| **Responsivo** | ❌ Não | ✅ 6 breakpoints | ✅ Responsivo + JS |
| **Formulário** | ✅ HTML5 básico | ✅ Validação CSS | ✅ Validação JS avançada |
| **Navegação** | ✅ Links simples | ✅ Menu responsivo | ✅ SPA + menu interativo |
| **Interatividade** | ❌ Nenhuma | ✅ CSS-only | ✅ JavaScript completo |
| **APIs** | ❌ Não | ❌ Não | ✅ ViaCEP integration |
| **UX/UI** | ❌ Básico | ✅ Profissional | ✅ Avançado + animações |

---

## 🌟 Novas Funcionalidades JavaScript

### ✅ Sistema SPA
- **Navegação sem reload**: Carregamento dinâmico de conteúdo
- **URLs amigáveis**: Hash-based routing (#home, #projetos, #cadastro)
- **History API**: Suporte ao botão voltar do navegador
- **Loading states**: Transições suaves entre páginas

### ✅ Validação Avançada de Formulários
- **Tempo real**: Validação durante a digitação
- **CPF**: Algoritmo completo de validação
- **Email**: Validação de formato avançada
- **CEP**: Formatação automática + API ViaCEP
- **Telefone**: Máscaras automáticas
- **Feedback visual**: Bordas coloridas e mensagens específicas

### ✅ Integração com APIs
- **ViaCEP**: Auto-preenchimento de endereço
- **Error handling**: Tratamento de erros de rede
- **Loading indicators**: Feedback durante requisições

### ✅ Melhorias de UX
- **Animações**: Efeitos de scroll e hover
- **Tooltips dinâmicos**: Informações contextuais
- **Notificações toast**: Alertas elegantes
- **Scroll automático**: Navegação para erros
- **Keyboard navigation**: Acessibilidade completa

---

## 📊 Comparação com Entregas Anteriores

### Métricas de Código:
```
📈 Entrega 01: ~800 linhas HTML
📈 Entrega 02: ~4000+ linhas (HTML+CSS)
📈 Entrega 03: ~6000+ linhas (HTML+CSS+JS)
```

### Funcionalidades:
```
Entrega 01: 5 funcionalidades básicas
Entrega 02: 15+ componentes CSS
Entrega 03: 25+ funcionalidades JavaScript
```

---

## ✅ Requisitos Atendidos (Entrega 03)

### JavaScript Core:
- ✅ Manipulação do DOM
- ✅ Event listeners
- ✅ Validação de dados
- ✅ Integração com APIs
- ✅ Sistema SPA

### Validação de Formulários:
- ✅ Campos obrigatórios
- ✅ Formatos específicos (email, CPF, telefone)
- ✅ Validação em tempo real
- ✅ Mensagens de erro personalizadas
- ✅ Formatação automática

### UX/UI Avançado:
- ✅ Animações CSS + JS
- ✅ Loading states
- ✅ Notificações
- ✅ Responsive behavior
- ✅ Acessibilidade

---

## 🎓 Objetivos Educacionais Alcançados

### Progressão das Entregas:
1. **Entrega 01**: Fundamentos HTML e estrutura semântica
2. **Entrega 02**: Design system profissional e CSS avançado
3. **Entrega 03**: JavaScript moderno e interatividade completa

### Competências Demonstradas:
- ✅ **HTML5 semântico**: Evolução das 3 entregas
- ✅ **CSS moderno**: Design system robusto
- ✅ **JavaScript ES6+**: Funcionalidades avançadas
- ✅ **SPA development**: Arquitetura moderna
- ✅ **API integration**: Consumo de serviços externos
- ✅ **Form validation**: Validação robusta
- ✅ **Responsive design**: Adaptação a dispositivos
- ✅ **Accessibility**: Padrões de acessibilidade
- ✅ **Code organization**: Estrutura profissional
- ✅ **Documentation**: Documentação técnica completa

---

## 📞 Informações de Contato (Fictícias)

> **⚠️ Dados Fictícios**: Todos os dados de contato são simulados para fins acadêmicos

- **📱 Telefone**: (12) 1234-5678
- **📧 Email**: propet@doacao.com.br
- **📍 Endereço**: Rua dos Animais, 123 - Cidade Pet Land, Estado C/G
- **🏦 PIX para Doações**: 12.345.678/0001-00 (CNPJ)

---

## 🐾 Sobre a ONG ProPet

**ProPet** - Cuidando, resgatando e conectando animais a novos lares desde 2020.

### Missão:
Resgatar, cuidar e encontrar lares amorosos para animais abandonados, promovendo o bem-estar animal e a conscientização sobre a importância da adoção responsável.

### Evolução (Dados Simulados):
- **2020**: Fundação com 10 animais
- **2024**: Mais de 100 pets abrigados
- **2025**: Sistema digital completo (este projeto)

---

## 📝 Licença e Autoria

**👨‍💻 Desenvolvedor**: Gabriel Sales da Silva  
**📅 Data**: 2024/2025  
**🎓 Contexto**: Projeto acadêmico - Entrega 03 - JavaScript  
**📋 Licença**: Projeto educacional para fins de aprendizado

---

## 🚀 Acesso Rápido

### Páginas:
- [`index.html`](./index.html) - SPA principal
- [`pages/projetos.html`](./pages/projetos.html) - Projetos
- [`pages/cadastro.html`](./pages/cadastro.html) - Cadastro

### JavaScript:
- [`js/spa-final.js`](./js/spa-final.js) - Sistema SPA
- [`js/form-validation.js`](./js/form-validation.js) - Validações
- [`js/dom-enhancer.js`](./js/dom-enhancer.js) - UX extras

### CSS (herdado da Entrega 02):
- [`css/design-system.css`](./css/design-system.css) - Variáveis
- [`css/components.css`](./css/components.css) - Componentes
- [`css/main.css`](./css/main.css) - Estilos principais

---

**🎉 Projeto completo! Evolução de 3 entregas demonstrando progressão em desenvolvimento frontend moderno ✨**

---

*Desenvolvido com ❤️ para fins educacionais - Demonstração completa de HTML5, CSS3 e JavaScript ES6+*