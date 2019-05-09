import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coupons from "./pages/Coupons";
import Detail from "./pages/Detail";
import ShoppingList from "./pages/ShoppingList";
import WishList from "./pages/WishList";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Coupons} />
        <Route exact path="/coupons" component={Coupons} />
        <Route exact path="/shoppinglist" component={ShoppingList} />
        <Route exact path="/wishlist" component={WishList} />
        <Route exact path="/coupons/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;