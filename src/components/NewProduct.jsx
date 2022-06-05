import { useDispatch, useSelector } from "react-redux"

import { crearNuevoProductoAccion } from "../actions/productActions"

const NewProduct = () => {

  const dispatch = useDispatch()
  const agregarProducto = dispatch( crearNuevoProductoAccion() )

  const handleSubmit = e => {
    e.preventDefault()

    // validar formlulario

    // si no hay errores

    // crear nuevo producto
    agregarProducto()
  }
  
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2
                className="text-center mb-4 font-weight-bold"
              >
                Nuevo Producto
              </h2>

              <form
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Producto</label>
                  <input 
                    id="nombre"
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="nombre" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="precio">Precio Producto</label>
                  <input 
                    id="precio"
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="precio"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary font-weight text-uppercase d-block w-100"
                >
                  Crear Producto
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewProduct