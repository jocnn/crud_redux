import FormProduct from "./FormProducto"

const NewProduct = () => {
  
  const params = {
    nombre: 'Nuevo',
    accion: 'Nuevo Producto'
  }
  
  return (
    <>
      <FormProduct params={params} />
    </>
  )
}

export default NewProduct