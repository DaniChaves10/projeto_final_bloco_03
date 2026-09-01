import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();

  const { id } =
    useParams<{ id: string }>();

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

  async function deletarCategoria() {

    try {

      await deletar(
        `/categorias/${id}`
      );

      alert("Categoria deletada com sucesso!");

      navigate("/categorias");

    } catch (error) {

      console.error(error);

      alert("Erro ao deletar Categoria!");

    }

  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="
      container
      mx-auto
      flex justify-center
      py-12
    ">

      <div className="
        w-full
        max-w-md
        bg-white
        shadow-xl
        rounded-xl
        overflow-hidden
      ">

        <div className="
          bg-red-500
          text-white
          p-5
          text-center
        ">

          <h1 className="text-2xl font-bold">
            Deletar Categoria
          </h1>

        </div>

        <div className="p-6 text-center">

          <p className="mb-3">
            Você tem certeza que deseja deletar:
          </p>

          <p className="
            text-xl
            font-bold
            text-teal-700
          ">
            {categoria.nome}
          </p>

        </div>

        <div className="flex">

          <button
            onClick={retornar}
            className="
              w-full
              bg-gray-500
              text-white
              py-3
              hover:bg-gray-600
            "
          >
            Não
          </button>

          <button
            onClick={deletarCategoria}
            className="
              w-full
              bg-red-500
              text-white
              py-3
              hover:bg-red-600
            "
          >
            Sim
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeletarCategoria;