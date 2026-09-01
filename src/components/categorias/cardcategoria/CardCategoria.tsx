import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="
      border border-gray-200
      rounded-xl
      shadow-md
      overflow-hidden
      bg-white
    ">

      <div className="p-6">

        <h2 className="
          text-xl
          font-bold
          text-teal-700
        ">
          {categoria.nome}
        </h2>

      </div>

      <div className="flex">

        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="
            w-full
            text-center
            bg-teal-500
            text-white
            py-2
            hover:bg-teal-600
          "
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="
            w-full
            text-center
            bg-red-500
            text-white
            py-2
            hover:bg-red-600
          "
        >
          Deletar
        </Link>

      </div>

    </div>
  );
}

export default CardCategoria;