import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produtos";

import {
  atualizar,
  buscar,
  cadastrar
} from "../../../services/Service";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: "",
    foto: "",
    categoria: {
      id: 0,
      nome: ""
    }
  });

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  useEffect(() => {
    buscarCategorias();

    if (id) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  function atualizarEstado(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    if (name === "categoria") {
      const categoriaSelecionada = categorias.find(
        (categoria) => categoria.id === Number(value)
      );

      if (categoriaSelecionada) {
        setProduto({
          ...produto,
          categoria: categoriaSelecionada
        });
      }

      return;
    }

    setProduto({
      ...produto,
      [name]:
        name === "preco"
          ? value === ""
            ? ""
            : Number(value)
          : value
    });
  }

  async function gerarNovoProduto(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      if (id) {
        await atualizar("/produtos", produto, setProduto);
        alert("Produto atualizado com sucesso!");
      } else {
        await cadastrar("/produtos", produto, setProduto);
        alert("Produto cadastrado com sucesso!");
      }

      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      alert("Erro ao salvar produto!");
    }
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 sm:px-6 py-6 sm:py-10">

      <h1
        className="
          text-2xl sm:text-3xl
          font-bold
          text-center
          text-teal-700
          mb-6 sm:mb-8
        "
      >
        {id ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form
        onSubmit={gerarNovoProduto}
        className="
          bg-white
          shadow-md
          rounded-xl
          p-4 sm:p-6
          flex flex-col
          gap-4 sm:gap-5
        "
      >
        {/* Nome */}
        <div>
          <label
            htmlFor="nome"
            className="block font-semibold text-gray-700 mb-2"
          >
            Nome do Produto
          </label>

          <input
            type="text"
            id="nome"
            name="nome"
            value={produto.nome}
            onChange={atualizarEstado}
            placeholder="Digite o nome do produto"
            className="
              w-full
              border border-gray-300
              rounded-lg
              p-3
              outline-none
              focus:border-teal-500
            "
            required
          />
        </div>

        {/* Preço */}
        <div>
          <label
            htmlFor="preco"
            className="block font-semibold text-gray-700 mb-2"
          >
            Preço
          </label>

          <div
            className="
              flex items-center
              border border-gray-300
              rounded-lg
              focus-within:border-teal-500
              overflow-hidden
            "
          >
            <span className="px-3 text-gray-600 font-medium">
              R$
            </span>

            <input
              type="number"
              id="preco"
              name="preco"
              value={produto.preco}
              onChange={atualizarEstado}
              step="0.01"
              min="0"
              placeholder="0,00"
              className="w-full p-3 outline-none min-w-0"
              required
            />
          </div>
        </div>

        {/* Foto */}
        <div>
          <label
            htmlFor="foto"
            className="block font-semibold text-gray-700 mb-2"
          >
            URL da Imagem
          </label>

          <input
            type="text"
            id="foto"
            name="foto"
            value={produto.foto}
            onChange={atualizarEstado}
            placeholder="/imagens/produtos_farmacia/produto_01.png"
            className="
              w-full
              border border-gray-300
              rounded-lg
              p-3
              outline-none
              focus:border-teal-500
            "
            required
          />
        </div>

        {/* Preview */}
        {produto.foto && (
          <div className="flex justify-center py-2">
            <img
              src={produto.foto}
              alt={produto.nome || "Pré-visualização do produto"}
              className="
                w-36 h-36
                sm:w-48 sm:h-48
                object-contain
                rounded-lg
                border
                p-2
              "
            />
          </div>
        )}

        {/* Categoria */}
        <div>
          <label
            htmlFor="categoria"
            className="block font-semibold text-gray-700 mb-2"
          >
            Categoria
          </label>

          <select
            id="categoria"
            name="categoria"
            value={produto.categoria?.id || ""}
            onChange={atualizarEstado}
            className="
              w-full
              border border-gray-300
              rounded-lg
              p-3
              outline-none
              focus:border-teal-500
              bg-white
            "
            required
          >
            <option value="">
              Selecione uma categoria
            </option>

            {categorias.map((categoria) => (
              <option
                key={categoria.id}
                value={categoria.id}
              >
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="
            w-full
            bg-teal-600
            hover:bg-teal-700
            text-white
            font-bold
            py-3
            rounded-lg
            transition
            cursor-pointer
          "
        >
          {id ? "Atualizar Produto" : "Cadastrar Produto"}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;