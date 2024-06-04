
// eslint-disable-next-line react/prop-types
const IconButton = ({ iconClass, onClick, isSelected }) => {
    const buttonClasses = `p-2 border-2 rounded-xl flex items-center border-white  ${
        isSelected ? 'bg-white' : 'bg-azul_claro'
      }`
  return (
    <div className={buttonClasses}>
      <button className=" flex items-center" onClick={onClick}>
        <i
          className={`${iconClass}  ${
            isSelected ? 'bg-azul_claro' : 'bg-white'
          } w-8 h-8`}
        ></i>
      </button>
    </div>
  )
}

export default IconButton