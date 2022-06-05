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
	switch (action.type) {
		default:
			return state;
	}
}
