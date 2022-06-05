import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { crearNuevoProductoAccion } from "../actions/productActions"

const NewProduct = () => {

  const [ nombre, setNombre ] = useState('')
  const [ precio, setPrecio ] = useState('')

  const dispatch = useDispatch()
  const agregarProducto = producto => dispatch( crearNuevoProductoAccion(producto) )

  const handleSubmit = e => {
    e.preventDefault()

    // validar formlulario
    if (nombre.includes('') || precio <= 0) {

    }

    // si no hay errores

    // crear nuevo producto
    agregarProducto({
      nombre, 
      precio
    })
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
                    value={nombre}
                    onChange={ e => setNombre(e.target.value) }
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
                    onChange={ e => setPrecio(Number(e.target.value)) }
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