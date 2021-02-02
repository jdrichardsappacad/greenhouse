import { Switch, Route } from "react-router-dom";
import Greenhouse from "./components/Greenhouse";
import Thermometer from "./components/Thermometer";
import Hygrometer from "./components/Hygrometer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/thermometer">
          <Thermometer />
        </Route>
        <Route path="/hygrometer">
          <Hygrometer />
        </Route>
        <Route path="/">
          <Greenhouse />
        </Route>
      </Switch>
    </>
  );
}

export default App;
