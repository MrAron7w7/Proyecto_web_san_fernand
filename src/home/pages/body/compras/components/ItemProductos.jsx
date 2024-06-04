import { useShoppingCartStore } from '../../../../../hook/showImage'

const ItemProductos = () => {
  const { items } = useShoppingCartStore()

  return (
    <>
      {/* Itera sobre los elementos del carrito */}
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex m-10 rounded-tl-2xl rounded-r-2xl shadow-2xl">
            {/* Imagen */}
            <div className="bg-[#0053AA] w-72 h-60 rounded-tl-2xl">
              <img className="bg-cover size-full " src={item.img} alt="Logo" />
            </div>

            {/* Description*/}
            <div className="w-full h-60 flex items-center ">
              {/* Nombre - Precio - Stock*/}
              <div className="h-full w-1/2 flex flex-col justify-center pl-8 gap-5 sm:text-xl md:text-2xl lg:3xl">
                <p className="font-bold ">{item.name}</p>
                <p>S/{item.price}</p>
                <p className="text-azul_claro font-semibold">stock</p>
              </div>

              {/* Botones */}
              <div className="pl-4  items-center h-full w-1/2 gap-5 hidden md:flex">
                {/* plus */}
                <div>
                  <button>
                    <img className="cursor-pointer  size-10 icon-[mdi--minus]" />
                  </button>
                </div>

                {/* Contador de mas o menos */}
                <div>
                  <div className="text-xl px-2 py-1 bg-black rounded-lg">
                    <p className="text-white">0</p>
                  </div>
                </div>

                {/* less */}
                <div>
                  <button>
                    <img className="cursor-pointer size-10 icon-[mdi--plus]" />
                  </button>
                </div>

                {/* trash */}
                <div>
                  <button>
                    <img className="size-10 icon-[fluent--delete-12-filled]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ItemProductos
