import {
	PRODUCTO_AGREGAR,
	PRODUCTO_AGREGAR_EXITO,
	PRODUCTO_AGREGAR_ERROR,
  PRODUCTO_DESCARGAR,
  PRODUCTO_DESCARGAR_EXITO,
  PRODUCTO_DESCARGAR_ERROR,
  PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINAR_EXITO,
  PRODUCTO_ELIMINAR_ERROR
} from "../types";

const initialState = {
	products: [],
	error: null,
	loading: false,
  productdelete: null
};

export default function (state = initialState, action) {
	switch(action.type) {
		case PRODUCTO_AGREGAR:
      return {
        ...state,
        loading: action.payload
      }
    case PRODUCTO_AGREGAR_EXITO:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }
    case PRODUCTO_AGREGAR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case PRODUCTO_DESCARGAR:
      return {
        ...state,
        loading: action.payload
      }
    case PRODUCTO_DESCARGAR_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }
    case PRODUCTO_DESCARGAR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case PRODUCTO_ELIMINAR:
      return {
        ...state,
        productdelete: action.payload,
      }
    default:
			return state;
	}
}
