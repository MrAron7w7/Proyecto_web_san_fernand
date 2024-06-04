import { useState } from 'react'
import logo_footer from '../../../assets/img/Banner/logo_footer.webp'
import IconButton from './components/IconButton'

const Footer = () => {
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName)
  }
  return (
    <>
      <footer id="nosotros" className="bg-azul_claro   mt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between flex flex-col items-center">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo_footer} className="h-36" alt="Logo" />
            </a>

            <ul className="flex flex-wrap justify-around items-center mb-6 text-sm font-medium  gap-4 lg:gap-10 sm:mt:5 mt-5">
              <IconButton
                iconClass="icon-[basil--twitter-outline]"
                onClick={() => handleButtonClick('twitter')}
                isSelected={selectedButton === 'twitter'}
              />

              <IconButton
                iconClass="icon-[basil--instagram-outline]"
                onClick={() => handleButtonClick('instagram')}
                isSelected={selectedButton === 'instagram'}
              />
              <IconButton
                iconClass="icon-[basil--facebook-outline]"
                onClick={() => handleButtonClick('facebook')}
                isSelected={selectedButton === 'facebook'}
              />
              <IconButton
                iconClass="icon-[basil--youtube-outline]"
                onClick={() => handleButtonClick('youtube')}
                isSelected={selectedButton === 'youtube'}
              />
            </ul>
          </div>

          <hr className="my-6 border-rojo_claro sm:mx-auto  lg:my-8" />

          <span className="block text-sm sm:text-center text-white">
            © 2024{' '}
            <a href="#" className="hover:underline">
              San Fernando™
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
