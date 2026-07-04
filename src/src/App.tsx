import { Route, Switch } from "wouter";
import Home from "../Home";
import About from "../About";
import Training from "../Training";
import Marketplace from "../Marketplace";
import Services from "../Services";
import Contact from "../Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/training" component={Training} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <Router />
  );
}

export default App;
