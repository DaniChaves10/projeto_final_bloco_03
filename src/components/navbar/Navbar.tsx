import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <div className="w-full bg-teal-600 text-white">
      <div className="container mx-auto px-6 py-4">

        <div className="flex items-center justify-between">
          <Link
            to="/home"
            onClick={fecharMenu}
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold"
          >
            <img
              width={56}
              src="/favicon.png"
              alt="Logo Farmácia"
              className="w-12 sm:w-14"
            />

            Farmácia
          </Link>

          {/* Links desktop */}
          <div className="hidden lg:flex gap-6 font-medium">
            <Link
              to="/home"
              className="hover:text-teal-200 transition"
            >
              Home
            </Link>

            <Link
              to="/categorias"
              className="hover:text-teal-200 transition"
            >
              Categorias
            </Link>

            <Link
              to="/cadastrarcategoria"
              className="hover:text-teal-200 transition"
            >
              Cadastrar Categoria
            </Link>

            <Link
              to="/produtos"
              className="hover:text-teal-200 transition"
            >
              Produtos
            </Link>

            <Link
              to="/cadastrarproduto"
              className="hover:text-teal-200 transition"
            >
              Cadastrar Produto
            </Link>
          </div>

          {/* Botão mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="lg:hidden text-3xl cursor-pointer"
            aria-label="Abrir menu"
          >
            {menuAberto ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <div className="lg:hidden flex flex-col gap-4 pt-6 pb-2 font-medium">

            <Link
              to="/home"
              onClick={fecharMenu}
              className="hover:text-teal-200 transition"
            >
              Home
            </Link>

            <Link
              to="/categorias"
              onClick={fecharMenu}
              className="hover:text-teal-200 transition"
            >
              Categorias
            </Link>

            <Link
              to="/cadastrarcategoria"
              onClick={fecharMenu}
              className="hover:text-teal-200 transition"
            >
              Cadastrar Categoria
            </Link>

            <Link
              to="/produtos"
              onClick={fecharMenu}
              className="hover:text-teal-200 transition"
            >
              Produtos
            </Link>

            <Link
              to="/cadastrarproduto"
              onClick={fecharMenu}
              className="hover:text-teal-200 transition"
            >
              Cadastrar Produto
            </Link>

          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;