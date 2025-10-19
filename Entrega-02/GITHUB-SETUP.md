# 📦 Como Subir o Projeto ProPet para o GitHub

## 🎯 Passo a Passo Completo

### 1️⃣ **Criar Repositório no GitHub**

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Configure o repositório:
   - **Repository name**: `projeto-propet-ong`
   - **Description**: `Website institucional da ONG ProPet - Resgate e adoção de animais`
   - **Visibilidade**: Public (ou Private se preferir)
   - ❌ **NÃO** marque "Add a README file" (já temos um)
   - ❌ **NÃO** adicione .gitignore nem license ainda
5. Clique em **"Create repository"**

---

### 2️⃣ **Preparar o Projeto Localmente**

Abra o **PowerShell** na pasta do projeto:

```powershell
# Navegar até a pasta do projeto
cd "C:\Users\gabri\Desktop\Faculdade\Projeto 02"

# Verificar se está na pasta correta
pwd
```

---

### 3️⃣ **Inicializar Git no Projeto**

```powershell
# Inicializar repositório Git
git init

# Verificar status
git status
```

---

### 4️⃣ **Criar arquivo .gitignore**

Crie um arquivo `.gitignore` para ignorar arquivos desnecessários:

```powershell
# Criar .gitignore
New-Item -Path ".gitignore" -ItemType File -Force
```

Adicione o seguinte conteúdo ao `.gitignore`:
```
# Sistema operacional
.DS_Store
Thumbs.db
desktop.ini

# Editores
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log

# Temporários
*.tmp
*.temp
```

---

### 5️⃣ **Adicionar Arquivos ao Git**

```powershell
# Adicionar todos os arquivos
git add .

# Verificar o que será commitado
git status
```

---

### 6️⃣ **Fazer o Primeiro Commit**

```powershell
# Criar commit inicial
git commit -m "Primeiro commit: Website ONG ProPet completo

- Página inicial (index.html) com hero section e história
- Página de projetos (Projetos.html) com voluntariado e doações
- Página de cadastro (Cadastro-novo.html) com formulário completo
- Sistema de design CSS moderno com 4 arquivos organizados
- Design responsivo para mobile, tablet e desktop
- Componentes reutilizáveis (botões, cards, alerts, badges)
- Animações e efeitos visuais modernos
- Imagens e assets do projeto
- Documentação completa em Markdown"
```

---

### 7️⃣ **Conectar ao Repositório GitHub**

**Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub:**

```powershell
# Adicionar remote do GitHub
git remote add origin https://github.com/SEU-USUARIO/projeto-propet-ong.git

# Verificar se foi adicionado
git remote -v
```

**Exemplo:**
```powershell
git remote add origin https://github.com/gabrielsilva/projeto-propet-ong.git
```

---

### 8️⃣ **Renomear Branch para 'main'**

```powershell
# Renomear branch master para main (padrão atual do GitHub)
git branch -M main
```

---

### 9️⃣ **Enviar para o GitHub**

```powershell
# Fazer push para o GitHub
git push -u origin main
```

**Se pedir autenticação:**
- Use seu **username** do GitHub
- Use um **Personal Access Token** como senha (não a senha da conta)

---

### 🔐 **Como Criar Personal Access Token**

1. No GitHub, vá em **Settings** (seu perfil)
2. Clique em **Developer settings** (no final do menu)
3. Clique em **Personal access tokens** > **Tokens (classic)**
4. Clique em **Generate new token** > **Generate new token (classic)**
5. Configure:
   - **Note**: `Projeto ProPet`
   - **Expiration**: 90 days (ou o que preferir)
   - **Scopes**: Marque ✅ **repo** (todas as opções)
6. Clique em **Generate token**
7. **COPIE O TOKEN** (você não verá novamente!)
8. Use este token como senha no git push

---

## ✅ Verificar se Deu Certo

Após o push, acesse seu repositório no GitHub:
```
https://github.com/SEU-USUARIO/projeto-propet-ong
```

