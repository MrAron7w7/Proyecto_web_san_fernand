
// eslint-disable-next-line react/prop-types
const Nav = ({ name, href }) => {
  return (
    <li>
          <a href={href} className="block py-2 px-3 text-negro rounded font-semibold md:bg-transparent md:p-0 text-xl hover:text-azul_claro">{name}</a>
        </li>
  )
}

export default Nav