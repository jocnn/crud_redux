import {
	PRODUCTO_AGREGAR,
	PRODUCTO_AGREGAR_EXITO,
	PRODUCTO_AGREGAR_ERROR,
  PRODUCTO_DESCARGAR,
  PRODUCTO_DESCARGAR_EXITO,
  PRODUCTO_DESCARGAR_ERROR
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export function crearNuevoProductoAccion(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto())

    try {
      await clienteAxios.post('/productos', producto)
      dispatch(agregarProductoExito(producto))

      Swal.fire(
        'Correcto',
        'El producto se agrego correctamente',
        'success'
      )

    } catch (error) {
      console.log(error)
      dispatch(agregarProductoError(true))

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo'
      })
    }
  }
}

const agregarProducto = () => ({
  type: PRODUCTO_AGREGAR,
  payload: true
})

const agregarProductoExito = producto => ({
  type: PRODUCTO_AGREGAR_EXITO,
  payload: producto
})

const agregarProductoError = estado => ({
  type: PRODUCTO_AGREGAR_ERROR,
  payload: estado
})

export function obtenerProductosAction() {
  return async dispatch => {
    dispatch(descargarProductos())

    try {
      const resp = await clienteAxios('/productos')
      dispatch(descargaProductosExitoso(resp.data))
      
    } catch (error) {
      
    }
  }
}

const descargarProductos = () => ({
  type: PRODUCTO_DESCARGAR,
  payload: true
})

const descargaProductosExitoso = productos => ({
  type: PRODUCTO_DESCARGAR_EXITO,
  payload: productos,
})