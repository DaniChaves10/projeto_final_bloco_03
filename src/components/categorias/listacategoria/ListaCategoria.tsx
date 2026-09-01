import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <h1
        className="
          text-2xl sm:text-3xl
          text-center
          font-bold
          text-teal-700
          mb-6 sm:mb-8
        "
      >
        Categorias
      </h1>

      {categorias.length === 0 ? (
        <div className="flex justify-center py-10">
          <ClipLoader size={50} />
        </div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4 sm:gap-6
          "
        >
          {categorias.map((categoria) => (
            <CardCategoria
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaCategorias;