import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { iniciarEditarProductoAction } from "../actions/productActions"

const EditProduct = () => {

  const [ producto, setProducto ] = useState({
    nombre: '',
    precio: 0
  })

  const productoeditar = useSelector(state => state.products.producteditar)

  const { id, nombre, precio } = productoeditar

  useEffect(() => {
    setProducto(productoeditar)
  }, [productoeditar])

  const handleSubmit = e => {
    e.preventDefault()

    iniciarEditarProductoAction()    
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
                Editar Producto
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
                    value={nombre}
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
                    value={precio}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary font-weight text-uppercase d-block w-100"
                >
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProduct