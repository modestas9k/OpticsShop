import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loading, Navigation, Footer } from "./components";
import { Home } from "./pages";
const CartLazy = lazy(() => import(`./pages/Cart/Cart`))
const ProductLazy = lazy(() => import(`./pages/Product/Product`))

function Routes() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={CartLazy} />
          <Route exact path="/product/:id" component={ProductLazy} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
