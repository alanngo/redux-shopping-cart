import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cart from './pages/Cart'
import Products from './pages/Products';
import Navbar from "./components/Navbar";
import './App.css';
import SingleItem from "./pages/SingleItem";
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const App =({currentItem})=>  
(
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!currentItem ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
);

const mapStateToProps = (state) => 
(
  {
    currentItem: state.shop.currentItem
  }
)
export default connect(mapStateToProps)(App);
