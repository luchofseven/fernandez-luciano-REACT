import NavBar  from './components/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  return ( 
    
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="*" element={<h1 className="text-center m-4">PAGE NOT FOUND</h1>} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
    
  )
}