Você deve ver todos os arquivos lá! 🎉

---

## 🌐 Ativar GitHub Pages (Hospedar Site Grátis)

1. No repositório GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**
5. Aguarde 1-2 minutos
6. Seu site estará disponível em:
   ```
   https://SEU-USUARIO.github.io/projeto-propet-ong/
   ```

---

## 📝 Comandos Git Úteis para Futuras Atualizações

### **Fazer alterações e atualizar o GitHub:**

```powershell
# 1. Ver o que foi modificado
git status

# 2. Adicionar arquivos modificados
git add .

# 3. Fazer commit das mudanças
git commit -m "Descrição das mudanças"

# 4. Enviar para o GitHub
git push
```

### **Exemplo de atualização:**

```powershell
# Após modificar arquivos
git add .
git commit -m "Atualização: Corrigir botões e ajustar cores"
git push
```

---

## 🎨 Estrutura do Repositório

```
projeto-propet-ong/
├── index.html                          # Página inicial
├── Projetos.html                       # Página de projetos
├── Cadastro-novo.html                  # Formulário de cadastro
├── Cadastro.html                       # Versão antiga (pode remover)
├── README.md                           # Documentação principal
├── .gitignore                          # Arquivos ignorados
├── css/
│   ├── design-system.css              # Variáveis e sistema
│   ├── layout.css                     # Grid e layout
│   ├── components.css                 # Componentes UI
│   └── main.css                       # Estilos principais
├── prop1.jpg                          # Logo
├── prop.jpg                           # Imagem 1
├── prop2.jpg                          # Imagem 2
└── docs/                              # Documentação extra
    ├── MELHORIAS-MODERNAS.md
    ├── GUIA-CLASSES.md
    └── COMO-VISUALIZAR.md
```

---

## 🚀 URLs do Projeto

- **Repositório**: `https://github.com/SEU-USUARIO/projeto-propet-ong`
- **GitHub Pages**: `https://SEU-USUARIO.github.io/projeto-propet-ong/`
- **Clone**: `git clone https://github.com/SEU-USUARIO/projeto-propet-ong.git`

---

## 🆘 Problemas Comuns e Soluções

### **Erro: "remote origin already exists"**
```powershell
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/projeto-propet-ong.git
```

### **Erro: "Updates were rejected"**
```powershell
git pull origin main --rebase
git push origin main
```

### **Erro: "Permission denied"**
- Verifique se está usando Personal Access Token correto
- Recrie o token se necessário

### **Arquivos grandes (imagens)**
- GitHub aceita até 100MB por arquivo
- Se necessário, otimize as imagens antes

---

## 📋 Checklist Final

Antes de fazer push, verifique:

- [ ] Todos os arquivos importantes estão na pasta
- [ ] Imagens estão funcionando
- [ ] Links entre páginas estão corretos
- [ ] CSS está carregando
- [ ] README.md está completo
- [ ] .gitignore criado
- [ ] Commit com mensagem descritiva
- [ ] Remote do GitHub configurado

---

## 🎓 Comandos Completos em Sequência

```powershell
# 1. Navegar até o projeto
cd "C:\Users\gabri\Desktop\Faculdade\Projeto 02"

# 2. Inicializar Git
git init

# 3. Adicionar arquivos
git add .

# 4. Primeiro commit
git commit -m "Primeiro commit: Website ONG ProPet completo"

# 5. Adicionar remote (SUBSTITUA SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/projeto-propet-ong.git

# 6. Renomear branch
git branch -M main

# 7. Push para GitHub
git push -u origin main
```

---

## 🎉 Pronto!

Após seguir estes passos, seu projeto estará no GitHub e disponível para:
- ✅ Compartilhar com professores e recrutadores
- ✅ Mostrar no currículo e LinkedIn
- ✅ Hospedar gratuitamente no GitHub Pages
- ✅ Trabalhar em equipe (se necessário)
- ✅ Manter histórico de versões

---

**Desenvolvido com 💙 para a ONG ProPet**  
**Data**: 19/10/2025
