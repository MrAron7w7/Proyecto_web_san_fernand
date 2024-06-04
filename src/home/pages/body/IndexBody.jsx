import bannerDesktop from '../../../assets/img/Banner/bg.webp'
import imageMobile from '../../../assets/img/Banner/banner-pequeño.webp'
import datas from '../../data/datas'
import { useState } from 'react'
import DayCard from './components/DayCard'
import { useShoppingCartStore } from '../../../hook/showImage'
import { Link } from 'react-router-dom'

const IndexBody = () => {
  const [selectedImage, setSelectedImage] = useState()
  const [visible, setVisible] = useState(true)
  const { addItem, items } = useShoppingCartStore()

  const cartItemCount = items.length

  const handleClick = (image) => {
    setSelectedImage(image)
    cardVisibility(image)
  }

  const cardVisibility = () => {
    setVisible(false)
  }

  const addToCart = (product) => {
    addItem(product)
  }

  const showCartItems = () => {
    const { items } = useShoppingCartStore.getState()
    console.log('Items en el carrito:')
    items.forEach((item) => {
      console.log(
        `Nombre: ${item.name} | Precio: ${item.price} | Imagen: ${item.img}`
      )
    })
  }

  return (
    <>
      {/* Banner: Responsive */}
      <article>
        <picture>
          <source
            className="h-96"
            media="(max-width:640px)"
            srcSet={imageMobile}
          />
          <source media="(min-width:641px)" srcSet={bannerDesktop} />

          <img
            className="w-full bg-cover h-auto mt-10 rounded-xl"
            src={bannerDesktop}
            alt="Banner"
          />
        </picture>
      </article>

      {/* Subtitle */}

      <div id="productos" className="mt-10 text-center">
        <h2 className="text-5xl font-semibold text-azul_claro">Productos</h2>
        <p className="text-xl mt-5 text-gris_claro font-normal">
          Elige y conoce todos nuestros productos de gran sabor
        </p>
      </div>

      {/* Seleccion de productos */}
      <article>
        <div className="grid grid-cols-2 gap-y-10 my-10 sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {/* Seleccion de cada producto */}
          {datas.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center"
            >
              <div
                className={` ${
                  selectedImage === data
                    ? 'border-4  border-rojo_claro rounded-full border-dashed p-2'
                    : ''
                }`}
              >
                <div
                  className="bg-azul_claro rounded-full cursor-pointer"
                  onClick={() => handleClick(data)}
                >
                  <img
                    className=" rounded-full
                  object-scale-down w-36 h-36"
                    src={data.src}
                    alt={data.alt}
                  />
                </div>
              </div>
              <p className="text-azul_claro font-bold text-2xl xl:text-base">
                {data.alt}
              </p>
            </div>
          ))}
        </div>
      </article>

      <div className="border-t border-y-8 border-rojo_claro w-full my-14 rounded-md "></div>

      {/* Sección para mostrar los productos relacionados */}

      {selectedImage && (
        <div className='className="my-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4'>
          {selectedImage.products.map((product) => (
            <div className="relative mb-16" key={product.id}>
              <div className="w-full h-full border-azul_claro border-2 border-dashed rounded-3xl shadow-lg ">
                <img
                  className="w-60 h-60 mx-auto rounded-3xl"
                  src={product.img}
                  alt=""
                />

                <div className="px-6 pb-8 text-center">
                  <div className="font-semibold text-xl">{product.name}</div>
                  <p className="text-azul_agua text-2xl font-bold">
                    S/{product.price}
                  </p>
                </div>
              </div>
              {/* Botón de agregar al carrito */}

              <div className="flex justify-center">
                <div className="bg-rojo_claro_thin rounded-full p-2 absolute -bottom-5 cursor-pointer">
                  <span
                    className="flex self-center bg-white w-8 h-8 icon-[basil--shopping-bag-outline]"
                    onClick={() => addToCart(product)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Card del dia */}
      {visible && <DayCard />}

      {/* Carrito de compras */}
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-rojo_claro text-white font-bold rounded-full px-2 py-2 "
          onClick={showCartItems}
        >
          <Link to={'/productos'}>
            <a className="flex" to="#">
              <img className="size-8 icon-[mdi--cart]" />
              <p className="text-sm">
                {cartItemCount > 0 ? cartItemCount : ''}
              </p>
            </a>
          </Link>
        </button>
      </div>
    </>
  )
}

export default IndexBody
