export default interface Produto {
  id: number;
  nome: string;
  preco: number | string;
  foto: string;
  categoria: {
    id: number;
    nome: string;
  };
}