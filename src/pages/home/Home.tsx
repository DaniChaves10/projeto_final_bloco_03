import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-teal-50">

        <div className="
          container mx-auto
          min-h-[70vh]
          grid md:grid-cols-2
          items-center
          px-6 py-10
          gap-10
        ">

          <div className="flex flex-col gap-6">

            <h1 className="
              text-4xl md:text-5xl
              font-bold
              text-teal-700
            ">
              Seja Bem vindo
            </h1>

            <p className="text-lg text-gray-600">
              Medicamentos, cuidados e bem-estar para você
              e toda a sua família.
            </p>

            <div>
              <Link
                to="/categorias"
                className="
                  bg-teal-600
                  text-white
                  px-6 py-3
                  rounded-lg
                  hover:bg-teal-700
                  transition
                "
              >
                Ver Categorias
              </Link>
            </div>

          </div>

          <div className="flex justify-center">
            <img
              src="/home.png"
              alt="Farmácia"
              className="w-full max-w-md"
            />
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;