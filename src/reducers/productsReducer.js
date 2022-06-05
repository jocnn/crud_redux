import {
	PRODUCTO_AGREGAR,
	PRODUCTO_AGREGAR_EXITO,
	PRODUCTO_AGREGAR_ERROR,
} from "../types";

const initialState = {
	products: [],
	error: null,
	loading: false,
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
    default:
			return state;
	}
}
