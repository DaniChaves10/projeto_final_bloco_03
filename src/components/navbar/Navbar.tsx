import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-teal-600 text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        <Link
          to="/home"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <img  width={64} src="/public/favicon.png" alt="Logo Farmacia" /> 
          Farmácia
        </Link>

        <div className="flex gap-6 font-medium">

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

        </div>
      </div>
    </div>
  );
}

export default Navbar;