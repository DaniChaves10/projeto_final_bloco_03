import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({
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
    <div
      className="
        container
        mx-auto
        flex
        justify-center
        px-4 sm:px-6
        py-6 sm:py-12
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white
          shadow-xl
          rounded-xl
          overflow-hidden
        "
      >
        <div
          className="
            bg-red-500
            text-white
            p-4 sm:p-5
            text-center
          "
        >
          <h1
            className="
              text-xl sm:text-2xl
              font-bold
            "
          >
            Deletar Categoria
          </h1>
        </div>

        <div className="p-4 sm:p-6 text-center">
          <p className="text-sm sm:text-base mb-3">
            Você tem certeza que deseja deletar:
          </p>

          <p
            className="
              text-lg sm:text-xl
              font-bold
              text-teal-700
              wrap-break-word
            "
          >
            {categoria.nome}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row">
          <button
            onClick={retornar}
            className="
              w-full sm:w-1/2
              bg-gray-500
              text-white
              py-3
              hover:bg-gray-600
              transition
              cursor-pointer
            "
          >
            Não
          </button>

          <button
            onClick={deletarCategoria}
            className="
              w-full sm:w-1/2
              bg-red-500
              text-white
              py-3
              hover:bg-red-600
              transition
              cursor-pointer
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