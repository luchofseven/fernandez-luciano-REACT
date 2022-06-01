import  NavBar  from './components/NavBar.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'

function App() {

  const onAdd = (contador) => {
    return alert(`Agregaste ${contador} items al carrito`)
  }

  return ( 
    <>
    
    <NavBar />

    <ItemListContainer mensaje={"Bienvenidos a mi tienda online!"} />
    
    <ItemCount stock={10} inicial={1} onAdd={onAdd} />

    </>
  )
}

export default App;
