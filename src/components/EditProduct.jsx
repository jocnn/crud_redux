import FormProduct from "./FormProducto"

const EditProduct = () => {
  
  const params = {
    nombre: 'Editar',
    accion: 'Guardar Cambios'
  }
  
  return (
    <>
      <FormProduct params={params} />
    </>
  )
}

export default EditProduct