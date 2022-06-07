import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { eliminarProductoAction } from "../actions/productActions"

import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

const Product = ({producto}) => {

  const { id, nombre, precio } = producto

  const dispatch = useDispatch()

  const confirmarEliminarProducto = id => {
    
    Swal.fire({
      title: '¿Esta seguro de eliminar?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar este producto!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(eliminarProductoAction(id))
      }
    })
  }

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
          onClick={ () => confirmarEliminarProducto(id) }
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Product