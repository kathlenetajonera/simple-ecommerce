import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Cart from "./components/pages/Cart";
import ProductCatalog from './components/pages/ProductCatalog';
import ProductPage from "./components/pages/ProductPage";
import { CartItemsProvider } from "./context/CartItemsContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CartItemsProvider>
          <Header />

          <Switch>
            <Route exact path="/">
              <ProductCatalog />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/:id">
              <ProductPage />
            </Route>
          </Switch>
        </CartItemsProvider>
      </Router>
    </div>
  );
}

export default App;
