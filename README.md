# 💊 Farmácia — Projeto React

<p align="center">
  <img src="./public/home.png" alt="Página inicial do Projeto Farmácia" width="650"/>
</p>

<p align="center">
  Frontend de uma aplicação de Farmácia desenvolvido com React, TypeScript e Tailwind CSS.
</p>

---

## 🌐 Projeto Online

A aplicação está publicada na Vercel e pode ser acessada através do link abaixo:

🔗 **Deploy:**  
https://projetofinalbloco03-delta.vercel.app/

---

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Performance Goal Check — Bloco 03**, com o objetivo de aplicar os principais conceitos estudados em React.

A aplicação representa o Frontend de um sistema de **Farmácia**, consumindo uma API REST e implementando o **CRUD completo do recurso Categoria**.

Por meio da aplicação, é possível visualizar, cadastrar, editar e excluir categorias diretamente no Backend.

---

## 🚀 Funcionalidades

- 🏠 Página inicial da Farmácia
- 🧭 Navegação entre páginas
- 📋 Listagem de Categorias
- ➕ Cadastro de Categorias
- ✏️ Edição de Categorias
- 🗑️ Exclusão de Categorias
- 🔗 Integração com API REST
- ⏳ Feedback durante as operações
- 🎨 Interface estilizada com Tailwind CSS
- 📱 Layout responsivo
- 🌐 Deploy na Vercel

---

## 🛠️ Tecnologias Utilizadas

<div>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

</div>

### Principais bibliotecas

- React
- TypeScript
- Vite
- Tailwind CSS 4
- React Router DOM
- Axios
- Phosphor Icons
- React Spinners

---

## 🔗 Backend

A aplicação consome uma API REST de Farmácia disponibilizada através do Render.

### Swagger

https://farmacia-jk1x.onrender.com/swagger-ui/swagger-ui/index.html#/

### API

```text
https://farmacia-jk1x.onrender.com
```

---

## 📡 Endpoints de Categoria

| Método | Endpoint | Descrição |
| :---: | --- | --- |
| `GET` | `/categorias` | Lista todas as categorias |
| `GET` | `/categorias/{id}` | Busca uma categoria pelo ID |
| `GET` | `/categorias/nome/{nome}` | Busca categorias pelo nome |
| `POST` | `/categorias` | Cadastra uma nova categoria |
| `PUT` | `/categorias` | Atualiza uma categoria |
| `DELETE` | `/categorias/{id}` | Exclui uma categoria |

---

## 🔄 CRUD

O projeto implementa as quatro principais operações de um CRUD:

| Operação | Método HTTP | Implementação |
| --- | :---: | --- |
| Create | `POST` | Cadastrar Categoria |
| Read | `GET` | Listar Categorias |
| Update | `PUT` | Editar Categoria |
| Delete | `DELETE` | Deletar Categoria |

---

## 📁 Estrutura do Projeto

```text
projeto_final_bloco_03/
│
├── public/
│   ├── favicon.png
│   ├── home.png
│   └── logo.png
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── categorias/
│   │   │   ├── cardcategoria/
│   │   │   │   └── CardCategoria.tsx
│   │   │   │
│   │   │   ├── deletarcategoria/
│   │   │   │   └── DeletarCategoria.tsx
│   │   │   │
│   │   │   ├── formcategoria/
│   │   │   │   └── FormCategoria.tsx
│   │   │   │
│   │   │   └── listacategoria/
│   │   │       └── ListaCategoria.tsx
│   │   │
│   │   ├── footer/
│   │   │   └── Footer.tsx
│   │   │
│   │   └── navbar/
│   │       └── Navbar.tsx
│   │
│   ├── models/
│   │   ├── Categoria.ts
│   │   └── Produtos.ts
│   │
│   ├── pages/
│   │   └── home/
│   │       └── Home.tsx
│   │
│   ├── services/
│   │   └── Service.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── README.md
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## 🧭 Rotas da Aplicação

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/home` | Home |
| `/categorias` | Lista de Categorias |
| `/cadastrarcategoria` | Cadastro de Categoria |
| `/editarcategoria/:id` | Edição de Categoria |
| `/deletarcategoria/:id` | Exclusão de Categoria |

---

## 🌿 Organização das Branches

O desenvolvimento foi dividido em etapas através de branches.

### `01_Componente_Home_navbar_footer`

Desenvolvimento e estilização dos componentes:

- Navbar
- Home
- Footer
- Flexbox
- Grid
- Tailwind CSS

### `02_Rotas`

Configuração da navegação utilizando **React Router DOM**.

Foram implementadas as primeiras rotas da aplicação e os links de navegação.

### `03_CRUD_Categoria`

Implementação do CRUD completo de Categoria e integração com o Backend utilizando Axios.

Foram implementadas as operações:

```text
GET
POST
PUT
DELETE
```

---

## 🧠 Conceitos Aplicados

Durante o desenvolvimento foram utilizados conceitos como:

- Componentização
- Props
- Interfaces TypeScript
- Models
- Services
- Hooks
- `useState`
- `useEffect`
- `useParams`
- `useNavigate`
- React Router DOM
- Axios
- Requisições assíncronas
- API REST
- CRUD
- Relacionamento entre entidades
- Flexbox
- CSS Grid
- Tailwind CSS
- Responsividade
- Git e GitHub
- Deploy

---

## ⚙️ Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/DaniChaves10/projeto_final_bloco_03.git
```

### 2. Acesse a pasta

```bash
cd projeto_final_bloco_03
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a variável de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://farmacia-jk1x.onrender.com
```

### 5. Execute a aplicação

```bash
npm run dev
```

A aplicação será executada localmente pelo Vite.

---

## ☁️ Deploy

O Frontend foi publicado utilizando a **Vercel**.

🔗 **Aplicação:**  
https://projetofinalbloco03-delta.vercel.app/

O Backend está hospedado no **Render**.

🔗 **Swagger:**  
https://farmacia-jk1x.onrender.com/swagger-ui/swagger-ui/index.html#/

---

## 👨‍💻 Autor

### Daniel Araujo

Desenvolvedor Full Stack em formação, com foco em desenvolvimento de aplicações utilizando Java, Spring Boot, React e TypeScript.

🔗 **GitHub:**  
https://github.com/DaniChaves10

---

<p align="center">
  Desenvolvido com 💚, React ⚛️ e TypeScript.
</p>