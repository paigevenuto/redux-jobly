import "./App.css";
import ProductsList from "./ProductsList";
import CartList from "./CartList";
import NavBar from "./NavBar";
import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const store = createStore(rootReducer);

/*
 *id
 *name, price, description, image_url
 */

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/cart">
              <CartList />
            </Route>
            <Route exact path="/">
              <ProductsList />
            </Route>
            <Route exact path="/products/:productId">
              <ProductDetails />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
