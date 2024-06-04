import { useState } from 'react'
import bg from '../../../assets/img/Banner/logo.webp'
import Nav from './components/Nav'
const IndexHeader = () => {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav id="inicio" className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo y Titulo */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={bg} className="h-16" alt="lOGO" />
            <div className="flex flex-col text-start sm:text-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-negro lg:text-3xl">
                SAN <span className="text-azul_claro">FERNANDO</span>
              </span>
              <span className="text-gris_claro italic">La buena familia</span>
            </div>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${
                open ? 'top-20' : 'top-[-490px]'
              }`}
            >
              {/* Directorios*/}

              <Nav name="Inicio" href="#inicio" />
              <Nav name="Productos" href="#productos" />
              <Nav name="Nosotros" href="#nosotros" />
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100"
          >
            <span className="h-12 w-12 icon-[ci--hamburger-md]"></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default IndexHeader
