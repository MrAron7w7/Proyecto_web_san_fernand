import { useState } from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleAccept = () => {
    setModalOpen(true)
  }
  const handleCancel = () => {
    setModalOpen(false)
  }
  return (
    <>
      <div className="w-full md:w-1/3  px-10">
        <div className="mx-auto ">
          <div className="flex flex-col justify-center gap-5 h-60">
            <button
              type="button"
              className="bg-azul_claro py-2 px-4 text-3xl text-white rounded-lg"
              onClick={handleAccept}
            >
              Aceptar
            </button>
            <button
              type="button"
              className="bg-rojo_claro py-2 px-4 text-3xl text-white rounded-lg"
            >
              <Link to={'/'}>Cancelar</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-lg mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="text-3xl font-semibold">Confirmación</h3>
                <button
                  type="button"
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={handleCancel}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              <div className="relative flex-auto p-6 text-center">
                <svg
                  class="mx-auto mb-4 text-azul_agua w-12 h-12 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <p>¿Estás seguro de que deseas confirmar?</p>
                <div className="mt-5 flex justify-around">
                  <Link to={'/'}>
                    <button className="bg-azul_claro px-10 py-2 rounded-md text-white font-semibold">
                      Si
                    </button>
                  </Link>
                  <button
                    onClick={handleCancel}
                    className="bg-rojo_claro px-10 py-2 rounded-md text-white font-semibold"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Buttons
