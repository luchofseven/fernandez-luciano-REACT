import  NavBar  from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'

function App() {

  const onAdd = (contador) => {
    return alert(`Agregaste ${contador} items al carrito`)
  }

  return ( 
    <>
    
    <NavBar />

    {/* <ItemCount stock={10} inicial={1} onAdd={onAdd} /> */}

    <ItemListContainer mensaje={"Bienvenidos a mi tienda online!"} />

    </>
  )
}

export default App;
