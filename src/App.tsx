import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";

import ListaCategorias from "./components/categorias//listacategoria/ListaCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";

function App() {

  return (
    <BrowserRouter>
      <div className="
        min-h-screen
        flex
        flex-col
        bg-gray-50
      ">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"element={<Home />} />
            <Route path="/home"element={<Home />} />
            <Route path="/categorias"element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria"element={<FormCategoria />} />
            <Route path="/editarcategoria/:id"element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id"element={<DeletarCategoria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;