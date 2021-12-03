import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/hello">
            <h1>Hello</h1>
          </Route>
          <Route path="/movie/:params" element={<Detail/>}> 
              <Detail />
          </Route>
          <Route path="/" element={<Home/>}>
          <Home />
          </Route>
        </Switch>
      </Router>
    );
}

export default App;   