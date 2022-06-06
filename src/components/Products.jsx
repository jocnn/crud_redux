import { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { obtenerProductosAction } from "../actions/productActions"

const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    
    // consultar API
    const cargarProductos = () => dispatch(obtenerProductosAction())
    cargarProductos()

  }, [])

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
            <td scope="col">Nombre</td>
            <td scope="col">Precio</td>
            <td scope="col">Acciones</td>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </>
  )
}

export default Products