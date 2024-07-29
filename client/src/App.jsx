import Product from "./pages/Product";
import Home from "./pages/home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Success from "./pages/Success";
// import { useSelector } from "react-redux";

const App = () => {
  const user = true
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
       <Route exact path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/register">
          {user ? <Redirect to="/"/> : <Register/>}
          {/* <Register/> */}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
          {/* <Login /> */}
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      
      </Switch>
    </Router>
  );
};

export default App;
