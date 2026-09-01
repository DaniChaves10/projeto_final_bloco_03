import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import type Produto from "../../../models/Produtos";
import { buscar, deletar } from "../../../services/Service";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

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

  async function buscarProdutoPorId() {
    try {
      if (id) {
        await buscar(`/produtos/${id}`, setProduto);
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  }

  useEffect(() => {
    buscarProdutoPorId();
  }, [id]);

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`);

      alert("Produto deletado com sucesso!");

      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao deletar produto:", error);

      alert("Erro ao deletar produto!");
    }
  }

  function cancelar() {
    navigate("/produtos");
  }

  return (
    <div className="container mx-auto max-w-lg px-4 sm:px-6 py-6 sm:py-10">
      <div className="bg-white shadow-md rounded-xl overflow-hidden">

        {produto.foto && (
          <div className="flex justify-center p-4 sm:p-6">
            <img
              src={produto.foto}
              alt={produto.nome}
              className="
                w-full
                max-w-55
                sm:max-w-70
                h-44
                sm:h-56
                object-contain
              "
            />
          </div>
        )}

        <div className="p-4 sm:p-6">
          <h1
            className="
              text-xl sm:text-2xl
              font-bold
              text-center
              text-red-600
              mb-4
            "
          >
            Deletar Produto
          </h1>

          <p className="text-sm sm:text-base text-center text-gray-700 mb-2">
            Tem certeza que deseja deletar o produto:
          </p>

          <p
            className="
              text-lg sm:text-xl
              text-center
              font-bold
              text-teal-700
              mb-6
              wrap-break-word
            "
          >
            {produto.nome}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={cancelar}
              className="
                w-full sm:w-1/2
                bg-gray-500
                hover:bg-gray-600
                text-white
                font-bold
                py-3
                rounded-lg
                transition
                cursor-pointer
              "
            >
              Cancelar
            </button>

            <button
              onClick={deletarProduto}
              className="
                w-full sm:w-1/2
                bg-red-500
                hover:bg-red-600
                text-white
                font-bold
                py-3
                rounded-lg
                transition
                cursor-pointer
              "
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;