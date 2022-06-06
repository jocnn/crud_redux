import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { obtenerProductosAction } from "../actions/productActions"

import Product from "./Product"

const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    // consultar API
    const cargarProductos = () => dispatch(obtenerProductosAction())
    cargarProductos()
  }, [])

  const productos = useSelector((state) => state.products.products)

  
  return (
    <>
      <h2
        className="text-center my-5"
      >
        Listado de Productos
      </h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map( producto => (
              <Product 
                key={producto.id}
                producto={producto}
              />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Products