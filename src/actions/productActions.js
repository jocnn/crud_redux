import {
	PRODUCTO_AGREGAR,
	PRODUCTO_AGREGAR_EXITO,
	PRODUCTO_AGREGAR_ERROR,
} from "../types";
import clienteAxios from "../config/axios";

export function crearNuevoProductoAccion(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto())

    try {
      await clienteAxios.post('/productos', producto)
      dispatch(agregarProductoExito(producto))
    } catch (error) {
      console.log(error)
      dispatch(agregarProductoError(true))
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