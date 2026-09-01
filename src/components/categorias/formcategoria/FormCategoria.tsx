import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] =
    useState<Categoria>({
      id: 0,
      nome: ""
    });

  async function buscarPorId(id: string) {
    try {
      await buscar(
        `/categorias/${id}`,
        setCategoria
      );

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    if (id !== undefined) {
      buscarPorId(id);
    }

  }, [id]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement>
  ) {

    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });

  }

  async function gerarNovaCategoria(
    e: FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    try {

      if (id !== undefined) {

        await atualizar(
          "/categorias",
          categoria,
          setCategoria
        );

        alert("Categoria atualizada com sucesso!");

      } else {

        await cadastrar(
          "/categorias",
          categoria,
          setCategoria
        );

        alert("Categoria cadastrada com sucesso!");

      }

      navigate("/categorias");

    } catch (error) {

      console.error(error);

      alert("Erro ao salvar Categoria!");

    }

  }

  return (
    <div className="
      container
      flex flex-col
      items-center
      mx-auto
      py-10
    ">

      <h1 className="
        text-3xl
        font-bold
        text-teal-700
        mb-6
      ">
        {id
          ? "Editar Categoria"
          : "Cadastrar Categoria"}
      </h1>

      <form
        onSubmit={gerarNovaCategoria}
        className="
          flex flex-col
          gap-4
          w-full
          max-w-lg
          bg-white
          shadow-lg
          p-8
          rounded-xl
        "
      >

        <label
          htmlFor="tipo"
          className="font-medium"
        >
          Tipo da Categoria
        </label>

        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite o nome da categoria"
          value={categoria.nome}
          onChange={atualizarEstado}
          className="
            border
            border-gray-300
            rounded-lg
            p-3
            focus:outline-none
            focus:ring-2
            focus:ring-teal-500
          "
        />

        <button
          type="submit"
          className="
            bg-teal-600
            hover:bg-teal-700
            text-white
            font-bold
            py-3
            rounded-lg
            transition
          "
        >
          {id
            ? "Atualizar"
            : "Cadastrar"}
        </button>

      </form>

    </div>
  );
}

export default FormCategoria;