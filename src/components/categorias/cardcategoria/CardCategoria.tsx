import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div
      className="
        border border-gray-200
        rounded-xl
        shadow-md
        overflow-hidden
        bg-white
        h-full
        flex flex-col
        justify-between
      "
    >
      <div className="p-4 sm:p-6">
        <h2
          className="
            text-lg sm:text-xl
            font-bold
            text-teal-700
            wrap-break-word
          "
        >
          {categoria.nome}
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="
            w-full sm:w-1/2
            text-center
            bg-teal-500
            text-white
            py-3
            hover:bg-teal-600
            transition
          "
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="
            w-full sm:w-1/2
            text-center
            bg-red-500
            text-white
            py-3
            hover:bg-red-600
            transition
          "
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;