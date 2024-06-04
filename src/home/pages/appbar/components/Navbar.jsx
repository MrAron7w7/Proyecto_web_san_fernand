export const Navbar = () => {
  return (
    <>
      <ul className="bg-blue-200 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#producto">Productos</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
      </ul>
      <img className="w-10 h-10 cursor-pointer sm:hidden icon-[uim--bars]" />
    </>
  )
}
