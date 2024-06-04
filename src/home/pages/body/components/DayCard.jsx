import saltado from '../../../../assets/img/Banner/saltado.webp'

const DayCard = () => {
  return (
    <div className="bg-azul_verde flex flex-col items-center border border-gray-300 rounded-lg shadow-2xl md:flex-row-reverse md:h-80">
      <div className="h-full lg:w-1/2">
        <img className="h-full bg-auto" src={saltado} alt="saltado" />
      </div>

      <div className="flex flex-col justify-between p-4 leading-normal lg:w-1/2">
        <div>
          <h2 className="text-azul_claro font-bold text-2xl lg:text-4xl">
            ¡Un espacio Bien Servido!
          </h2>
        </div>

        <div>
          <p className="my-3 text-gris_claro font-medium lg:text-2xl">
            Encuentra aquí nuestras recetas y consejos nutricionales que creamos
            para ti y tu familia, sorpréndete.
          </p>
        </div>

        <div>
          <a href="#">
            <button className="bg-rojo_claro hover:bg-red-500 w-full mt-5 text-white font-bold py-2 px-20 rounded transition duration-300 shadow-md hover:shadow-lg lg:text-xl lg:w-auto">
              Inicio
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DayCard
