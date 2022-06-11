import  NavBar  from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'

export default function App() {

  const onAdd = (contador) => {
    return alert(`Agregaste ${contador} items al carrito`)
  }

  return ( 
    
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="*" element={<h1 className="text-center m-4">PAGE NOT FOUND</h1>}/>
          <Route path="/" element={<ItemDetailContainer />} />
          <Route path="/inicio" element={<ItemDetailContainer />} />
          <Route path="productos" element={<ItemListContainer />} />
        </Routes>
      <Footer />
    </BrowserRouter>

  )
}