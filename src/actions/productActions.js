import {
	PRODUCTO_AGREGAR,
	PRODUCTO_AGREGAR_EXITO,
	PRODUCTO_AGREGAR_ERROR,
} from "../types";

export function crearNuevoProductoAccion(producto) {
  return (dispatch) => {
    dispatch(agregarProducto())

    try {
      dispatch(agregarProductoExito(producto))
    } catch (error) {
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