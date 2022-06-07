import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { eliminarProductoAction, editarProductoAction } from "../actions/productActions"

import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

const Product = ({producto}) => {

  const { id, nombre, precio } = producto

  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const redireccionarEdicion = producto => {
    dispatch(editarProductoAction(producto))
    navigate(`/productos/editar/${producto.id}`)
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>{precio}</td>
      <td>
        <button
          type="button"
          onClick={ () => redireccionarEdicion(producto) }
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
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