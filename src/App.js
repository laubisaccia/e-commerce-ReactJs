import './App.css';
// import ItemCount from './components/ItemCount';
// import ItemList from './components/itemList';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const saludo ="Bienvenido, pronto vamos a actualizar la tienda :)"
  return (
   <> 
  
   <BrowserRouter>
      <NavBar  />
      <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={saludo}/>} >
          </Route>

          <Route path="/item/:itemId" element={ <ItemDetailContainer />}>
          </Route>
      
      {/* <ItemCount initial={1} stock={5}/> */}
      </Routes>
      </BrowserRouter>
   </>

  );
}

export default App;
