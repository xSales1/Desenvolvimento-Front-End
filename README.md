# 📚 ONG ProPet - Site Completo CSS/HTML

## 🎯 Início Rápido

**� Primeira vez aqui? Leia:** [`INICIO-RAPIDO.md`](./INICIO-RAPIDO.md)

---

## 📄 Sobre o Projeto

Site completo para **ONG ProPet** desenvolvido usando **apenas HTML e CSS** (sem JavaScript) para fins educacionais.

### ✨ Destaques:
- ✅ **3 páginas completas** (Home, Projetos, Cadastro)
- ✅ **Design system profissional** (80+ variáveis CSS)
- ✅ **Responsivo** (6 breakpoints)
- ✅ **Interativo sem JavaScript** (checkbox hack, hover dropdowns)
- ✅ **Validação de formulários** (HTML5 + CSS)
- ✅ **4000+ linhas de documentação**

---

## 📁 Estrutura do Projeto

```
Projeto 02/
│
├── 📄 index.html              # Página inicial
├── 📄 Projetos.html           # Voluntariado + Doações
├── 📄 Cadastro-novo.html      # Formulário de cadastro
│
├── 📁 css/
│   ├── design-system.css      # Variáveis CSS
│   ├── layout.css             # Grid + responsividade
│   ├── components.css         # Componentes
│   └── main.css               # Estilos principais
│
└── 📁 docs/
    ├── INICIO-RAPIDO.md       ⭐ Comece aqui!
    ├── ATUALIZACAO-COMPLETA.md
    ├── DESIGN-SYSTEM.md
    ├── README-CSS-ONLY.md
    ├── EXEMPLOS-CODIGO.md
    ├── ESTRUTURA-PROJETO.md
    └── ESPECIFICACOES-ATENDIDAS.md
```

---

## 🚀 Como Usar

### 1. Visualizar
```bash
# Clique 2x em qualquer arquivo:
index.html          # Página inicial
Projetos.html       # Projetos
Cadastro-novo.html  # Cadastro
```

### 2. Testar Responsividade
```
1. Abra DevTools (F12)
2. Modo responsivo (Ctrl+Shift+M)
3. Teste: 375px, 768px, 1024px, 1440px
```

### 3. Testar Funcionalidades
- **Menu hambúrguer:** Redimensione para mobile (<768px)
- **Dropdown:** Passe mouse em "Projetos"
- **Validação:** Preencha o formulário

---

## 🎨 Design System

### Cores:
- **30+ tons** organizados (primary, secondary, estados, neutros)
- **10 tamanhos** de fonte hierárquicos
- **8 valores** de espaçamento modular

### Componentes:
- ✅ Navegação responsiva (menu hambúrguer CSS-only)
- ✅ Botões (3 tipos × 3 tamanhos × 4 estados)
- ✅ Cards (5 variações)
- ✅ Formulários com validação visual
- ✅ Alerts, badges, tags
- ✅ Grid 12 colunas

### Breakpoints:
```
📱 XS:  480px   (mobile pequeno)
📱 SM:  640px   (mobile médio)
📱 MD:  768px   (tablet)
💻 LG:  1024px  (desktop)
💻 XL:  1280px  (desktop wide)
🖥️ 2XL: 1536px  (ultra wide)
```

---

## 🎓 Técnicas CSS-Only (Sem JavaScript!)

### 1. Menu Hambúrguer (Checkbox Hack)
```html
<input type="checkbox" id="menu-toggle">
<label for="menu-toggle">☰</label>
```
Checkbox oculto controla visibilidade via CSS.

### 2. Dropdown Hover
```css
.dropdown:hover .menu {
  opacity: 1;
  visibility: visible;
}
```

### 3. Validação HTML5
```html
<input type="email" required pattern="...">
```
```css
input:valid { border: green; }
input:invalid { border: red; }
```

**👉 Detalhes:** [`README-CSS-ONLY.md`](./README-CSS-ONLY.md)

---

## 📖 Documentação

| Arquivo | Descrição |
|---------|-----------|
| [`INICIO-RAPIDO.md`](./INICIO-RAPIDO.md) | ⭐ **Comece aqui!** Guia rápido |
| [`ATUALIZACAO-COMPLETA.md`](./ATUALIZACAO-COMPLETA.md) | Resumo de tudo |
| [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) | Referência de componentes |
| [`README-CSS-ONLY.md`](./README-CSS-ONLY.md) | Tutorial de técnicas CSS |
| [`EXEMPLOS-CODIGO.md`](./EXEMPLOS-CODIGO.md) | Snippets prontos |
| [`ESTRUTURA-PROJETO.md`](./ESTRUTURA-PROJETO.md) | Arquitetura completa |
| [`ESPECIFICACOES-ATENDIDAS.md`](./ESPECIFICACOES-ATENDIDAS.md) | Checklist requisitos |

