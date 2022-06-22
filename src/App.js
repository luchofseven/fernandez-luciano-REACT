import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyProvider from './context/CartContext.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'
import NavBar  from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'

export default function App() {

  return ( 
    
    <BrowserRouter>
    <MyProvider>
      <NavBar />
          <Routes>
            <Route path="*" element={<h1 className="text-center m-4">PAGE NOT FOUND</h1>} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
      <Footer />
    </MyProvider>
    </BrowserRouter>
    
  )
}