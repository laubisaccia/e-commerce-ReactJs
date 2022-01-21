import './App.css';
import ItemCount from './components/ItemCount';
// import ItemList from './components/itemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  const saludo ="Bienvenido, pronto vamos a actualizar la tienda :)"
  return (
   <> 
      <NavBar />
      <ItemListContainer greeting={saludo}/>
      <ItemCount initial={1} stock={5}/>
      
   </>

  );
}

export default App;