---

## 📊 Métricas

### Código:
```
✅ 3 páginas HTML (1200+ linhas)
✅ 4 arquivos CSS (2800+ linhas)
✅ 80+ variáveis CSS
✅ 15+ componentes
✅ 0 linhas JavaScript
```

### Documentação:
```
📖 7 arquivos markdown
📖 4000+ linhas de docs
📖 100+ exemplos
```

---

## 🎯 Funcionalidades

### Páginas:
- **index.html** - Página inicial com história, missão/visão/valores
- **Projetos.html** - Voluntariado e doações
- **Cadastro-novo.html** - Formulário com validação

### Interações (sem JS):
- ✅ Menu hambúrguer animado
- ✅ Dropdown em hover
- ✅ Validação visual de formulários
- ✅ Cards com hover effects
- ✅ Navegação por teclado (acessível)

---

## ✅ Requisitos Atendidos

- ✅ Design system com variáveis CSS
- ✅ 30+ cores organizadas
- ✅ 10 tamanhos de fonte
- ✅ Sistema de espaçamento modular
- ✅ CSS Grid no layout
- ✅ Grid 12 colunas customizado
- ✅ 6 breakpoints responsivos
- ✅ Menu responsivo (checkbox hack)
- ✅ Menu hambúrguer animado
- ✅ Dropdown CSS-only
- ✅ Sistema de cards
- ✅ Botões com estados visuais
- ✅ Formulários com validação
- ✅ Alerts, badges, tags
- ✅ Documentação completa

**👉 Detalhes:** [`ESPECIFICACOES-ATENDIDAS.md`](./ESPECIFICACOES-ATENDIDAS.md)

---

## 🚀 Acesso Rápido

### Visualizar Páginas:
- [`index.html`](./index.html) - Página inicial
- [`Projetos.html`](./Projetos.html) - Projetos
- [`Cadastro-novo.html`](./Cadastro-novo.html) - Cadastro

### CSS:
- [`css/design-system.css`](./css/design-system.css) - Variáveis
- [`css/layout.css`](./css/layout.css) - Grid
- [`css/components.css`](./css/components.css) - Componentes
- [`css/main.css`](./css/main.css) - Principais

---

## 💡 Dicas

### Para Desenvolvedores:
1. Leia [`README-CSS-ONLY.md`](./README-CSS-ONLY.md) (técnicas)
2. Consulte [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) (referência)
3. Copie de [`EXEMPLOS-CODIGO.md`](./EXEMPLOS-CODIGO.md) (snippets)

### Para Avaliadores:
1. Leia [`INICIO-RAPIDO.md`](./INICIO-RAPIDO.md) (5 min)
2. Teste demo ao vivo (5 min)
3. Veja [`ESPECIFICACOES-ATENDIDAS.md`](./ESPECIFICACOES-ATENDIDAS.md) (checklist)

---

## 🎓 Objetivos Educacionais

Este projeto demonstra:
- ✅ HTML semântico
- ✅ CSS moderno (variables, grid, flexbox)
- ✅ Design system profissional
- ✅ Responsividade mobile-first
- ✅ Acessibilidade (ARIA, keyboard nav)
- ✅ Técnicas CSS-only avançadas
- ✅ Documentação técnica completa

---

## 📞 Suporte

**Dúvidas?** Consulte a documentação:
- 🚀 [`INICIO-RAPIDO.md`](./INICIO-RAPIDO.md) - Como usar
- 🎨 [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) - Componentes
- 💡 [`README-CSS-ONLY.md`](./README-CSS-ONLY.md) - Técnicas
- 📝 [`EXEMPLOS-CODIGO.md`](./EXEMPLOS-CODIGO.md) - Código

---

## 👨‍💻 Autor

**Gabriel**
- Projeto acadêmico - 2024/2025
- Faculdade

---

## 📄 Licença

MIT License - Projeto educacional

---

## 🐾 Sobre a ONG ProPet

**ProPet** - Cuidando, resgatando e conectando animais a novos lares desde 2020.

### Missão:
Resgatar, cuidar e encontrar lares amorosos para animais abandonados, promovendo o bem-estar animal e a conscientização sobre a importância da adoção responsável.

### Contato:
- 📞 (12) 1234-5678
- ✉️ propet@doacao.com.br
- 📍 Rua dos Animais, 123 - Cidade Pet Land, Estado C/G

---

**🎉 Pronto para usar! Comece por [`INICIO-RAPIDO.md`](./INICIO-RAPIDO.md) ✨**

---

*Desenvolvido com ❤️ para fins educacionais*