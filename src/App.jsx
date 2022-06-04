import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Products from "./components/Products"
import NewProduct from "./components/NewProduct"
import EditProduct from "./components/EditProduct"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-5">
        <Routes path="/">
          <Route path="/" element={ <Products /> } />
          <Route path="/productos" >
            <Route index element={ <Products /> } />
            <Route path="nuevo" element={ <NewProduct /> } />
            <Route path="editar/:id" element={ <EditProduct /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
