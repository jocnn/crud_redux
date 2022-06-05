import {
	PRODUCTO_AGREGAR,
	PRODUCTO_AGREGAR_EXITO,
	PRODUCTO_AGREGAR_ERROR,
} from "../types";

export function crearNuevoProductoAccion(producto) {
  return () => {
    console.log(producto)
  }
}