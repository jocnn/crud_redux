import { useState, useEffect } from "react"

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

  const productos = useSelector(state => state.products.products)
  const error = useSelector(state => state.products.error)
  const loading = useSelector(state => state.products.loading)

  return (
    <>
      <h2
        className="text-center my-5"
      >
        Listado de Productos
      </h2>

      {
        error && 
          <p
            className="font-weight-bold alert alert-danger text-center mt-4"
          >Hubo un error</p>
      }
      {
        loading && 
          <p 
            className="text-center mt-4 alert alert-success font-weight-bold"
          >Cargando</p>
      }

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
            productos.length === 0 &&
            <tr>
              <td>No hay productos</td>
              <td></td>
              <td></td>
            </tr>
          }
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