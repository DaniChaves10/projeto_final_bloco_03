import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  function pesquisarProduto(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (busca.trim()) {
      navigate(`/produtos?busca=${encodeURIComponent(busca)}`);
    } else {
      navigate("/produtos");
    }
  }

  return (
    <div className="bg-teal-50">
      <div
        className="
          container mx-auto
          min-h-[70vh]
          grid grid-cols-1 md:grid-cols-2
          items-center
          px-4 sm:px-6
          py-8 md:py-12
          gap-8 md:gap-10
        "
      >
        <div className="flex flex-col gap-5 md:gap-6 text-center md:text-left">
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold
              text-teal-700
            "
          >
            Seja Bem-vindo
          </h1>

          <p className="text-base sm:text-lg text-gray-600">
            Medicamentos, cuidados e bem-estar para você
            e toda a sua família.
          </p>

          <form
            onSubmit={pesquisarProduto}
            className="
              flex flex-col sm:flex-row
              w-full max-w-xl
              mx-auto md:mx-0
              gap-3 sm:gap-0
            "
          >
            <input
              type="text"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Buscar medicamentos e produtos..."
              className="
                w-full
                px-4 py-3
                bg-white
                border border-gray-300
                rounded-lg sm:rounded-r-none
                outline-none
                focus:border-teal-500
              "
            />

            <button
              type="submit"
              className="
                bg-teal-600
                hover:bg-teal-700
                text-white
                font-medium
                px-6 py-3
                rounded-lg sm:rounded-l-none
                transition
                cursor-pointer
                whitespace-nowrap
              "
            >
              Buscar
            </button>
          </form>

          <div className="flex justify-center md:justify-start">
            <Link
              to="/produtos"
              className="
                inline-block
                bg-teal-600
                text-white
                px-6 py-3
                rounded-lg
                hover:bg-teal-700
                transition
              "
            >
              Ver Produtos
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/home.png"
            alt="Farmácia"
            className="
              w-full
              max-w-xs sm:max-w-sm md:max-w-md
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;