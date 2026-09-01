import { Link } from "react-router-dom";
import type Produto from "../../../models/Produtos";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div
      className="
        border border-gray-200
        rounded-xl
        overflow-hidden
        shadow-sm
        bg-white
        flex flex-col
        justify-between
        h-full
      "
    >
      <div>
        <div className="bg-white p-4">
          <img
            src={produto.foto}
            alt={produto.nome}
            className="
              w-full
              h-40 sm:h-48
              object-contain
            "
          />
        </div>

        <div className="p-4 sm:p-5">
          <h2
            className="
              text-lg sm:text-xl
              font-bold
              text-teal-700
              mb-2
              wrap-break-word
            "
          >
            {produto.nome}
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-1">
            Preço: R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
          </p>

          <p className="text-sm sm:text-base text-gray-600">
            Categoria: {produto.categoria?.nome}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="
            w-full sm:w-1/2
            text-center
            bg-teal-600
            hover:bg-teal-700
            text-white
            py-3
            transition
          "
        >
          Editar
        </Link>

        <Link
          to={`/deletarproduto/${produto.id}`}
          className="
            w-full sm:w-1/2
            text-center
            bg-red-500
            hover:bg-red-600
            text-white
            py-3
            transition
          "
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;