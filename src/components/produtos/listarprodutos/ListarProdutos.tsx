import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type Produto from "../../../models/Produtos";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardproduto/CardProduto";

function ListarProdutos() {

    const [searchParams] = useSearchParams();
    const buscaInicial = searchParams.get("busca") || "";

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [busca, setBusca] = useState(buscaInicial);

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">
        Produtos
      </h1>

      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Buscar produto pelo nome..."
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-teal-500"
        />
      </div>

      {produtosFiltrados.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhum produto encontrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosFiltrados.map((produto) => (
            <CardProduto
              key={produto.id}
              produto={produto}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListarProdutos;