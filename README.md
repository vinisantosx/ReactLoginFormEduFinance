# 📘 React Login Form - EduFinance

Um **formulário de autenticação** desenvolvido em **React** para o projeto **EduFinance**, com páginas de **Login** e **Cadastro (Sign Up)**, validando campos essenciais e estruturado para fácil expansão e integração com APIs ou backends futuros.

---

## 📑 Índice

- [Sobre](#sobre)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Uso](#uso)  
- [Scripts disponíveis](#scripts-disponíveis)  
- [Estrutura do projeto](#estrutura-do-projeto)  
- [Melhorias futuras](#melhorias-futuras)  
- [Contribuição](#contribui%C3%A7%C3%A3o)  
- [Licença](#licença)  

---

## 🔎 Sobre

O **EduFinance** é um projeto acadêmico/prático que tem como objetivo auxiliar no aprendizado de **React** através da criação de um sistema simples de login.  
O sistema foi construído com **Vite** para performance e velocidade, além de uma estrutura organizada de componentes para fácil manutenção.

---

## ✨ Funcionalidades

- Página de **Login**  
- Página de **Cadastro (Sign Up)**  
- Validação de campos obrigatórios (e-mail e senha)  
- Estrutura preparada para integração com backend (API REST / Firebase / etc)  
- Uso de **React Hooks** para gerenciamento de estado  
- Layout simples e responsivo  

---

## 🛠 Tecnologias

- **React** (com Vite)  
- **JavaScript (ES6+)**  
- **JSX**  
- **CSS3**  
- **pnpm / npm / yarn** (para gerenciamento de pacotes)  

---

## 📋 Pré-requisitos

Antes de rodar o projeto, instale em sua máquina:

- Node.js (recomendado >= 18.x): https://nodejs.org/  
- Gerenciador de pacotes:
  - pnpm (recomendado): https://pnpm.io/  
  - ou npm: https://www.npmjs.com/  
  - ou yarn: https://yarnpkg.com/  

---

## 🚀 Instalação

Clone o repositório e instale as dependências:

```bash
# Clone o repositório
git clone https://github.com/vinisantosx/ReactLoginFormEduFinance.git

# Entre na pasta
cd ReactLoginFormEduFinance

# Instale as dependências (escolha um gerenciador)
pnpm install
# ou
npm install
# ou
yarn install
```

---

## ▶️ Uso

Execute o servidor de desenvolvimento:

```bash
pnpm run dev
# ou
npm run dev
# ou
yarn dev
```

Normalmente o Vite abre o app em:  
http://localhost:5173

---

## 📜 Scripts disponíveis

- `dev` → roda o app em modo de desenvolvimento  
- `build` → cria a versão otimizada de produção  
- `preview` → visualiza a build localmente  

(Verifique o `package.json` para confirmar os nomes exatos dos scripts.)

---

## 📂 Estrutura do projeto (exemplo)

```
ReactLoginFormEduFinance/
├── .codesandbox/            
├── .devcontainer/           
├── src/                     
│   ├── SignUp.jsx           
│   ├── Login.jsx            
│   ├── App.jsx              
│   ├── main.jsx             
│   └── styles/              
├── index.html               
├── package.json             
├── vite.config.ts           
└── README.md                
```

---

## 📌 Melhorias futuras

- Conectar com API para autenticação real  
- Implementar persistência de sessão (localStorage/SessionStorage)  
- Melhorar design com bibliotecas como **TailwindCSS** ou **Material UI**  
- Layout 100% responsivo para mobile  
- Testes unitários com **Jest/React Testing Library**  




 
