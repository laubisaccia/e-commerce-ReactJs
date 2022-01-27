import './App.css';
// import ItemCount from './components/ItemCount';
// import ItemList from './components/itemList';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const saludo ="Bienvenido, pronto vamos a actualizar la tienda :)"
  return (
   <> 
  
   <BrowserRouter>
      <NavBar  />
      <Switch>
          <Route exact path="/" >
          <ItemListContainer greeting={saludo}/>
          </Route>

          <Route path="/productos/:itemId">
          <ItemDetailContainer />
          </Route>

          <Route path="/cat/:category">
          <ItemListContainer />
          </Route>
      
      {/* <ItemCount initial={1} stock={5}/> */}
      </Switch>
      <Footer />
      </BrowserRouter>
      
   </>

  );
}

export default App;
