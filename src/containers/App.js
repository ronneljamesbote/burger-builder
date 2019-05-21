import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Spinner from "../components/UI/Spinner/Spinner";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

const Checkout = React.lazy(() => import("./Checkout/Checkout"));
const Orders = React.lazy(() => import("./Orders/Orders"));

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route
            path="/checkout"
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <Checkout {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/orders"
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <Orders {...props} />
              </Suspense>
            )}
          />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
