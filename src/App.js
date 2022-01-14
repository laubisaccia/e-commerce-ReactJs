import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  const saludo ="Bienvenido, pronto vamos a actualizar la tienda :)"
  return (
   <> 
      <NavBar />
      <ItemListContainer greeting={saludo}/>
   </>

  );
}

export default App;
