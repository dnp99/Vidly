import React from "react";
import Movie from "./component/movie.jsx";
import { Route, Redirect, Switch } from "react-router-dom";
import Customer from "./component/customer";
import Rental from "./component/rental";
import NotFound from "./component/notfound";
import NavBar from "./component/navbar";
import LoginForm from "./component/loginForm";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies" component={Movie}></Route>
          <Route path="/customers" component={Customer}></Route>
          <Route path="/rentals" component={Rental}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
