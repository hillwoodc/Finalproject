import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coupons from "./pages/Coupons";
import Detail from "./pages/Detail";
import ShoppingList from "./pages/ShoppingList";
import WishList from "./pages/WishList";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Form from "./Login/Form";
import AppliedRoute from "./components/AppliedRoute";


class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    isAuthenticated: false
  };
}

userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Routes childProps={childProps} />
        <Route exact path="/" component={Coupons} />
        <Route exact path="/coupons" component={Coupons} />
        <Route exact path="/shoppinglist" component={ShoppingList} />
        <Route exact path="/wishlist" component={WishList} />
        <Route exact path="/coupons/:id" component={Detail} />
        <Route exact path="/form" exact component={Form} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
};