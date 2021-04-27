
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Pages/index'
import SignIn from './Pages/SignIn'
import Navbar from './Components/Navbar';
import OrderSuccess from './Pages/OrderSuccess'
// import adminlte from './Pages/adminlte';
import { RestuarantDescription } from './Pages/restuarantDescription';
import RestaurantListPage from './Pages/restaurantListPage';
import AddToCart from './Pages/AddToCart';
import Payment from './Pages/Payment';
function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/signin" component={SignIn} exact ></Route>
        {/* <Route path="/admin" component={adminlte} exact></Route> */}
        <Route path="/restuarant" component={RestuarantDescription} exact></Route>
        <Route path="/list" component={RestaurantListPage} exact></Route>
        <Route path="/cart" component={AddToCart} exact></Route>
        <Route path="/restaurant/:id" component={RestuarantDescription} exact></Route>
        <Route path="/pay" component={Payment} exact></Route>
      </Switch>

    </Router>
  );
}

export default App;
