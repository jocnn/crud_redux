import {
	PRODUCTO_AGREGAR,
	PRODUCTO_AGREGAR_EXITO,
	PRODUCTO_AGREGAR_ERROR,
} from "../types";

export function crearNuevoProductoAccion() {
  return () => {
    console.log('desde actions - nuevo producto')
  }
}