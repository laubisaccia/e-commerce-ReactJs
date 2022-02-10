import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartProvider from './context/CartProvider';


function App() {
  const saludo ="Bienvenido, pronto vamos a actualizar la tienda :)"
  return (
   <> 
  <CartProvider>

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

          <Route path="/cart">
          <Cart />
          </Route>
      
      {/* <ItemCount initial={1} stock={5}/> */}
      </Switch>
      <Footer />
      </BrowserRouter>
      
  </CartProvider>
  
   </>

  );
}

export default App;
