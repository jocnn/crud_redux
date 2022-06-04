import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Products from "./components/Products"
import NewProduct from "./components/NewProduct"
import EditProduct from "./components/EditProduct"

import { Provider } from 'react-redux'
import store from "./store"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  )
}

export default App
