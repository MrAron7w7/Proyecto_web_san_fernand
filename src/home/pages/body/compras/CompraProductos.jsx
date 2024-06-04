import IndexHeader from '../../appbar/IndexHeader'
import Footer from '../../footer/Footer'
import ItemProductos from './components/ItemProductos'
import { useShoppingCartStore } from '../../../../hook/showImage'
import Buttons from './components/Buttons'

const CompraProductos = () => {
  const { items } = useShoppingCartStore()
  const cartItemCount = items.length

  return (
    <>
      <IndexHeader />
      <div className="border-t border-y-8 border-blue w-full my-14"></div>

      <div className="pl-10">
        <h1 className="text-3xl font-semibold">Carrito de compras</h1>
      </div>
      <div className="md:flex ">
        {/* Item de los productos */}
        <div className="flex flex-col w-full">
          {cartItemCount > 0 ? (
            <ItemProductos />
          ) : (
            <div className="h-full flex items-center pl-10 pt-10">
              <p className="text-3xl">No hay productos seleccionados</p>
            </div>
          )}
        </div>

        {/* Botones de aceptar y cancelar */}
        <Buttons />
      </div>
      <Footer />
    </>
  )
}

export default CompraProductos
