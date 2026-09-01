# 💊 Projeto Farmácia — React

<p align="center">
  <img src="./public/home.png" alt="Projeto Farmácia" width="500"/>
</p>

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Performance Goal Check — Bloco 03**, utilizando **React, TypeScript e Tailwind CSS**.

O objetivo da aplicação é desenvolver o Frontend de um sistema de Farmácia, consumindo uma **API REST** e implementando o **CRUD completo do recurso Categoria**.

A aplicação permite visualizar, cadastrar, editar e excluir categorias de produtos através da integração com o Backend.

---

## 🚀 Funcionalidades

- 🏠 Página inicial da Farmácia
- 🧭 Navegação entre páginas utilizando React Router DOM
- 📋 Listagem de Categorias
- ➕ Cadastro de novas Categorias
- ✏️ Edição de Categorias
- 🗑️ Exclusão de Categorias
- 🔗 Integração com API REST
- 📱 Layout responsivo
- ⏳ Feedback de carregamento
- 🎨 Interface estilizada com Tailwind CSS

---

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Phosphor Icons
- React Spinners
- Git
- GitHub

---

## 🔗 Backend

O Frontend consome a API da Farmácia disponibilizada através do Render.

**Swagger da API:**

https://farmacia-jk1x.onrender.com/swagger-ui/swagger-ui/index.html#/

### Endpoints utilizados

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/categorias` | Lista todas as categorias |
| GET | `/categorias/{id}` | Busca uma categoria por ID |
| GET | `/categorias/nome/{nome}` | Busca categorias pelo nome |
| POST | `/categorias` | Cadastra uma nova categoria |
| PUT | `/categorias` | Atualiza uma categoria |
| DELETE | `/categorias/{id}` | Exclui uma categoria |

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── categorias/
│   │   ├── cardcategoria/
│   │   ├── deletarcategoria/
│   │   ├── formcategoria/
│   │   └── listacategoria/
│   ├── footer/
│   └── navbar/
│
├── models/
│   ├── Categoria.ts
│   └── Produto.ts
│
├── pages/
│   └── home/
│
├── services/
│   └── Service.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## 🌿 Organização das Branches

O desenvolvimento do projeto foi dividido em etapas:

### `01_Componente_Home_navbar_footer`

Construção e estilização dos componentes:

- Home
- Navbar
- Footer

### `02_Rotas`

Configuração das rotas da aplicação utilizando **React Router DOM**.

### `03_CRUD_Categoria`

Implementação do CRUD completo de Categoria:

- GET
- POST
- PUT
- DELETE

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/DaniChaves10/projeto_final_bloco_03.git
```

### 2. Entre na pasta

```bash
cd projeto_final_bloco_03
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a API

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://farmacia-jk1x.onrender.com
```

### 5. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível normalmente em:

```text
http://localhost:5173
```

---

## 📸 Projeto

A aplicação possui uma página inicial responsiva e telas específicas para gerenciamento das categorias.

### Home

Página inicial da Farmácia com acesso à listagem de categorias.

### Categorias

Exibe todas as categorias cadastradas na API, disponibilizando as opções de edição e exclusão.

### Cadastrar Categoria

Permite cadastrar uma nova categoria.

### Editar Categoria

Permite alterar os dados de uma categoria existente.

### Deletar Categoria

Solicita a confirmação do usuário antes da exclusão da categoria.

---

## 🎯 Conceitos Aplicados

Durante o desenvolvimento foram aplicados conceitos como:

- Componentização com React
- Props
- Hooks (`useState` e `useEffect`)
- React Router DOM
- `useNavigate`
- `useParams`
- Consumo de API REST
- Axios
- Requisições assíncronas
- CRUD
- Interfaces com TypeScript
- Relacionamento entre Models
- Flexbox
- CSS Grid
- Tailwind CSS
- Responsividade
- Versionamento com Git e GitHub

---

## 👨‍💻 Autor

**Daniel Araujo**

Desenvolvido como parte das atividades de Desenvolvimento Full Stack.

### GitHub

[@DaniChaves10](https://github.com/DaniChaves10)

---

<p align="center">
  Desenvolvido com 💚 e React ⚛️
</p>