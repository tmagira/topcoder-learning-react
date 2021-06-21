import MineSiteInput from "./components/MineSiteInput";
import MineSiteOverview from "./components/MineSiteOverview";
import "./App.scss";

import { //router
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route path="/overview" exact>
            <MineSiteOverview/>
          </Route>

          <Route path="/" exact>
            <MineSiteInput/>
          </Route>

        </Switch>
      </Router>
    </div>
  
    

     
  )};

export default App;
