import { Link } from "react-router-dom"

const Product = ({producto}) => {

  const { id, nombre, precio } = producto

  return (
    <tr>
      <td>{nombre}</td>
      <td>{precio}</td>
      <td>
        <Link
          to={`/productos/editar/${id}`}
          className="btn btn-primary mr-2"
        >
          Editar
        </Link>
        <button
          type="button"
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Product